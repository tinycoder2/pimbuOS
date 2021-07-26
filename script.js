

function openMessages() {
  document.getElementById("appRow").style.display = 'none';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("mySidebar").style.display='block';
  document.getElementById("myMenu").style.width = '0%';
  
  
}

function closeMessages() {
  document.getElementById("mySidebar").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  document.getElementById("subScreen").style.display = 'block';
  
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
    x.style.height = "75%";
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
  document.getElementById("myMenu").style.width = '0%';
  
}

function closePaint() {
  document.getElementById("paintApp").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  document.getElementById("subScreen").style.display = 'block';
  
}

function openMusic() {
  document.getElementById("appRow").style.display = 'none';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("musicApp").style.display = 'block';
  document.getElementById("myMenu").style.width = '0%';
  
}

function closeMusic() {
  document.getElementById("musicApp").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  document.getElementById("subScreen").style.display = 'block';
  
}

function openWhatDo() {
  document.getElementById("popupWhatDo").style.display = 'block';
  document.getElementById("popupWelcome").style.display = 'none';
  
}

function openMyPic() {
  document.getElementById("myImagePopUp").style.display = 'block';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("myMenu").style.width = '0%';
  
}

function openAbout() {
  document.getElementById("aboutMe").style.display = 'block';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("myMenu").style.width = '0%';
  
}

function openContact() {
  document.getElementById("myContact").style.display = 'block';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("myMenu").style.width = '0%';
  
}

function openLeave() {
  document.getElementById("popupLeave").style.display = 'block';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById("myMenu").style.width = '0%';
  
}

function surprise()
{
     location.href = "https://youtu.be/dQw4w9WgXcQ";
} 


function openFolder(id) {
  document.getElementById("appRow").style.display = 'none';
  document.getElementById("subScreen").style.display = 'none';
  document.getElementById(id).style.display = 'block';
  document.getElementById("myMenu").style.width = '0%';
  
}

function closeFolder(id) {
  document.getElementById(id).style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  
}

function openSite(link)
{
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
