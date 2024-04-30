$("ul li.hidden").each(function (i) {
    $(this).delay(500 * i).queue(function (nxt) {
        $(this).removeClass('hidden');
        $(this).addClass('pop');
        nxt();
    });
});

document.getElementById("next").onclick = function () {
    location.href = "p1";
}