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