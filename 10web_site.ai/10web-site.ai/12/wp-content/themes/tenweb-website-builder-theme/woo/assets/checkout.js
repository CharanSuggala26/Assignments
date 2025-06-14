jQuery(document).ready(function() {
    let label = '';
    jQuery(".form-row").each(function() {
        if (!jQuery(this).parent().hasClass("woocommerce-form-coupon")) {
            label = jQuery(this).find("label").text();
            if (jQuery(this).find("input").val() != '') {
                jQuery(this).addClass("tenweb-animate-input");
            }
            jQuery(this).find("input").attr("placeholder", label);
        }
    });

    jQuery(".form-row input:not(.tenweb-coupon-input-text)").on("keyup", function() {
        if (jQuery(this).val() == '') {
            jQuery(this).closest(".tenweb-animate-input").removeClass("tenweb-animate-input");
        } else {
            jQuery(this).closest(".form-row").addClass("tenweb-animate-input");
        }
    });

    jQuery(".tenweb-apply-coupon").on("click", function() {
        let val = jQuery(this).closest(".tenweb-coupon-cont").find(".input-text").val();
        jQuery("form.tenweb-checkout_coupon").find(".input-text").val(val);
        jQuery("form.tenweb-checkout_coupon").trigger("submit");
    })

    jQuery(".tenweb-showcoupon").on("click", function() {
        jQuery(".tenweb-coupon-cont").toggle();
    })

    jQuery(".tenweb-woocommerce-cart-coupon_link").on("click", function() {
        let val = jQuery(".tenweb-woocommerce-cart-coupon_text").val();
        jQuery(".tenweb-woocommerce-cart .coupon-col-start input").val(val);
        jQuery(".tenweb-woocommerce-cart .e-apply-coupon").trigger("click");
    })


    if (jQuery('.tenweb-sticky').length) {
        var stickyTop = jQuery('.tenweb-sticky').offset().top;
        jQuery(window).scroll(function() {
            let windowTop = jQuery(window).scrollTop();
            if (stickyTop < windowTop) {
                jQuery('.tenweb-sticky').css({
                    'position': 'sticky',
                    'top': '2em',
                });
            } else {
                jQuery('.tenweb-sticky').css({
                    'position': 'relative',
                    'top': 0
                });
            }
        });
    }

});

function tenweb_show_coupon(that) {
    jQuery(that).parent().find(".coupon").toggle();
}