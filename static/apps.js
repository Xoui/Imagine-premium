
    document.getElementById("Link").addEventListener("click", function(event) {
        event.preventDefault();
        const currentURL = window.location.href;
        const newURL = currentURL + "/service/hvtr%3A-%2Ffiqcmrf.aoo";
        window.location.href = newURL;
    });