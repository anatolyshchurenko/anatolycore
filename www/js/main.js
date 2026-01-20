// made by mr.chronica
function infoButton()
    {
            const element = document.getElementById("h_info");
        
        if (element.style.display == "none") {
            element.style.display = "flex";
            console.log('инфо появилось');
        } else {
            element.style.display = "none";
            console.log('инфо скрыто');
        }
    } 
function authorButton()
    {
        const element = document.getElementById("h_author");
        
        if (element.style.display == "none") {
            element.style.display = "flex";
            console.log('инфо появилось');
        } else {
            element.style.display = "none";
            console.log('инфо скрыто');
        }
    }