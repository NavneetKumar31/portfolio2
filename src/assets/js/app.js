// Engagement analysis 1 starts here
$(function () {

    // Uncomment to style it like Apple Watch
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'transparent'
            },
            colors: ['#F62366', '#9DFF02', '#0CCDD6'],
            title: {
                style: {
                    color: 'silver'
                }
            },
            tooltip: {
                style: {
                    color: 'silver'
                }
            }
        });
    }
    // 

    Highcharts.chart('container1', {

        chart: {
            type: 'solidgauge',
           
        },

        

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        credits:false,
        plotOptions: {
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Steps',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 80
            }]
        }, {
            name: 'Sleep',
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: 65
            }]
        }, {
            name: 'Stand',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '50%',
                innerRadius: '50%',
                y: 50
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});
// Engagement analysis 1 ends here
// Engagement analysis 2 starts here
$(function () {

    // Uncomment to style it like Apple Watch
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'transparent'
            },
            colors: ['#F62366', '#9DFF02', '#0CCDD6'],
            title: {
                style: {
                    color: 'silver'
                }
            },
            tooltip: {
                style: {
                    color: 'silver'
                }
            }
        });
    }
    // 

    Highcharts.chart('container2', {

        chart: {
            type: 'solidgauge',
           
        },

        

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        credits:false,
        plotOptions: {
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Steps',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 80
            }]
        }, {
            name: 'Sleep',
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: 65
            }]
        }, {
            name: 'Stand',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '50%',
                innerRadius: '50%',
                y: 50
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});


$("#visualE").on("click",function(){
var mydata = JSON.parse(data6);

var tev = parseInt(mydata[0].be);
var tcv = parseInt(mydata[0].bc);
var tdv = parseInt(mydata[0].bd);
Highcharts.chart('container1', {

    chart: {
        type: 'solidgauge',
        marginTop: 60
    },

    title: {
        text: 'Visual Appeal',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '12px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 110 - labelWidth / 2,
                y: 120
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Excitement',
        data: [{
            color: 'Orange',
            radius: '112%',
            innerRadius: '88%',
            y: tev
        }]
    }, {
        name: 'Comfort',
        data: [{
            color: 'green',
            radius: '87%',
            innerRadius: '63%',
            y: tcv
        }]
    }, {
        name: 'Disengaged',
        data: [{
            color:'red',
            radius: '62%',
            innerRadius: '38%',
            y: tdv
        }]
    }]
});


})

// Engagement analysis 2 ends here


// image gallery starts
$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>");
    imgSrc = $(this)
      .find("img")
      .attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function() {
     w = $(this).outerWidth();
     h = $(this).outerHeight();
     x = $(this).offset().left;
     y = $(this).offset().top;

    $(".active")
      .not($(this))
      .remove();
     copy = $(this).clone();
    copy
      .insertAfter($(this))
      .height(h)
      .width(w)
      .delay(500)
      .addClass("active");
    $(".active").css("top", y - 8);
    $(".active").css("left", x - 8);

    setTimeout(function() {
      copy.addClass("positioned");
    }, 0);
  });
});

$(document).on("click", ".img-c.active", function() {
   copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function() {
    copy.remove();
  }, 500);
});

// image gallery ends