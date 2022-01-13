function load() {
    if (getCookie("lang") == "EN") {
        location = "https://en.scuderiapacifica.com";
    } else if (getCookie("lang") == "ES") {
        location = "https://es.scuderiapacifica.com";
    } else if (getCookie("lang") == "FR") {
        location = "https://fr.scuderiapacifica.com";
    } else {
        const nav = navigator.language

        switch (nav) {
            case "es":
                location = "https://es.scuderiapacifica.com"
                break
            case "fr":
                location = "https://fr.scuderiapacifica.com"
                break
            default:
                location = "https://en.scuderiapacifica.com"
                break
        }
    }
}