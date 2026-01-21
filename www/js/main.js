// made by mr.chronica
function infoButton() {
    const element = document.getElementById("h_info");
    
    if (element.style.opacity == "0" || element.style.opacity == "") {
        element.style.opacity = "1";
    } else {
        element.style.opacity = "0";
    }
}

function authorButton() {
    const element = document.getElementById("h_author");
    
    if (element.style.opacity == "0" || element.style.opacity == "") {
        element.style.opacity = "1";
    } else {
        element.style.opacity = "0";
    }
}