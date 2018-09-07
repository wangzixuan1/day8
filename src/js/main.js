require.config({
    baseUrl: '/js/',
    paths: {
        'jquery': "./libs/jquery-3.1.1.min",
        'hand': './libs/handlebars-v4.0.11',
        'swiper': './libs/swiper-4.3.3.min',
        'index': './page/index'
    }
})
require(['index']);