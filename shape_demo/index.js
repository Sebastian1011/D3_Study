console.log('this is path')
var width = 1000,
    height = 1000,
    margin = 30,
    x = d3.scaleLinear()
    .domain([0, 10])
    .range([margin, width - margin]),
    y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin, margin]),
    data = [
            d3.range(10).map(function (i) {
                return {
                    x: i,
                    y: Math.sin(i) + 5
                };
            })
        ],
        svg,
        f = d3.scaleOrdinal(d3.schemeCategory10);
function init() {
    svg = d3.select('body')
        .append('svg')
        .attr('height', height)
        .attr('width', width)
}

function line() {
    var line = d3.line()
        .x(function (d) {
            return x(d.x);
        })
        .y(function (d) {
            return y(d.y);
        });
    svg.selectAll("path.line")
        .data(data)
        .enter()
        .append('path')
        .attr('class', 'line')
    svg.selectAll("path.line")
    .data(data)
    .transition().duration(5000)
    .attr('d', function(d){
        return line(d);
    })
}

    init();
line();