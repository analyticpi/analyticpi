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
                fullWidth: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                },
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
          fullWidth: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
        }
      });
    }
  }
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInBhZ2V2aWV3LmpzIiwicmVhbHRpbWUuanMiLCJ0cmFmZmljX2hvdXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBpZigkKCcjYnJvd3NlckNoYXJ0JykubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRfc3RhdHMoKTtcblxuICAgICAgICB2YXIgcmFuZG9tQ29sb3JHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyMnICsgKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpICsgJzAwMDAwMDAnKS5zbGljZSgyLCA4KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRfc3RhdHMoKXtcbiAgICAgICAgICAgIHZhciBzdGF0cyA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHN0YXRzX3VybCxcbiAgICAgICAgICAgICAgICBhc3luYzogZmFsc2VcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnZXRfZmIoKTt9LCAxMDAwMCk7XG4gICAgICAgICAgICB9KS5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgICAgIHZhciBzdGFzdF9vYmogPSBKU09OLnBhcnNlKHN0YXRzKTtcbiAgICAgICAgICAgIHJlbmRlcl9wYWdlX3ZpZXdzKHN0YXN0X29iai5wYWdlX3ZpZXdzKTtcbiAgICAgICAgICAgIHJlbmRlcl9icm93c2VycyhzdGFzdF9vYmoudXNlcl9hZ2VudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnZXRfc3RhdHMoKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyX3BhZ2Vfdmlld3MocGFnZV92aWV3cykge1xuICAgICAgICAgICAgJCgnI3BhZ2UtdmlldycpLmh0bWwocGFnZV92aWV3cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJfYnJvd3NlcnMoYnJvd3NlcnMpIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9ICQubWFwKGJyb3dzZXJzLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlLCBpbmRleF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsczogJC5tYXAoYnJvd3NlcnMsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAkLm1hcChicm93c2VycywgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGNjM4NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzM2QTJFQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0ZGQ0U1NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNGRjYzODRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMzNkEyRUJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNGRkNFNTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGN0eCA9ICQoXCIjYnJvd3NlckNoYXJ0XCIpO1xuICAgICAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgaWYoJCgnI3B2TW9udGhDaGFydCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0X3N0YXRzKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0X3N0YXRzKCkge1xuICAgICAgICAgICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvc2l0ZS9kaW5ldmVyLmNvbS9hcGkvcGFnZXZpZXdcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHVuaXQ6IFwiZGF5XCIsIGNvdW50OiBcIjMwXCIgfSxcbiAgICAgICAgICAgICAgICBhc3luYzogZmFsc2VcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2dldF9mYigpO30sIDEwMDAwKTtcbiAgICAgICAgICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgICAgICAgICAgdmFyIHN0YXN0X29iaiA9IEpTT04ucGFyc2Uoc3RhdHMpO1xuICAgICAgICAgICAgcmVuZGVyX3BhZ2Vfdmlld19saW5lX2NoYXJ0KHN0YXN0X29iai5wYWdlX3ZpZXdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcl9wYWdlX3ZpZXdfbGluZV9jaGFydChwYWdlX3ZpZXdzKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpbmRleF07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFnZSB2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC40KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBwdk1vbnRoQ2hhcnQgPSBuZXcgQ2hhcnQoJChcIiNwdk1vbnRoQ2hhcnRcIiksIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcjcHZSZWFsdGltZUNoYXJ0JykubGVuZ3RoID4gMCkge1xuICAgIGdldF9zdGF0cygpO1xuXG4gICAgZnVuY3Rpb24gZ2V0X3N0YXRzKCkge1xuICAgICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgdXJsOiBcIi9zaXRlL2RpbmV2ZXIuY29tL2FwaS9wYWdldmlld1wiLFxuICAgICAgICBkYXRhOiB7IHVuaXQ6IFwic2Vjb25kXCIsIGNvdW50OiBcIjEwXCIgfSxcbiAgICAgICAgYXN5bmM6IGZhbHNlXG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgICAgdmFyIHN0YXN0X29iaiA9IEpTT04ucGFyc2Uoc3RhdHMpO1xuICAgICAgcmVuZGVyX3BhZ2Vfdmlld19saW5lX2NoYXJ0KHN0YXN0X29iai5wYWdlX3ZpZXdzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJfcGFnZV92aWV3X2xpbmVfY2hhcnQocGFnZV92aWV3cykge1xuICAgICAgdmFyIG9wdGlvbnNBbmltYXRpb24gPSB7XG4gICAgICAgIC8vQm9vbGVhbiAtIElmIHdlIHdhbnQgdG8gb3ZlcnJpZGUgd2l0aCBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVPdmVycmlkZTogdHJ1ZSxcbiAgICAgICAgLy8qKiBSZXF1aXJlZCBpZiBzY2FsZU92ZXJyaWRlIGlzIHRydWUgKipcbiAgICAgICAgLy9OdW1iZXIgLSBUaGUgbnVtYmVyIG9mIHN0ZXBzIGluIGEgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgICBzY2FsZVN0ZXBzOiAxMCxcbiAgICAgICAgLy9OdW1iZXIgLSBUaGUgdmFsdWUganVtcCBpbiB0aGUgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgICBzY2FsZVN0ZXBXaWR0aDogMTAsXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIHNjYWxlIHN0YXJ0aW5nIHZhbHVlXG4gICAgICAgIHNjYWxlU3RhcnRWYWx1ZTogMFxuICAgICAgfTtcblxuICAgICAgLy8gTm90IHN1cmUgd2h5IHRoZSBzY2FsZU92ZXJyaWRlIGlzbid0IHdvcmtpbmcuLi5cbiAgICAgIHZhciBvcHRpb25zTm9BbmltYXRpb24gPSB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIC8vQm9vbGVhbiAtIElmIHdlIHdhbnQgdG8gb3ZlcnJpZGUgd2l0aCBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgICAgc2NhbGVPdmVycmlkZTogdHJ1ZSxcbiAgICAgICAgLy8qKiBSZXF1aXJlZCBpZiBzY2FsZU92ZXJyaWRlIGlzIHRydWUgKipcbiAgICAgICAgLy9OdW1iZXIgLSBUaGUgbnVtYmVyIG9mIHN0ZXBzIGluIGEgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgICBzY2FsZVN0ZXBzOiAyMCxcbiAgICAgICAgLy9OdW1iZXIgLSBUaGUgdmFsdWUganVtcCBpbiB0aGUgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgICBzY2FsZVN0ZXBXaWR0aDogMTAsXG4gICAgICAgIC8vTnVtYmVyIC0gVGhlIHNjYWxlIHN0YXJ0aW5nIHZhbHVlXG4gICAgICAgIHNjYWxlU3RhcnRWYWx1ZTogMFxuICAgICAgfTtcblxuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGxhYmVsczogJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBbaW5kZXguc2xpY2UoMTEsIGluZGV4Lmxlbmd0aCldO1xuICAgICAgICB9KSxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJQYWdlIHZpZXdcIixcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwwLjQpXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgICBkYXRhOiAkLm1hcChwYWdlX3ZpZXdzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG5cbiAgICAgIHZhciBwdk1vbnRoQ2hhcnQgPSBuZXcgQ2hhcnQoJChcIiNwdlJlYWx0aW1lQ2hhcnRcIiksIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zQW5pbWF0aW9uXG4gICAgICB9KTtcblxuICAgICAgdmFyIGNvdW50ID0gMTA7XG5cbiAgICAgIC8vIHRoaXMgaXMgdWdseSwgZG9uJ3QganVkZ2UgbWVcbiAgICAgIHZhciB1cGRhdGVEYXRhID0gZnVuY3Rpb24gKG9sZERhdGEpIHtcbiAgICAgICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgIHVybDogXCIvc2l0ZS9kaW5ldmVyLmNvbS9hcGkvcGFnZXZpZXdcIixcbiAgICAgICAgICBkYXRhOiB7dW5pdDogXCJzZWNvbmRcIiwgY291bnQ6IFwiMVwifSxcbiAgICAgICAgICBhc3luYzogZmFsc2VcbiAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z2V0X2ZiKCk7fSwgMTAwMDApO1xuICAgICAgICB9KS5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgdmFyIHBhZ2Vfdmlld3MgPSBKU09OLnBhcnNlKHN0YXRzKS5wYWdlX3ZpZXdzO1xuXG4gICAgICAgIHZhciBsYWJlbHMgPSBvbGREYXRhW1wibGFiZWxzXCJdO1xuICAgICAgICB2YXIgZGF0YVNldEEgPSBvbGREYXRhW1wiZGF0YXNldHNcIl1bMF1bXCJkYXRhXCJdO1xuICAgICAgICB2YXIgdGltZXN0YW1wID0gJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBpbmRleC5zbGljZSgxMSwgaW5kZXgubGVuZ3RoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHB2ID0gJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGFiZWxzLnNoaWZ0KCk7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGxhYmVscy5wdXNoKHRpbWVzdGFtcCk7XG4gICAgICAgIGRhdGFTZXRBLnB1c2gocGFyc2VJbnQocHYpKTtcbiAgICAgICAgZGF0YVNldEEuc2hpZnQoKTtcbiAgICAgIH07XG5cblxuICAgICAgLy9HZXQgdGhlIGNvbnRleHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IHdlIHdhbnQgdG8gc2VsZWN0XG4gICAgICB2YXIgY3R4ID0gJChcIiNwdlJlYWx0aW1lQ2hhcnRcIik7XG4gICAgICB2YXIgb3B0aW9uc05vQW5pbWF0aW9uID0ge2FuaW1hdGlvbjogZmFsc2V9XG4gICAgICB2YXIgbXlOZXdDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zTm9BbmltYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZURhdGEoZGF0YSk7XG4gICAgICAgIHZhciBteU5ld0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNOb0FuaW1hdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDBcbiAgICAgICAgICAgICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBpZigkKCcjdHJhZmZpY0hvdXJzQ2hhcnQnKS5sZW5ndGggPiAwKSB7XG4gICAgZ2V0X3N0YXRzKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRfc3RhdHMoKSB7XG4gICAgICB2YXIgc3RhdHMgPSAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICB1cmw6IFwiL3NpdGUvZGluZXZlci5jb20vYXBpL3RyYWZmaWNfaG91cnNcIixcbiAgICAgICAgYXN5bmM6IGZhbHNlXG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z2V0X2ZiKCk7fSwgMTAwMDApO1xuICAgICAgfSkucmVzcG9uc2VUZXh0O1xuXG4gICAgICB2YXIgc3Rhc3Rfb2JqID0gSlNPTi5wYXJzZShzdGF0cyk7XG4gICAgICByZW5kZXJfdHJhZmZpY19ob3Vyc19jaGFydChzdGFzdF9vYmoudHJhZmZpY19ob3Vycyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyX3RyYWZmaWNfaG91cnNfY2hhcnQodHJhZmZpY19ob3Vycykge1xuICAgICAgdmFyIGxhYmVscyA9ICQubWFwKHRyYWZmaWNfaG91cnMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gW3ZhbHVlWzBdXTtcbiAgICAgICAgfSk7XG4gICAgICB2YXIgZGF0YSA9ICQubWFwKHRyYWZmaWNfaG91cnMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gW3ZhbHVlWzJdXTtcbiAgICAgICAgfSk7XG4gICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiUGFnZSB2aWV3XCIsXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC40KVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgICAgYm9yZGVyRGFzaDogW10sXG4gICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcblxuICAgICAgdmFyIHB2TW9udGhDaGFydCA9IG5ldyBDaGFydCgkKFwiI3RyYWZmaWNIb3Vyc0NoYXJ0XCIpLCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuIl19
