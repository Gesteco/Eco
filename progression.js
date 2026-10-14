const TOTAL = 45;

function refreshBar(){

    const progression =
        parseInt(
            localStorage.getItem(
                "GENIALLY_PROGRESS"
            ) || "0"
        );

    const percent =
        Math.round(
            progression / TOTAL * 100
        );

    document.getElementById(
        "texte"
    ).innerHTML =
        progression +
        " / " +
        TOTAL +
        " (" +
        percent +
        "%)";

    document.getElementById(
        "barre"
    ).style.width =
        percent + "%";
}

refreshBar();

setInterval(
    refreshBar,
    1000
);