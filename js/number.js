/*
 * @Author: your name
 * @Date: 2020-11-10 22:16:36
 * @LastEditTime: 2020-11-10 22:39:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /crt-pc/js/number.js
 */
window.onload=function(){
    $.fn.countTo = function(a) {
        console.log(111)
        a = a || {};
        return $(this).each(function() {
            var c = $.extend({},
            $.fn.countTo.defaults, {
                from: $(this).data("from"),
                to: $(this).data("to"),
                speed: $(this).data("speed"),
                refreshInterval: $(this).data("refresh-interval"),
                decimals: $(this).data("decimals")
            },
            a);
            var h = Math.ceil(c.speed / c.refreshInterval),
            i = (c.to - c.from) / h;
            var j = this,
            f = $(this),
            e = 0,
            g = c.from,
            d = f.data("countTo") || {};
            f.data("countTo", d);
            if (d.interval) {
                clearInterval(d.interval)
            }
            d.interval = setInterval(k, c.refreshInterval);
            b(g);
            function k() {
                g += i;
                e++;
                b(g);
                if (typeof(c.onUpdate) == "function") {
                    c.onUpdate.call(j, g)
                }
                if (e >= h) {
                    f.removeData("countTo");
                    clearInterval(d.interval);
                    g = c.to;
                    if (typeof(c.onComplete) == "function") {
                        c.onComplete.call(j, g)
                    }
                }
            }
            function b(m) {
                var l = c.formatter.call(j, m, c);
                f.html(l)
            }
        })
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };
    function formatter(b, a) {
        return b.toFixed()
    }
    $("#count-number").data("countToOptions", {
        formatter: function(b, a) {
            return b.toFixed(0).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
        }
    });
    
    function count(a) {
        var b = $(this);
        a = $.extend({},
        a || {},
        b.data("countToOptions") || {});
        b.countTo(a)
    };
    // $(".timer").each(count);
    window.onscroll = function() {
        checkScroll();
    }

    var itemDom = $("#count-number")[0];// You want to check
    var num=0
    function checkScroll() {
        //滚动条高度+视窗高度 = 可见区域底部高度
        var visibleBottom = window.scrollY + document.documentElement.clientHeight;
        //可见区域顶部高度
        var visibleTop = window.scrollY;

        var centerY = $("#count-number").offset().top + (itemDom.offsetHeight * 0.8);
        // console.log(centerY);
        var show = centerY > visibleTop && centerY < visibleBottom;     
        if (show ) {
            if(num>0) return;
            $(".timer").each(count);
            num++
        }
    }

}
