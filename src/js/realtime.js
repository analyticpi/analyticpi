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
