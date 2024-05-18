var colorPicker = document.getElementById("bgcolor");

function changebodycolor(){
   var colorVal = colorPicker.value;
   document.body.style.background = colorVal;
}

colorPicker.addEventListener("change",
changebodycolor,false);
