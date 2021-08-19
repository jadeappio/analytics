window.onload = function () {
    var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];
    var link = document.createElement('link');
        link.href='https://jadeappio.github.io/jade/css/index.css';
        link.rel='stylesheet';
        link.type='text/css';
        head.appendChild(link);
        console.log('jade widget stylesheet loaded');
    var container = window.document.createElement('div');
        container.setAttribute('class', 'jade-widget-container');
    var widget = window.document.createElement('div');
        widget.setAttribute('class', 'jade-guides-widget');
    var icon = window.document.createElement('img');
        icon.setAttribute('class', 'jade-widget-icon');
        icon.setAttribute('src', 'https://global-uploads.webflow.com/6012075d53672289afd15fd5/60f72968782b4b83587cf9e9_dash%20icons%20(13).png');
    var header = window.document.createElement('div');
        header.setAttribute('class', 'jade-widget-header');
    var headerText = window.document.createElement('p');
        headerText.innerText=('Guides');
    window.document.body.appendChild(container);
        container.appendChild(widget);
            widget.appendChild(header);
                header.appendChild(headerText);
        container.appendChild(icon);
        console.log('jade widget loaded');
    if (typeof jQuery == 'undefined') {
        var jqscript = document.createElement('script');
        jqscript.type = 'text/javascript';
        jqscript.src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
        body.appendChild(jqscript);
        console.log('jquery loaded')
    } else {
        console.log('jquery pre-loaded');
    };
    $('.jade-widget-icon').on('click', function () {
    	$('.jade-guides-widget').toggle()
    });
    var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://player.kompassify.com/kompassifyPlayer.js?uuid=782283f5-ce0f-4d29-a02b-65eb5196365b';
        script.id ='kompassious';
        body.appendChild(script);
     console.log('jade guides loaded');
};