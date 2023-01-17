window.onload = function () {
    document.getElementById("genre_response").onclick = genreResponse;
};

function openpg(event, tabNum) {

    var i;
    var content;

    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("buttons");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += " active";
}