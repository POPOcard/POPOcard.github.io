function openPopup() {
    var popup = document.getElementById("customPopup");
    popup.style.display = "block";
    var iframe = popup.querySelector("iframe");

    iframe.src = "https://m.ickd.cn/";
}

function closePopup() {
    var popup = document.getElementById("customPopup");
    popup.style.display = "none";
}


document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});