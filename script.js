

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  
}

function closePopUp(id) {
  document.getElementById(id).style.display = 'none';
  
}

function toggleMenu() {
  var x = document.getElementById("myMenu");
  if (x.style.height == "0%") 
  {
    x.style.height = "100%";
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
  document.getElementById("paintApp").style.display = 'block';
  
}

function closePaint() {
  document.getElementById("paintApp").style.display = 'none';
  document.getElementById("appRow").style.display = 'block';
  
}
