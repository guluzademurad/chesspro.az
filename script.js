let currentEngine = "chessresults";

const sites = {

    chessresults:"https://chess-results.com",

    chesscom:"https://www.chess.com",

    lichess:"https://lichess.org",

    fide:"https://ratings.fide.com",

    lankaran:"https://lankaranopen.chess.az",

    tour2026:"https://tour2026.chess.az"
};

const names = {

    chesscom:"Chess.com",

    lichess:"Lichess.org",

    fide:"FIDE Ratings",

    lankaran:"Lankaran Open",

    tour2026:"Chess Tour Azerbaijan 2026"
};

function setEngine(engine, element){

    currentEngine = engine;

    document
    .querySelectorAll(".engine-card")
    .forEach(card=>{
        card.classList.remove("active");
    });

    element.classList.add("active");

    document.getElementById(
        "currentEngineLabel"
    ).textContent = names[engine];

    localStorage.setItem(
        "selectedSite",
        engine
    );
}

document.addEventListener(
    "keydown",
    function(e){

        if(e.key === "Enter"){
            window.open(
                sites[currentEngine],
                "_blank"
            );
        }
    }
);

function changeTheme(theme){

    switch(theme){

        case "dark":
            document.body.style.background =
            "#0f172a";
            break;

        case "light":
            document.body.style.background =
            "#f4f4f4";
            document.body.style.color =
            "#000";
            break;

        case "blue":
            document.body.style.background =
            "#0b3d91";
            break;

        case "green":
            document.body.style.background =
            "#00134b";
            break;

        case "purple":
            document.body.style.background =
            "#581c87";
            break;
    }

    localStorage.setItem(
        "theme",
        theme
    );
}

window.onload = function(){

    const savedSite =
    localStorage.getItem(
        "selectedSite"
    );

    if(savedSite){

        currentEngine = savedSite;

        document.getElementById(
            "currentEngineLabel"
        ).textContent =
        names[savedSite];
    }

    const savedTheme =
    localStorage.getItem(
        "theme"
    );

    if(savedTheme){
        changeTheme(savedTheme);
    }
};