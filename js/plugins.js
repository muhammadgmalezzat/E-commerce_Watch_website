// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    

    // <!--option box-->

    $(".gear-check").click(function()
    {

        $(".color-option").toggle();
    }); 

    
    var colorLi=$(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor","#FF2020").end()
        .eq(1).css("backgroundColor","#3D7F86").end()
        .eq(2).css("backgroundColor","#F56E00").end()
        .eq(3).css("backgroundColor","#F7F700").end()
        .eq(4).css("backgroundColor","#EA80FC");

    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
        //console.log();


    });
    
    // scrollButton

    var scrollButton = $("#scroll-top");

    $(window).scroll(function()
    {
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop :0},600);
    });
    var nice = false;
    $(function() {  
        nice = $("body").niceScroll();
    });

}());

// Place any jQuery/helper plugins in here.
