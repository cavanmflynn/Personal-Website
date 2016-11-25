var d = document,
    b = d.body,
    on = addEventListener,
    st = setTimeout,
    ct = clearTimeout;
on('load', function() {
    st(function() {
        b.className = b.className.replace(/\bis-loading\b/, 'is-playing');
        st(function() {
            b.className = b.className.replace(/\bis-playing\b/, 'is-ready')
        }, 1250);
    }, 100);
});
b.tabIndex = -1;
var rfk = '-webkit-overflow-scrolling',
    rf = function() {
        b.style[rfk] = 'auto';
        st(function() {
            b.style[rfk] = 'touch';
            b.focus();
        }, 100);
    };
on('load', rf);
on('orientationchange', rf);
if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
    (function() {
        var t, f;
        f = function() {
            var x = d.querySelector('#wrapper');
            if (x.scrollHeight > innerHeight) x.style.height = 'auto';
            else x.style.height = '100%';
        };
        (f)();
        on('resize', function() {
            ct(t);
            t = st(f, 250);
        });
    })();
}