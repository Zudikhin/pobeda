$(document).ready(function() {
    "use strict";

    $(document).click(function(e) {
        var search = $(".header_block_other_lang");
        var tooltip = $(".form_block_form_item .warning");
        if (!search.is(e.target) && search.has(e.target).length === 0) {
            $(".header_block_other_lang_top").removeClass("active");
            $(".header_block_other_lang_content").slideUp();
        }
        if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
            $(".form_block_form_item .warning").removeClass("show");
        }
    });

    $(".header_block_other ul li span").click(function() {
        var attr = $(this).attr("data-target");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${attr}`).offset().top
        }, 1000);
    });

    $(".dropdown ul li span").click(function() {
        var attr = $(this).attr("data-target");
        $(".header_block_other_btn").removeClass("active");
        $(".dropdown").removeClass("active");
        $("body").removeClass("scroll");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${attr}`).offset().top
        }, 1000);
    });

    $(".header_block_other_btn").click(function() {
        $(this).toggleClass("active");
        $("body").toggleClass("scroll");
        $(".dropdown").toggleClass("active");
    });

    $(".faq_block_list_item_top").click(function() {
        $(this).parent().toggleClass("open");
        $(this).parent().find(".faq_block_list_item_body").slideToggle();
    });

    if($(window).width() < 1025) {
        $(".form_block_form_item_help").click(function() {
            $(".form_block_form_item .warning").removeClass("show");
            $(this).parent().addClass("show");
        });
    }

    

});