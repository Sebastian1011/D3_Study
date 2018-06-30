
var width = 1000,
    height = 1000,
    r = 25,
    data = [
        {x: 50, y: 50}
    ],
    svg;
function init(){
    svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
}
function drag(){
    var drag = d3.drag()
        .on("drag", move)
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr('cx', function(d){return d.x})
        .attr('cy', function(d){return d.y})
        .attr('r', r)
        .call(drag);
}

function move(d){
    var x = d3.event.x,
        y = d3.event.y;
    if(inBoundaries(x, y)){
        d3.select(this)
            .attr("cx", d.x = x)
            .attr("cy", d.y = y)
    }

}

function inBoundaries(x, y){
    return (
        x >= (0+r) && x <=(width - r)
        && (y >= (0 + r)) && y <= (height -r)
    )
}
init();
drag();