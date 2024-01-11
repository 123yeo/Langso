var refresh_button = document.querySelector("#refresh");
refresh_button.addEventListener('click', function () {
    var app = document.querySelector("#app");
    var newone = app.cloneNode(true);
    app.parentNode.replaceChild(newone, app);
})