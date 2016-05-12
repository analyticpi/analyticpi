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
