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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInBhZ2V2aWV3LmpzIiwicmVhbHRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgaWYoJCgnI2Jyb3dzZXJDaGFydCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0X3N0YXRzKCk7XG5cbiAgICAgICAgdmFyIHJhbmRvbUNvbG9yR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KSArICcwMDAwMDAwJykuc2xpY2UoMiwgOCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0X3N0YXRzKCl7XG4gICAgICAgICAgICB2YXIgc3RhdHMgPSAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBzdGF0c191cmwsXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlXG4gICAgICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z2V0X2ZiKCk7fSwgMTAwMDApO1xuICAgICAgICAgICAgfSkucmVzcG9uc2VUZXh0O1xuXG4gICAgICAgICAgICB2YXIgc3Rhc3Rfb2JqID0gSlNPTi5wYXJzZShzdGF0cyk7XG4gICAgICAgICAgICByZW5kZXJfcGFnZV92aWV3cyhzdGFzdF9vYmoucGFnZV92aWV3cyk7XG4gICAgICAgICAgICByZW5kZXJfYnJvd3NlcnMoc3Rhc3Rfb2JqLnVzZXJfYWdlbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ2V0X3N0YXRzKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcl9wYWdlX3ZpZXdzKHBhZ2Vfdmlld3MpIHtcbiAgICAgICAgICAgICQoJyNwYWdlLXZpZXcnKS5odG1sKHBhZ2Vfdmlld3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyX2Jyb3dzZXJzKGJyb3dzZXJzKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSAkLm1hcChicm93c2VycywgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt2YWx1ZSwgaW5kZXhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6ICQubWFwKGJyb3dzZXJzLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpbmRleF07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogJC5tYXAoYnJvd3NlcnMsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNGRjYzODRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMzNkEyRUJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNGRkNFNTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkY2Mzg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMzZBMkVCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjRkZDRTU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjdHggPSAkKFwiI2Jyb3dzZXJDaGFydFwiKTtcbiAgICAgICAgICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuICAgIGlmKCQoJyNwdk1vbnRoQ2hhcnQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldF9zdGF0cygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldF9zdGF0cygpIHtcbiAgICAgICAgICAgIHZhciBzdGF0cyA9ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3NpdGUvZGluZXZlci5jb20vYXBpL3BhZ2V2aWV3XCIsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB1bml0OiBcImRheVwiLCBjb3VudDogXCIzMFwiIH0sXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlXG4gICAgICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnZXRfZmIoKTt9LCAxMDAwMCk7XG4gICAgICAgICAgICB9KS5yZXNwb25zZVRleHQ7XG5cbiAgICAgICAgICAgIHZhciBzdGFzdF9vYmogPSBKU09OLnBhcnNlKHN0YXRzKTtcbiAgICAgICAgICAgIHJlbmRlcl9wYWdlX3ZpZXdfbGluZV9jaGFydChzdGFzdF9vYmoucGFnZV92aWV3cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJfcGFnZV92aWV3X2xpbmVfY2hhcnQocGFnZV92aWV3cykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiAkLm1hcChwYWdlX3ZpZXdzLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBhZ2Ugdmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuNClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcHZNb250aENoYXJ0ID0gbmV3IENoYXJ0KCQoXCIjcHZNb250aENoYXJ0XCIpLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBnZXRfc3RhdHMoKTtcblxuICBmdW5jdGlvbiBnZXRfc3RhdHMoKSB7XG4gICAgdmFyIHN0YXRzID0gJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiL3NpdGUvZGluZXZlci5jb20vYXBpL3BhZ2V2aWV3XCIsXG4gICAgICBkYXRhOiB7IHVuaXQ6IFwic2Vjb25kXCIsIGNvdW50OiBcIjEwXCIgfSxcbiAgICAgIGFzeW5jOiBmYWxzZVxuICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgIHZhciBzdGFzdF9vYmogPSBKU09OLnBhcnNlKHN0YXRzKTtcbiAgICByZW5kZXJfcGFnZV92aWV3X2xpbmVfY2hhcnQoc3Rhc3Rfb2JqLnBhZ2Vfdmlld3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyX3BhZ2Vfdmlld19saW5lX2NoYXJ0KHBhZ2Vfdmlld3MpIHtcbiAgICB2YXIgb3B0aW9uc0FuaW1hdGlvbiA9IHtcbiAgICAgIC8vQm9vbGVhbiAtIElmIHdlIHdhbnQgdG8gb3ZlcnJpZGUgd2l0aCBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgIHNjYWxlT3ZlcnJpZGU6IHRydWUsXG4gICAgICAvLyoqIFJlcXVpcmVkIGlmIHNjYWxlT3ZlcnJpZGUgaXMgdHJ1ZSAqKlxuICAgICAgLy9OdW1iZXIgLSBUaGUgbnVtYmVyIG9mIHN0ZXBzIGluIGEgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgc2NhbGVTdGVwczogMTAsXG4gICAgICAvL051bWJlciAtIFRoZSB2YWx1ZSBqdW1wIGluIHRoZSBoYXJkIGNvZGVkIHNjYWxlXG4gICAgICBzY2FsZVN0ZXBXaWR0aDogMTAsXG4gICAgICAvL051bWJlciAtIFRoZSBzY2FsZSBzdGFydGluZyB2YWx1ZVxuICAgICAgc2NhbGVTdGFydFZhbHVlOiAwXG4gICAgfTtcblxuICAgIC8vIE5vdCBzdXJlIHdoeSB0aGUgc2NhbGVPdmVycmlkZSBpc24ndCB3b3JraW5nLi4uXG4gICAgdmFyIG9wdGlvbnNOb0FuaW1hdGlvbiA9IHtcbiAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAvL0Jvb2xlYW4gLSBJZiB3ZSB3YW50IHRvIG92ZXJyaWRlIHdpdGggYSBoYXJkIGNvZGVkIHNjYWxlXG4gICAgICBzY2FsZU92ZXJyaWRlOiB0cnVlLFxuICAgICAgLy8qKiBSZXF1aXJlZCBpZiBzY2FsZU92ZXJyaWRlIGlzIHRydWUgKipcbiAgICAgIC8vTnVtYmVyIC0gVGhlIG51bWJlciBvZiBzdGVwcyBpbiBhIGhhcmQgY29kZWQgc2NhbGVcbiAgICAgIHNjYWxlU3RlcHM6IDIwLFxuICAgICAgLy9OdW1iZXIgLSBUaGUgdmFsdWUganVtcCBpbiB0aGUgaGFyZCBjb2RlZCBzY2FsZVxuICAgICAgc2NhbGVTdGVwV2lkdGg6IDEwLFxuICAgICAgLy9OdW1iZXIgLSBUaGUgc2NhbGUgc3RhcnRpbmcgdmFsdWVcbiAgICAgIHNjYWxlU3RhcnRWYWx1ZTogMFxuICAgIH07XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gW2luZGV4LnNsaWNlKDExLCBpbmRleC5sZW5ndGgpXTtcbiAgICAgIH0pLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlBhZ2Ugdmlld1wiLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuNClcIixcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgIGRhdGE6ICQubWFwKHBhZ2Vfdmlld3MsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIHB2TW9udGhDaGFydCA9IG5ldyBDaGFydCgkKFwiI3B2UmVhbHRpbWVDaGFydFwiKSwge1xuICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNBbmltYXRpb25cbiAgICB9KTtcblxuICAgIHZhciBjb3VudCA9IDEwO1xuXG4gICAgLy8gdGhpcyBpcyB1Z2x5LCBkb24ndCBqdWRnZSBtZVxuICAgIHZhciB1cGRhdGVEYXRhID0gZnVuY3Rpb24gKG9sZERhdGEpIHtcbiAgICAgIHZhciBzdGF0cyA9ICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgIHVybDogXCIvc2l0ZS9kaW5ldmVyLmNvbS9hcGkvcGFnZXZpZXdcIixcbiAgICAgICAgZGF0YToge3VuaXQ6IFwic2Vjb25kXCIsIGNvdW50OiBcIjFcIn0sXG4gICAgICAgIGFzeW5jOiBmYWxzZVxuICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe2dldF9mYigpO30sIDEwMDAwKTtcbiAgICAgIH0pLnJlc3BvbnNlVGV4dDtcblxuICAgICAgdmFyIHBhZ2Vfdmlld3MgPSBKU09OLnBhcnNlKHN0YXRzKS5wYWdlX3ZpZXdzO1xuXG4gICAgICB2YXIgbGFiZWxzID0gb2xkRGF0YVtcImxhYmVsc1wiXTtcbiAgICAgIHZhciBkYXRhU2V0QSA9IG9sZERhdGFbXCJkYXRhc2V0c1wiXVswXVtcImRhdGFcIl07XG4gICAgICB2YXIgdGltZXN0YW1wID0gJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguc2xpY2UoMTEsIGluZGV4Lmxlbmd0aCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHB2ID0gJC5tYXAocGFnZV92aWV3cywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgbGFiZWxzLnNoaWZ0KCk7XG4gICAgICBjb3VudCsrO1xuICAgICAgbGFiZWxzLnB1c2godGltZXN0YW1wKTtcbiAgICAgIGRhdGFTZXRBLnB1c2gocGFyc2VJbnQocHYpKTtcbiAgICAgIGRhdGFTZXRBLnNoaWZ0KCk7XG4gICAgfTtcblxuXG4gICAgLy9HZXQgdGhlIGNvbnRleHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IHdlIHdhbnQgdG8gc2VsZWN0XG4gICAgdmFyIGN0eCA9ICQoXCIjcHZSZWFsdGltZUNoYXJ0XCIpO1xuICAgIHZhciBvcHRpb25zTm9BbmltYXRpb24gPSB7YW5pbWF0aW9uOiBmYWxzZX1cbiAgICB2YXIgbXlOZXdDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zTm9BbmltYXRpb25cbiAgICB9KTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVEYXRhKGRhdGEpO1xuICAgICAgICAgIHZhciBteU5ld0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNOb0FuaW1hdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwXG4gICAgKTtcbiAgfVxufSk7XG4iXX0=
