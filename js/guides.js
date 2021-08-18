window.onload = function () {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href='https://jadeappio.github.io/jade/css/index.css';
    link.rel='stylesheet';
    link.type='text/css';
    head.appendChild(link);
    var body = document.getElementsByTagName('body')[0];
    if (typeof jQuery == 'undefined') {
        var jqscript = document.createElement('script');
        jqscript.type = 'text/javascript';
        jqscript.src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
        body.appendChild(jqscript);
        console.log('jquery loaded')
    } else {
        console.log('jquery pre-loaded');
    };
    var j = window.document.createElement('div');
    j.setAttribute('class', 'jade-guides-widget');
    window.document.body.appendChild(j);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://player.kompassify.com/kompassifyPlayer.js?uuid=782283f5-ce0f-4d29-a02b-65eb5196365b';
    script.id ='kompassious';
    body.appendChild(script);
    console.log('jade guides loaded');
};