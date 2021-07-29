//helper funcx
function helper(id, x) {
    if (x == true) {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
} //1-blok 0-none

function menuPoof() {
    var x = document.getElementById("myMenu");
    x.style.height = "0%";
    x.style.width = "0%"
}


function openMessages() {
    helper("appRow", 0);
    helper("subScreen", 0);
    helper("mySidebar", 1);
    menuPoof();


}

function closeMessages() {
    helper("mySidebar", 0);
    helper("appRow", 1);
    helper("subScreen", 1);


}


function closePopUp(id) {
    helper(id, 0);

}

function toggleMenu() {
    var x = document.getElementById("myMenu");

    if (x.style.height === "0%") {
        x.style.height = "75%";
        x.style.width = "35%";
    } else {
        x.style.height = "0%";
        x.style.width = "0%";
    }

}

function openPaint() {
    helper("appRow", 0);
    helper("subScreen", 0);
    helper("paintApp", 1);
    menuPoof();
}

function closePaint() {
    helper("paintApp", 0);
    helper("appRow", 1);
    helper("subScreen", 1);

}

function openMusic() {
    helper("appRow", 0);
    helper("subScreen", 0);
    helper("musicApp", 1);
    menuPoof();

}

function closeMusic() {
    helper("musicApp", 0);
    helper("appRow", 1);
    helper("subScreen", 1);

}

function openWhatDo() {
    helper("popupWhatDo", 1);
    helper("popupWelcome", 0);

}

function openMyPic() {
    helper("myImagePopUp", 1);
    helper("subScreen", 0);
    menuPoof();
}

function openAbout() {
    helper("aboutMe", 1);
    helper("subScreen", 0);
    menuPoof();
}

function openContact() {
    helper("myContact", 1);
    helper("subScreen", 0);
    menuPoof();

}

function openLeave() {
    helper("popupLeave", 1);
    helper("subScreen", 0);
    menuPoof();

}

function surprise() {
    location.href = "https://youtu.be/dQw4w9WgXcQ";
}


function openFolder(id) {
    helper(id, 1);
    helper("appRow", 0);
    helper("subScreen", 0);
    menuPoof();

}

function closeFolder(id) {
    helper(id, 0);
    helper("appRow", 1);

}

function openSite(link) {
    location.href = link;
}



// function addMessages(message){
//   let divbox = document.createElement('div');
//   divbox.classList.add('popup');

//   let textbox = document.createElement('div');
//   textbox.classList.add('txtbox');

//   divbox.appendChild(textbox);

//   let text = document.createTextNode(message);
//   textbox.appendChild(text);
//   document.body.appendChild(divbox)
// }