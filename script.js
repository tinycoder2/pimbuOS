

function openMessages() {
  document.getElementById("mySidebar").style.display='block';
  
  
}

function closeMessages() {
  document.getElementById("mySidebar").style.display = 'none';
  
}

function deleteMessages() {
  document.getElementsByClassName("popupMessage").style.display='none';
  
}

function closePopUp(id) {
  document.getElementById(id).style.display = 'none';
  
}

function toggleMenu() {
  var x = document.getElementById("myMenu");
  if (x.style.height == "0%") 
  {
    x.style.height = "70%";
    x.style.width = "30%";
  } 
  else 
  {
    x.style.height = "0%";
    x.style.width = "0%";
  }
}

function openPaint() {
  document.getElementById("appRow").style.display = 'none';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("paintApp").style.display = 'block';
  
}

function closePaint() {
  document.getElementById("paintApp").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  
}

function openMusic() {
  document.getElementById("appRow").style.display = 'none';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("musicApp").style.display = 'block';
  
}

function closeMusic() {
  document.getElementById("musicApp").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  
}

function openWhatDo() {
  document.getElementById("popupWhatDo").style.display = 'block';
  document.getElementById("popupWelcome").style.display = 'none';
  
}

function surprise()
{
     location.href = "https://youtu.be/dQw4w9WgXcQ";
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
