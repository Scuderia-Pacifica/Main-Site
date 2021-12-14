function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=93da069059ca42718ec93aa9b01697e4", function (data) {
    console.log(data.country_code);
    if ((data.country_code == "ES") || (getCookie("lang") == EN)) {
        location = "https://es.scuderiapacifica.com";
    } else if (data.country_code == "FR") {
        location = "https://fr.scuderiapacifica.com";
    } else {
        location = "https://en.scuderiapacifica.com";
    }
})
