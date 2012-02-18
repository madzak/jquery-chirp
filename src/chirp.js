(function($) {
    $(function() {
        function fetchTweets(user, count, renderCallback) {
            var url = 'http://search.twitter.com/search.json',
                searchParams = {
                    'q': 'from:' + user,
                    'rpp': count
                }

            $.ajax({
                url: url,
                type: 'GET',
                data: searchParams,
                dataType: 'jsonp',
                success: function(search) {
                    renderCallback(search.results);
                }
            });
        };
    });
})(jQuery);
