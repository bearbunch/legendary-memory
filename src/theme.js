const themeSelect = document.getElementById("themeSelect");


// Apply selected theme
function applyTheme(theme) {

    if (theme === "system") {

        const isDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


        document.documentElement.dataset.theme =
            isDark ? "dark" : "light";

    } 
    
    else {

        document.documentElement.dataset.theme = theme;

    }

}



// Load saved theme

const savedTheme =
    localStorage.getItem("mychat-theme") || "system";


if (themeSelect) {

    themeSelect.value = savedTheme;

}


applyTheme(savedTheme);




// Theme selector

if (themeSelect) {

    themeSelect.addEventListener(
        "change",
        () => {

            const theme = themeSelect.value;


            localStorage.setItem(
                "mychat-theme",
                theme
            );


            applyTheme(theme);

        }
    );

}



// Detect system theme changes

window
.matchMedia("(prefers-color-scheme: dark)")
.addEventListener(
    "change",
    () => {


        if (
            localStorage.getItem("mychat-theme")
            === "system"
        ) {

            applyTheme("system");

        }


    }
);