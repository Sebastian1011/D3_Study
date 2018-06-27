console.log("this is transition demo")

function easy() {
    d3.select("#container")
        .append("div")
        .classed("box", true)
        .transition()
        .duration(4000)
        .style("background-color", "#add8e6")
        .style("margin-left", "500px")
        .style("width", "50px")
        .style("height", "50px")
}

// test all animation

function allAnimations() {
    var height = 1000
    var width = '100%'
    // 网页可见区域宽
    var bodyW = document.documentElement.clientWidth
    // 小球运动时间（毫秒）
    var duration = 2000
    // 运动缓动动画方式
    var animations = ['easeLinear', 'easePolyIn', 'easePolyOut', 'easePolyInOut', 'easeQuad', 'easeQuadIn', 'easeQuadOut',
        'easeQuadInOut', 'easeCubic', 'easeCubicIn', 'easeCubicOut', 'easeCubicInOut', 'easeSin', 'easeSinIn', 'easeSinOut', 'easeSinInOut',
        'easeExp', 'easeExpIn', 'easeExpOut', 'easeExpInOut', 'easeCircle', 'easeCircleIn', 'easeCircleOut', 'easeCircleInOut', 'easeElastic',
        'easeElasticIn', 'easeElasticOut', 'easeElasticInOut', 'easeBack', 'easeBackIn', 'easeBackOut', 'easeBackInOut',
        'easeBounce', 'easeBounceIn', 'easeBounceOut', 'easeBounceInOut'
    ]

    var svg = d3.select('body')
        .append('svg')
        .attr("height", height)
        .attr("width", width)

    svg.selectAll('circle')
        .data(animations)
        .enter()
        .append('circle')
        .style('cx', '50px')
        .style('cy', function(d, i){return i * 50 + 40 + 'px'})
        .style('r', 20)
        .style('fill', "#add8e6")

    svg.selectAll('circle')
        .each(function(d){
            d3.select(this)
                .transition()
                .ease(d3[d])
                .duration(duration)
                .style('cx', '1000px')
        })

    svg.selectAll('circle')
        .data(animations)
        .exit()
        .remove()
}

function init(){
    d3.select('body')
        .selectAll('*')
        .remove()
}


setInterval(function(){
    init();
    allAnimations();
}, 3000)