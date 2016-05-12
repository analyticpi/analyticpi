(function() {
    if($('#browserChart').length > 0) {
        get_stats();

        var randomColorGenerator = function () {
            return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
        };

        function get_stats(){
            var stats = $.ajax({
                type: "GET",
                url: stats_url,
                async: false
            }).success(function(){
                //setTimeout(function(){get_fb();}, 10000);
            }).responseText;

            var stast_obj = JSON.parse(stats);
            render_page_views(stast_obj.page_views);
            render_browsers(stast_obj.user_agents);
        }

        setInterval(function() {
            get_stats();
        }, 1000);

        function render_page_views(page_views) {
            $('#page-view').html(page_views);
        }

        function render_browsers(browsers) {
            var array = $.map(browsers, function(value, index) {
                return [value, index];
            });
            var data = {
                labels: $.map(browsers, function(value, index) {
                    return [index];
                }),
                datasets: [
                    {
                        data: $.map(browsers, function(value, index) {
                            return [value];
                        }),
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            };

            var ctx = $("#browserChart");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    animation: false
                }
            });
        }
    }
})();
(function() {
    if($('#pvMonthChart').length > 0) {
        get_stats();

        function get_stats() {
            var stats = $.ajax({
                type: "GET",
                url: "/site/dinever.com/api/pageview",
                data: { unit: "day", count: "30" },
                async: false
            }).success(function () {
                //setTimeout(function(){get_fb();}, 10000);
            }).responseText;

            var stast_obj = JSON.parse(stats);
            render_page_view_line_chart(stast_obj.page_views);
        }

        function render_page_view_line_chart(page_views) {
            var data = {
                labels: $.map(page_views, function (value, index) {
                    return [index];
                }),
                datasets: [
                    {
                        label: "Page view",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: $.map(page_views, function (value, index) {
                            return [value];
                        })
                    }
                ]
            };

            var pvMonthChart = new Chart($("#pvMonthChart"), {
                type: 'line',
                data: data,
                options: {
                    fullWidth: true
                }
            });
        }
    }
})();

$(document).ready(function(){
  if($('#pvRealtimeChart').length > 0) {
    get_stats();

    function get_stats() {
      var stats = $.ajax({
        type: "GET",
        url: "/site/dinever.com/api/pageview",
        data: { unit: "second", count: "10" },
        async: false
      }).success(function () {
      }).responseText;

      var stast_obj = JSON.parse(stats);
      render_page_view_line_chart(stast_obj.page_views);
    }

    function render_page_view_line_chart(page_views) {
      var optionsAnimation = {
        //Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps: 10,
        //Number - The value jump in the hard coded scale
        scaleStepWidth: 10,
        //Number - The scale starting value
        scaleStartValue: 0
      };

      // Not sure why the scaleOverride isn't working...
      var optionsNoAnimation = {
        animation: false,
        //Boolean - If we want to override with a hard coded scale
        scaleOverride: true,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps: 20,
        //Number - The value jump in the hard coded scale
        scaleStepWidth: 10,
        //Number - The scale starting value
        scaleStartValue: 0
      };

      var data = {
        labels: $.map(page_views, function (value, index) {
          return [index.slice(11, index.length)];
        }),
        datasets: [
          {
            label: "Page view",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: $.map(page_views, function (value, index) {
              return [value];
            })
          }
        ]
      };

      var pvMonthChart = new Chart($("#pvRealtimeChart"), {
        type: 'line',
        data: data,
        options: optionsAnimation
      });

      var count = 10;

      // this is ugly, don't judge me
      var updateData = function (oldData) {
        var stats = $.ajax({
          type: "GET",
          url: "/site/dinever.com/api/pageview",
          data: {unit: "second", count: "1"},
          async: false
        }).success(function () {
          //setTimeout(function(){get_fb();}, 10000);
        }).responseText;

        var page_views = JSON.parse(stats).page_views;

        var labels = oldData["labels"];
        var dataSetA = oldData["datasets"][0]["data"];
        var timestamp = $.map(page_views, function (value, index) {
          return index.slice(11, index.length);
        });

        var pv = $.map(page_views, function (value, index) {
          return value;
        });

        labels.shift();
        count++;
        labels.push(timestamp);
        dataSetA.push(parseInt(pv));
        dataSetA.shift();
      };


      //Get the context of the canvas element we want to select
      var ctx = $("#pvRealtimeChart");
      var optionsNoAnimation = {animation: false}
      var myNewChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: optionsNoAnimation
      });

      setInterval(function () {
        updateData(data);
        var myNewChart = new Chart(ctx, {
          type: 'line',
          data: data,
          options: optionsNoAnimation
        });
      }, 1000
                 );
    }
  }
});

