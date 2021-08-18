window.onload = function () {
    var body = document.getElementsByTagName('body')[0];
    if (typeof jQuery == 'undefined') {
        var jqscript = document.createElement('jqscript');
        jqscript.type = 'text/javascript';
        jqscript.src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
        body.appendChild(jqscript);
        console.log('jquery loaded')
    } else {
        console.log('jquery pre-loaded');
    };
    var j = window.document.createElement('iframe');
    j.setAttribute('id', 'jade-guides-iframe');
    j.setAttribute('class', 'jade-guides-widget');
    j.setAttribute('src', 'https://jadeapp.io/widget');
    j.setAttribute('allowfullscreen', 'true');
    j.sandbox='allow-scripts allow-same-origin';
    j.style.zIndex='2147483647';
    window.document.body.appendChild(j);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://player.kompassify.com/kompassifyPlayer.js?uuid=782283f5-ce0f-4d29-a02b-65eb5196365b';
    script.id ='kompassious';
    body.appendChild(script);
    console.log('jade guides loaded');
};