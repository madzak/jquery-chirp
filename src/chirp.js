(function($) {
    $(function() {
        var user = 'madzak',
            count = 3;

        function fetchTweets(user, count, callback) {
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
                    callback(search.results);
                }
            });
        };
    });
})(jQuery);
