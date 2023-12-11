const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};

const theme =
    localStorage.getItem("theme") ||
    //no idea what's going on here really
    ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
//end of no idea what's going here
const bodyClass = document.body.classList;
bodyClass.add(theme);
function toggleTheme() {
    const current = localStorage.getItem("theme");
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
