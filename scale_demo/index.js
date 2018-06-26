console.log("This is scale demo!");
// 数尺度
function renderLinear() {
    var data = [];
    for (var i = 1; i< 11; i++)data.push(i);

    var linear = d3.scaleLinear()
        .domain([1, 10])
        .range([1, 20]);
    d3.select("#container")
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .attr("class", 'cell')
    d3.select("#container")
        .selectAll('div')
        .data(data)
        .text(function(d, i){
            return d3.format('.2f')(linear(d));
        })
    d3.select("#container")
        .selectAll('div')
        .data(data)
        .exit()
        .remove()
}

function timeScale(){
    var start = new Date(2018, 0 , 1),
        end = new Date(2018, 11, 31),
        range = [0, 1000],
        timeScale = d3.scaleTime()
            .domain([start, end])
            .rangeRound(range),
        max = 12,
        data = [];
    for (var i = 0; i < max; i++) {
        var d = new Date(start.getTime());
        d.setMonth(start.getMonth() + i);
        data.push(d);
    }


    var selection = d3.select("#container").selectAll("div").data(data);
    selection
        .enter()
        .append("div")
        .attr("class", 'cell')
        .style("height", function(d, i){
            return timeScale(d) + "px";
        })
        .text(function(d){
            return timeScale(d);
        })
    selection.exit()
        .remove();

}

// renderLinear();
timeScale();

