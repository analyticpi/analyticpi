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
