require(['converse'], function (converse) {
        converse.initialize({
            allow_otr: true,
            auto_list_rooms: false,
            auto_subscribe: false,
            bosh_service_url: 'https://bind.opkode.im', // Please use this connection manager only for testing purposes
            debug: true ,
            hide_muc_server: false,
            i18n: locales['en'], // Refer to ./locale/locales.js to see which locales are supported
            prebind: false,
            show_controlbox_by_default: true,
            xhr_user_search: false,
        });
 });
