if (getCookie("lang") == "EN") {
    location = "https://en.scuderiapacifica.com";
} else if (getCookie("lang") == "ES") {
    location = "https://es.scuderiapacifica.com";
} else if (getCookie("lang") == "FR") {
    location = "https://fr.scuderiapacifica.com";
} else {
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=93da069059ca42718ec93aa9b01697e4", function (data) {
        console.log(data.country_code);
        if (data.country_code == "ES") {
            location = "https://es.scuderiapacifica.com";
        } else if (data.country_code == "FR") {
            location = "https://fr.scuderiapacifica.com";
        } else {
            location = "https://en.scuderiapacifica.com";
        }
    })
}