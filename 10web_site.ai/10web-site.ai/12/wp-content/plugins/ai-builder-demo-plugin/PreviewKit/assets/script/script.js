/* Keep in variables upgrade popup Title/Description default texts to bring back after customize upgrade click */
let upgrade_popup_customize_title = '';
let upgrade_popup_customize_descr = '';
/* Open/close Customization popup.*/
function tbdemo_customize_container(show) {
    if (show) {
        let template = jQuery("#tbdemo-customize-template").html();
        jQuery("body").addClass("tbdemo-customize-mode");
        if (!jQuery(document).find(".tbdemo-customize-container").length) {
            jQuery("body").after(template);
        }

        /* For mobile */
        template = template.replace("tbdemo-customize-container", "tbdemo-customize-container tbdemo-customize-container-mobile");
        jQuery("body").append(template);

        if (jQuery(window).width() > 600) {
            tbdemo_animate_customization(true);
        } else {
            jQuery(document).find(".tbdemo-customize-container-mobile").show();
        }
        jQuery(".tbdemo-customize").hide();
        jQuery(".tbdemo-customize-close").show();


        jQuery(document).find(".tbdemo-theme-item").off('click');
        jQuery(document).find(".tbdemo-theme-item").on('click', function() {
            jQuery(".tbdemo-theme-item").removeClass("tbdemo-theme-selected");
            jQuery(this).addClass("tbdemo-theme-selected");
            let theme = jQuery(this).data('key');
            document.cookie = "tbdemo_theme=" + theme + "; path=/";
            change_kit_theme(theme);
        });

        /* Open upgrade popup and change Title/Description */
        jQuery(document).find(".tbdemo-customize-edit-button").on("click", function() {
            jQuery(document).find(".twbb-pu-upgrade-container").addClass("tbdemo-from-customize");
            upgrade_popup_customize_title = jQuery(document).find(".twbb-pu-upgrade-title").text();
            jQuery(document).find(".twbb-pu-upgrade-title").text(taa.upgrade_popup_customize_title);
            upgrade_popup_customize_descr = jQuery(document).find(".twbb-pu-upgrade-descr").text();
            jQuery(document).find(".twbb-pu-upgrade-descr").text(taa.upgrade_popup_customize_descr);
            tbdemo_show_upgrade_popup("Customize button click");
            tbdemo_customize_container(false);
        });
    } else {
        if (jQuery(window).width() > 600) {
            tbdemo_animate_customization(false);
        } else {
            jQuery(document).find(".tbdemo-customize-container-mobile").remove();
        }

        jQuery(".tbdemo-customize").show();
        jQuery(".tbdemo-customize-close").hide();
        jQuery(".tbdemo-sharebar-container").css('right', '22px');
        jQuery("body").removeClass("tbdemo-customize-mode");
    }
    tbdemo_setCookie('tbdemo_first_time', 0);
}

function tbdemo_animate_customization(open) {
    if (open) {
        jQuery(".tbdemo-sharebar-container").addClass("tbdemo-customize-open");
    } else {
        jQuery(".tbdemo-sharebar-container").removeClass("tbdemo-customize-open");
    }
    jQuery(".tbdemo-customize-container").css({
        right: open ? "-222px" : 0
    }).animate({
        right: open ? 0 : "-222px"
    }, "slow", function() {
        if (!open) {
            jQuery(".tbdemo-customize-container").remove();
        }
    });
    let calc = jQuery(window).width() - 222 + "px";
    jQuery("body.tbdemo-customize-mode").css({
        right: open ? 0 : "222px",
        width: open ? "100%" : calc,
    }).animate({
        right: open ? "222px" : 0,
        width: open ? calc : "100%",
    }, "slow");

    jQuery("div[data-elementor-type='twbb_header'] .elementor-section-wrap > .elementor-element").animate({
        width: open ? (jQuery(window).width() - 222) + "px" : jQuery(window).width() + "px"
    }, "slow");

    let left = jQuery(window).width() / 2 - 45;
    if (open) {
        left = (jQuery(window).width() - 222) / 2 - 45;
    }
    jQuery(".tbdemo-devicebar-border").animate({
        left: left,
    }, 500);


    jQuery(".tbdemo-sharebar-container").css({
        right: open ? "22px" : "244px",
    }).animate({
        right: open ? "244px" : "22px",
    }, "slow", function() {
        if (!open) {
            jQuery(document).find(".tbdemo-customize-container:not(.tbdemo-customize-container-mobile)").remove();
        }
    });

    jQuery(".tbdemo-circle-icon-border .tf-v1-popover-button").css({
        right: open ? "24px" : "246px",
    }).animate({
        right: open ? "246px" : "24px",
    }, "slow");

    /* If iframe mobile is open center the iframe in the new body width */
    if (jQuery("#tbdemo-device-iframe:visible").length) {
        let left = open ? (jQuery(window).width() / 2 - 111 - 180) : (jQuery(window).width() / 2 - 180);
        jQuery("#tbdemo-device-iframe").animate({
            left: left,
            top: 60
        }, 500);
    } else {
        jQuery("#tbdemo-device-iframe").css({
            width: open ? calc : jQuery(window).width(),
            right: open ? '222px' : 0
        });
    }
}

