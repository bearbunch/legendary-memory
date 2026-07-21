const themeSelect = document.getElementById("themeSelect");
const favicon = document.getElementById("favicon");



function updateFavicon(theme) {

    let currentTheme = theme;


    if (theme === "system") {

        currentTheme =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
        ? "dark"
        : "light";

    }


    if (currentTheme === "dark") {

        favicon.href =
        "src/icons/dark.ico";

    } else {

        favicon.href =
        "src/icons/light.ico";

    }

}




function applyTheme(theme) {


    if (theme === "system") {


        const dark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


        document.documentElement.dataset.theme =
        dark ? "dark" : "light";


    } 
    
    else {


        document.documentElement.dataset.theme =
        theme;


    }


    updateFavicon(theme);

}




const savedTheme =
localStorage.getItem("mychat-theme")
|| "system";



if(themeSelect){

    themeSelect.value = savedTheme;

}



applyTheme(savedTheme);





if(themeSelect){

themeSelect.addEventListener(
"change",
()=>{


    const theme =
    themeSelect.value;


    localStorage.setItem(
        "mychat-theme",
        theme
    );


    applyTheme(theme);


});


}





window
.matchMedia("(prefers-color-scheme: dark)")
.addEventListener(
"change",
()=>{


    if(
    localStorage.getItem("mychat-theme")
    === "system"
    ){

        applyTheme("system");

    }


});