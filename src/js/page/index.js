require(['jquery', 'hand', 'swiper'], function($, hand, swiper) {
    $.ajax({
        url: '/api/li',
        dataType: 'json',
        success: function(res) {
            if (res.code === 1) {
                var cur = $('#li').html();
                var template = hand.compile(cur);
                var html = template(res.data);
                $('.ul').html(html);
            }
        }
    })
    $.ajax({
        url: '/api/nav',
        dataType: 'json',
        success: function(res) {
            if (res.code === 1) {
                var cur = $('#nav').html();
                var template = hand.compile(cur);
                var html = template(res.data);
                $('.top').html(html);
            }
        }
    })
    new swiper('.banner')
});