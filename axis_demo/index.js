console.log('This is axis demo');

var height = 500,
    width = 500,
    margin = 25,
    offset = 50,
    axisWidth = width - 2 * margin,
    svg;
function init() {
    d3.select("body")
        .select("#container")
        .selectAll("*")
        .remove()
}

function createSvg() {
    svg = d3.select("body")
        .select("#container")
        .append("svg")
        .attr("class", 'axis')
        .attr('width', width)
        .attr('height', height)
}

function renderAxis(scale, i) {
    var axis = d3.axisLeft()
        .scale(scale)
        .ticks(5);
    svg.append("g")
    .attr("transform", function(){
        var x = i * offset
        return "translate(" + x + "," + margin + ")";
    })
    .call(axis)
}

function renderAll(orient){
    renderAxis(d3.scaleLinear().domain([0, 1000]).range([0, axisWidth]), 1);
    renderAxis(d3.scalePow().exponent(2).domain([0, 1000]).range([0, axisWidth]), 2);
    renderAxis(d3.scaleTime().domain([new Date(2017, 0, 1), new Date(2017, 11, 31)]).range([0, axisWidth]), 3);
}

init();
createSvg();
renderAll('left')