jQuery(document).ready(function() {

    jQuery(window).on("scroll", function() {
        if (jQuery("body").hasClass("tbdemo-editor-mode")) {
            jQuery("div[data-elementor-type='twbb_header'] .elementor-section-wrap > .elementor-element.elementor-sticky--active").css({
                top: "48px",
            });
            jQuery("div[data-elementor-type='twbb_header'] .elementor-section-wrap > .elementor-element:not(.elementor-sticky--active)").css({
                top: 0,
            });
        }
    })
    jQuery(document).find(".tbdemo-customize-close, .tbdemo-customize-container-overlay").on('click', function() {
        tbdemo_customize_container(false);
    });

    jQuery(".twbb-pu-upgrade-layout, .twbb-pu-upgrade-close").on("click", function() {
        if (jQuery(document).find(".twbb-pu-upgrade-container").hasClass("tbdemo-from-customize")) {
            jQuery(document).find(".twbb-pu-upgrade-container").removeClass("tbdemo-from-customize");
            jQuery(document).find(".twbb-pu-upgrade-title").text(upgrade_popup_customize_title);
            jQuery(document).find(".twbb-pu-upgrade-descr").text(upgrade_popup_customize_descr);
        }
    })

    jQuery(".tbdemo-customize").on('click', function() {
        tbdemo_customize_container(true);
    });

    if (tbdemo_getCookie("tbdemo_first_time") != 0) {
        tbdemo_customize_container(true);
    }

    let tbdemo_theme = getCookie('tbdemo_theme');
    if (tbdemo_theme != "") {
        change_kit_theme(tbdemo_theme);
        /* Do not show in mobile iframe */
        if (window.self === window.top) {
            jQuery(".tbdemo-theme-item").removeClass("tbdemo-theme-selected");
            jQuery(".tbdemo-theme-item.tbdemo-" + tbdemo_theme.toLowerCase()).addClass("tbdemo-theme-selected");
        }
    } else {
        /* Active theme in all_kit.json */
        jQuery(".tbdemo-theme-item").removeClass("tbdemo-theme-selected");
        jQuery(".tbdemo-theme-item.tbdemo-" + tbdemo.active_theme).addClass("tbdemo-theme-selected");
        document.cookie = "tbdemo_theme=" + tbdemo.active_theme + "; path=/";
    }
});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function change_kit_theme(theme) {
    if (typeof tbdemo.kitSettings[theme] === 'undefined') {
        return;
    }
    let kitSettings = tbdemo.kitSettings[theme];
    let id;
    let iframeBody = jQuery("#tbdemo-device-iframe").contents().find("body");
    for (const key in kitSettings) {
        if (key == "system_typography" || key == "custom_typography") {
            kitSettings[key].forEach(function(el) {
                let id = el['_id'];
                let font_size = el['typography_font_size']["size"] + el['typography_font_size']["unit"];
                jQuery('body').css('--e-global-typography-' + id + '-font-family', el['typography_font_family']);
                jQuery('body').attr("tbdemo_theme", theme);
                /* For changing styles in mobile view iframe */
                if (iframeBody.length) {
                    iframeBody.css('--e-global-typography-' + id + '-font-family', el['typography_font_family']);
                    iframeBody.attr("tbdemo_theme", theme);
                }
            });
        } else if (key !== "front_data") {
            kitSettings[key].forEach(function(el) {
                let id = el['_id'];
                jQuery('body').css('--e-global-color-' + id, el['color']);
                /* For changing styles in mobile view iframe */
                if (iframeBody.length) {
                    iframeBody.css('--e-global-color-' + id, el['color']);
                }
            });
        }
    }
}