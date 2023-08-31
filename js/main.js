$(document).ready(function() {
    "use strict";

    $(document).click(function(e) {
        var search = $(".header_block_other_lang");
        if (!search.is(e.target) && search.has(e.target).length === 0) {
            $(".header_block_other_lang_top").removeClass("active");
            $(".header_block_other_lang_content").slideUp();
        }
    });

    $(".header_block_other_btn").click(function() {
        $(".back_modal").addClass("active");
        $(".dropdown").addClass("active");
        $("body").addClass("scroll");
    });

    $(".faq_block_list_item_top").click(function() {
        $(this).parent().toggleClass("open");
        $(this).parent().find(".faq_block_list_item_body").slideToggle();
    });

});