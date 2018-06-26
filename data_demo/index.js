var data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10,8]
function render(data){
    d3.select("body")
        .selectAll('div.h-bar')
        .data(data)
        .enter()
        .append('div')
        .attr("class", 'h-bar')
        .append('span');
    d3.select("body")
        .selectAll('div.h-bar')
        .data(data)
        .style('width', function(d){return d * 3 +"px";})
        .select("span")
        .text(function(d){return d;});
    d3.select('body')
        .selectAll('div.h-bar')
        .data(data)
        .exit()
        .remove();
}

function runDataDemo() {
    setInterval(function () {
        data.shift();
        data.push(Math.floor(Math.random() * 100));
        render(data);
    }, 1500);
    render(data)
}

runDataDemo();

var fnData = [];
var next = function next(x) {
    return 15 + x*x; 
}
var newData = function newData(){
    if(fnData.length > 10)fnData = [];
    fnData.push(next);
    return fnData;
}
function renderFnData(){
    var selection = d3.select('#container')
        .selectAll('div')
        .data(newData);
    selection.enter()
        .append("div")
        .append("span")
    selection.exit()
        .remove();
    selection.attr("class", "v-bar")
        .style("height", function(d, i){
            return d(i) + "px";
        })
        .select("span")
        .text(function(d, i){
            return d(i);
        })
}

function runFnData(){
    setInterval(function () {
        renderFnData()
    }, 1500);
    renderFnData();
}
runFnData();
