//var URL = 'https://completet.gtcafe.com/tracking';
var URL = 'https://itlds.gtcafe.com/ct';

function tracking() {
    $.get(URL)
        .done(function(res) {
            //console.log(`version: ${res}`);
            //alert(JSON.stringify(res, null, 2))
            $('#abc').html(res.version);
            $('#appName').html(navigator.appName);
            $('#language').html(navigator.language);
            $('#platform').html(navigator.platform);
            $('#userLanguage').html(navigator.userLanguage);


        });
}


function tracking_update() {
    $.post(`${URL}/tracking`,
        JSON.stringify({
            'TrackingTimestamp': new Date(),
            'appName': navigator.appName,
            'language': navigator.language,
            'platform': navigator.platform,
            'UrlPath': window.location.pathname
        }),
        function(data, status) {
            //console.log(`POST to : ${url}`);
            //console.log(`data: ${data}`);
            //console.log(`status: ${status}`);
        },
        'json'
    );
}