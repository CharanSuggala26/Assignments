jQuery(window).load(function() {
    if (window.self === window.top && window.innerWidth > 860) {
        let guest = tbdemo_getCookie("tbdemo") ? false : true;
        devicebar(0);
        setTimeout(function() {
            url = tbdemo_add_url_param(window.location.href, 'tbdemo_iframe', '1');
            let top_height = guest ? 60 : 0;
            jQuery("body").append("<div class='tbdemo-device-layer' style='display: none'></div><iframe src='" + url + "' id='tbdemo-device-iframe'  style='display: none;'></iframe>");
            jQuery('#tbdemo-device-iframe').load(function() {
                let iframe = jQuery('#tbdemo-device-iframe').contents();
                iframe.find('#wpadminbar').css("display", "none");
                iframe.find(".tbdemo-customize-container").remove();
                iframe.find('.menu-item a, .elementor-heading-title a').click(function(event) {
                    let url = tbdemo_add_url_param(jQuery(this).attr("href"), 'tbdemo_iframe', '1');
                    jQuery(this).attr("href", url);
                });
            });
            jQuery(document).on("click", ".tbdemo-device-mobile", function() {
                if (jQuery(this).hasClass("tbdemo-device-active")) {
                    return
                }
                let window_width = jQuery("body").width();

                let height = "";
                let buttons_container = jQuery('body .tbdemo-devicebar-border:visible');
                let height_px = '100%';
                if (buttons_container.length) {
                    height_px = parseInt(buttons_container.css("bottom")) + parseInt(buttons_container.css("height")) + 20 + top_height;
                    height = jQuery(window).height() - height_px;
                } else {
                    height_px = 20 + top_height;
                    height = jQuery(window).height() - height_px;
                }

                if (typeof tbdemo_fake_editor_marker == 'function' && jQuery(".tbdemo-editor-cont").length) {
                    window_width = jQuery(window).width() + 222;
                    tbdemo_fake_editor_marker();
                }


                /* Hide main content scroll */
                jQuery(document).find("html").css("overflow-y", "hidden");
                jQuery(document).find(".tbdemo-device-layer, #tbdemo-device-iframe").show();
                /* Make device icon active */
                jQuery(document).find(".tbdemo-device-active").removeClass("tbdemo-device-active");
                jQuery(this).addClass("tbdemo-device-active");
                /* Animate mobile iframe to the center of window */
                jQuery(document).find('#tbdemo-device-iframe').animate({
                    width: '360px',
                    height: height + 'px',
                    left: (window_width / 2 - 180) + 'px',
                    top: top_height + 'px',
                }, 300);
            });
        }, 1000);
    }

    jQuery(document).on("click", ".tbdemo-device-laptop", function() {
        if (jQuery(this).hasClass("tbdemo-device-active")) {
            return
        }

        jQuery(document).find(".tbdemo-device-active").removeClass("tbdemo-device-active");
        jQuery(this).addClass("tbdemo-device-active");
        let window_width = '100%';
        let left = '0%';
        let top = 0;
        let height = '100%';
        if (typeof tbdemo_fake_editor_marker == 'function' && jQuery(".tbdemo-editor-cont").length) {
            window_width = jQuery("body").width();
            left = 222;
            top = 60;
            height = jQuery(window).height() - top;
        } else if (jQuery(".tbdemo-customize-container").length) {
            window_width = jQuery("body").width();
        }
        jQuery(document).find('#tbdemo-device-iframe').animate({
            left: left,
            top: top,
            width: window_width,
            height: height,
        }, 300, function() {
            jQuery(document).find(".tbdemo-device-layer, #tbdemo-device-iframe").hide();
            jQuery(document).find("html").removeAttr("style");
        });
    });

    jQuery(document).find(".tbdemo-devicebar i").on({
        mouseenter: function() {
            jQuery(this).find("span").show();
        },
        mouseleave: function() {
            jQuery(this).find("span").hide();
        }
    });
})

jQuery(window).resize(function() {
    let window_width = jQuery(window).width();
    jQuery(document).find('#tbdemo-device-iframe').css({
        width: '360px',
        left: (window_width / 2 - 180) + 'px',
    });

    let left = document.body.offsetWidth / 2 - 45;
    jQuery(document).find('.tbdemo-devicebar-border').css("left", left + "px");

});

function tbdemo_add_url_param(url, param, value) {
    let link = new URL(url);
    let search_params = link.searchParams;
    search_params.set(param, value);
    link.search = search_params.toString();
    link = link.toString();
    return link;
}

/**
 * Add device bar to the content
 * @param topbar bool if devicebar should show in topbar
 */
function devicebar(topbar) {
    /* Need to count offsetWidth as device bar position is changing when we hide scroll from the main window */
    let left = document.body.offsetWidth / 2 - 45;
    let devicebar = "<div class='tbdemo-devicebar-border' style='left: " + left + "px'><div class='tbdemo-devicebar'>";
    devicebar += "<i class='tbdemo-device-laptop tbdemo-device-active'></i><span class='tbdemo-devicebar-tooltip tbdemo-devicebar-tooltip-desktop' style='display:none'>Desktop</span>";
    devicebar += "<i class='tbdemo-device-mobile'></i><span class='tbdemo-devicebar-tooltip tbdemo-devicebar-tooltip-mobile' style='display:none'>Mobile</span>";
    devicebar += "</div></div>";

    if (topbar) {
        devicebar = devicebar.replace("tbdemo-devicebar", "tbdemo-devicebar-topbar");
        jQuery(".tbdemo-editor-top-bar").append(devicebar);
    } else {
        jQuery("body").append(devicebar);
    }

    jQuery(".tbdemo-device-laptop").hover(function() {
            jQuery(".tbdemo-devicebar-tooltip-desktop").show();
        },
        function() {
            jQuery(".tbdemo-devicebar-tooltip-desktop").hide();
        });
    jQuery(".tbdemo-device-mobile").hover(function() {
            jQuery(".tbdemo-devicebar-tooltip-mobile").show();
        },
        function() {
            jQuery(".tbdemo-devicebar-tooltip-mobile").hide();
        });
}