(function() {
  if($('#trafficHoursChart').length > 0) {
    get_stats();

    function get_stats() {
      var stats = $.ajax({
        type: "GET",
        url: "/site/dinever.com/api/traffic_hours",
        async: false
      }).success(function () {
        //setTimeout(function(){get_fb();}, 10000);
      }).responseText;

      var stast_obj = JSON.parse(stats);
      render_traffic_hours_chart(stast_obj.traffic_hours);
    }

    function render_traffic_hours_chart(traffic_hours) {
      var labels = $.map(traffic_hours, function (value, index) {
          return [value[0]];
        });
      var data = $.map(traffic_hours, function (value, index) {
          return [value[2]];
        });
      var data = {
        labels: labels,
        datasets: [
          {
            label: "Page view",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data
          }
        ]
      };

      var pvMonthChart = new Chart($("#trafficHoursChart"), {
        type: 'line',
        data: data,
        options: {
          fullWidth: true
        }
      });
    }
  }
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInBhZ2V2aWV3LmpzIiwicmVhbHRpbWUuanMiLCJ0cmFmZmljX2hvdXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIGlmKCQoJyNicm93c2VyQ2hhcnQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldF9zdGF0cygpO1xuXG4gICAgICAgIHZhciByYW5kb21Db2xvckdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnIycgKyAoTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikgKyAnMDAwMDAwMCcpLnNsaWNlKDIsIDgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldF9zdGF0cygpe1xuICAgICAgICAgICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogc3RhdHNfdXJsLFxuICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxuICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2dldF9mYigpO30sIDEwMDAwKTtcbiAgICAgICAgICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgdmFyIHN0YXN0X29iaiA9IEpTT04ucGFyc2Uoc3RhdHMpO1xuICAgICAgICAgICAgcmVuZGVyX3BhZ2Vfdmlld3Moc3Rhc3Rfb2JqLnBhZ2Vfdmlld3MpO1xuICAgICAgICAgICAgcmVuZGVyX2Jyb3dzZXJzKHN0YXN0X29iai51c2VyX2FnZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdldF9zdGF0cygpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJfcGFnZV92aWV3cyhwYWdlX3ZpZXdzKSB7XG4gICAgICAgICAgICAkKCcjcGFnZS12aWV3JykuaHRtbChwYWdlX3ZpZXdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcl9icm93c2Vycyhicm93c2Vycykge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gJC5tYXAoYnJvd3NlcnMsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdmFsdWUsIGluZGV4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiAkLm1hcChicm93c2VycywgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICQubWFwKGJyb3dzZXJzLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkY2Mzg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMzZBMkVCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkZDRTU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzM2QTJFQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGQ0U1NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY3R4ID0gJChcIiNicm93c2VyQ2hhcnRcIik7XG4gICAgICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpOyIsIihmdW5jdGlvbigpIHtcbiAgICBpZigkKCcjcHZNb250aENoYXJ0JykubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRfc3RhdHMoKTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRfc3RhdHMoKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9zaXRlL2RpbmV2ZXIuY29tL2FwaS9wYWdldmlld1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdW5pdDogXCJkYXlcIiwgY291bnQ6IFwiMzBcIiB9LFxuICAgICAgICAgICAgICAgIGFzeW5jOiBmYWxzZVxuICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z2V0X2ZiKCk7fSwgMTAwMDApO1xuICAgICAgICAgICAgfSkucmVzcG9uc2VUZXh0O1xuXG4gICAgICAgICAgICB2YXIgc3Rhc3Rfb2JqID0gSlNPTi5wYXJzZShzdGF0cyk7XG4gICAgICAgICAgICByZW5kZXJfcGFnZV92aWV3X2xpbmVfY2hhcnQoc3Rhc3Rfb2JqLnBhZ2Vfdmlld3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyX3BhZ2Vfdmlld19saW5lX2NoYXJ0KHBhZ2Vfdmlld3MpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsczogJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQYWdlIHZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwwLjQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAkLm1hcChwYWdlX3ZpZXdzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHB2TW9udGhDaGFydCA9IG5ldyBDaGFydCgkKFwiI3B2TW9udGhDaGFydFwiKSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYoJCgnI3B2UmVhbHRpbWVDaGFydCcpLmxlbmd0aCA+IDApIHtcbiAgICBnZXRfc3RhdHMoKTtcblxuICAgIGZ1bmN0aW9uIGdldF9zdGF0cygpIHtcbiAgICAgIHZhciBzdGF0cyA9ICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIHVybDogXCIvc2l0ZS9kaW5ldmVyLmNvbS9hcGkvcGFnZXZpZXdcIixcbiAgICAgICAgZGF0YTogeyB1bml0OiBcInNlY29uZFwiLCBjb3VudDogXCIxMFwiIH0sXG4gICAgICAgIGFzeW5jOiBmYWxzZVxuICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICB9KS5yZXNwb25zZVRleHQ7XG5cbiAgICAgIHZhciBzdGFzdF9vYmogPSBKU09OLnBhcnNlKHN0YXRzKTtcbiAgICAgIHJlbmRlcl9wYWdlX3ZpZXdfbGluZV9jaGFydChzdGFzdF9vYmoucGFnZV92aWV3cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyX3BhZ2Vfdmlld19saW5lX2NoYXJ0KHBhZ2Vfdmlld3MpIHtcbiAgICAgIHZhciBvcHRpb25zQW5pbWF0aW9uID0ge1xuICAgICAgICAvL0Jvb2xlYW4gLSBJZiB3ZSB3YW50IHRvIG92ZXJyaWRlIHdpdGggYSBoYXJkIGNvZGVkIHNjYWxlXG4gICAgICAgIHNjYWxlT3ZlcnJpZGU6IHRydWUsXG4gICAgICAgIC8vKiogUmVxdWlyZWQgaWYgc2NhbGVPdmVycmlkZSBpcyB0cnVlICoqXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIG51bWJlciBvZiBzdGVwcyBpbiBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVTdGVwczogMTAsXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIHZhbHVlIGp1bXAgaW4gdGhlIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVTdGVwV2lkdGg6IDEwLFxuICAgICAgICAvL051bWJlciAtIFRoZSBzY2FsZSBzdGFydGluZyB2YWx1ZVxuICAgICAgICBzY2FsZVN0YXJ0VmFsdWU6IDBcbiAgICAgIH07XG5cbiAgICAgIC8vIE5vdCBzdXJlIHdoeSB0aGUgc2NhbGVPdmVycmlkZSBpc24ndCB3b3JraW5nLi4uXG4gICAgICB2YXIgb3B0aW9uc05vQW5pbWF0aW9uID0ge1xuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICAvL0Jvb2xlYW4gLSBJZiB3ZSB3YW50IHRvIG92ZXJyaWRlIHdpdGggYSBoYXJkIGNvZGVkIHNjYWxlXG4gICAgICAgIHNjYWxlT3ZlcnJpZGU6IHRydWUsXG4gICAgICAgIC8vKiogUmVxdWlyZWQgaWYgc2NhbGVPdmVycmlkZSBpcyB0cnVlICoqXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIG51bWJlciBvZiBzdGVwcyBpbiBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVTdGVwczogMjAsXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIHZhbHVlIGp1bXAgaW4gdGhlIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVTdGVwV2lkdGg6IDEwLFxuICAgICAgICAvL051bWJlciAtIFRoZSBzY2FsZSBzdGFydGluZyB2YWx1ZVxuICAgICAgICBzY2FsZVN0YXJ0VmFsdWU6IDBcbiAgICAgIH07XG5cbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBsYWJlbHM6ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gW2luZGV4LnNsaWNlKDExLCBpbmRleC5sZW5ndGgpXTtcbiAgICAgICAgfSksXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiUGFnZSB2aWV3XCIsXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC40KVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgZGF0YTogJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuXG4gICAgICB2YXIgcHZNb250aENoYXJ0ID0gbmV3IENoYXJ0KCQoXCIjcHZSZWFsdGltZUNoYXJ0XCIpLCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc0FuaW1hdGlvblxuICAgICAgfSk7XG5cbiAgICAgIHZhciBjb3VudCA9IDEwO1xuXG4gICAgICAvLyB0aGlzIGlzIHVnbHksIGRvbid0IGp1ZGdlIG1lXG4gICAgICB2YXIgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uIChvbGREYXRhKSB7XG4gICAgICAgIHZhciBzdGF0cyA9ICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICB1cmw6IFwiL3NpdGUvZGluZXZlci5jb20vYXBpL3BhZ2V2aWV3XCIsXG4gICAgICAgICAgZGF0YToge3VuaXQ6IFwic2Vjb25kXCIsIGNvdW50OiBcIjFcIn0sXG4gICAgICAgICAgYXN5bmM6IGZhbHNlXG4gICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2dldF9mYigpO30sIDEwMDAwKTtcbiAgICAgICAgfSkucmVzcG9uc2VUZXh0O1xuXG4gICAgICAgIHZhciBwYWdlX3ZpZXdzID0gSlNPTi5wYXJzZShzdGF0cykucGFnZV92aWV3cztcblxuICAgICAgICB2YXIgbGFiZWxzID0gb2xkRGF0YVtcImxhYmVsc1wiXTtcbiAgICAgICAgdmFyIGRhdGFTZXRBID0gb2xkRGF0YVtcImRhdGFzZXRzXCJdWzBdW1wiZGF0YVwiXTtcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXguc2xpY2UoMTEsIGluZGV4Lmxlbmd0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBwdiA9ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVscy5zaGlmdCgpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBsYWJlbHMucHVzaCh0aW1lc3RhbXApO1xuICAgICAgICBkYXRhU2V0QS5wdXNoKHBhcnNlSW50KHB2KSk7XG4gICAgICAgIGRhdGFTZXRBLnNoaWZ0KCk7XG4gICAgICB9O1xuXG5cbiAgICAgIC8vR2V0IHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgZWxlbWVudCB3ZSB3YW50IHRvIHNlbGVjdFxuICAgICAgdmFyIGN0eCA9ICQoXCIjcHZSZWFsdGltZUNoYXJ0XCIpO1xuICAgICAgdmFyIG9wdGlvbnNOb0FuaW1hdGlvbiA9IHthbmltYXRpb246IGZhbHNlfVxuICAgICAgdmFyIG15TmV3Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc05vQW5pbWF0aW9uXG4gICAgICB9KTtcblxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVEYXRhKGRhdGEpO1xuICAgICAgICB2YXIgbXlOZXdDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zTm9BbmltYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwXG4gICAgICAgICAgICAgICAgICk7XG4gICAgfVxuICB9XG59KTtcbiIsIihmdW5jdGlvbigpIHtcbiAgaWYoJCgnI3RyYWZmaWNIb3Vyc0NoYXJ0JykubGVuZ3RoID4gMCkge1xuICAgIGdldF9zdGF0cygpO1xuXG4gICAgZnVuY3Rpb24gZ2V0X3N0YXRzKCkge1xuICAgICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgdXJsOiBcIi9zaXRlL2RpbmV2ZXIuY29tL2FwaS90cmFmZmljX2hvdXJzXCIsXG4gICAgICAgIGFzeW5jOiBmYWxzZVxuICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2dldF9mYigpO30sIDEwMDAwKTtcbiAgICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgICAgdmFyIHN0YXN0X29iaiA9IEpTT04ucGFyc2Uoc3RhdHMpO1xuICAgICAgcmVuZGVyX3RyYWZmaWNfaG91cnNfY2hhcnQoc3Rhc3Rfb2JqLnRyYWZmaWNfaG91cnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcl90cmFmZmljX2hvdXJzX2NoYXJ0KHRyYWZmaWNfaG91cnMpIHtcbiAgICAgIHZhciBsYWJlbHMgPSAkLm1hcCh0cmFmZmljX2hvdXJzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIFt2YWx1ZVswXV07XG4gICAgICAgIH0pO1xuICAgICAgdmFyIGRhdGEgPSAkLm1hcCh0cmFmZmljX2hvdXJzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIFt2YWx1ZVsyXV07XG4gICAgICAgIH0pO1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlBhZ2Ugdmlld1wiLFxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuNClcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG5cbiAgICAgIHZhciBwdk1vbnRoQ2hhcnQgPSBuZXcgQ2hhcnQoJChcIiN0cmFmZmljSG91cnNDaGFydFwiKSwge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBmdWxsV2lkdGg6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIl19
