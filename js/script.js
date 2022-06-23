/**
 * Change the HTML content of the ID demo
 * @returns 
 */
function changeContent() {
    console.log(console, 'console');
    console.log(window, 'window')
    return document.getElementById("demo").innerHTML="JavaScript was invented by Brendan Eich in 1995";
}
 /**
  * Changing Pictures
  * @returns 
  */
function changePicture1(){
  return  document.getElementById("image").src="./images/Couple pic.jpeg";
}
function changePicture(){
  return document.getElementById("image").src="./images/Anvesh.jpeg";
}
function changePicture2(){
  return document.getElementById("image").src="./images/ramya.jpeg";
}

/**
 * Making size changes
 * @returns 
 */
function sizeChange(){
    return document.getElementById("text-size").style.fontSize="30px";
}

/**
 * hiding the text
 * @returns 
 */
function hideText(){
    return document.getElementById('hide-text').style.display='none';
}

/**
 * Switching the content
 * @returns 
 */
function toggleSwitch(){
    return document.getElementById('text-change').innerHTML === 'Anvesh loves Ramya' ?
    document.getElementById('text-change').innerHTML = 'Anvesh and Ramya' :
    document.getElementById('text-change').innerHTML = 'Anvesh loves Ramya';
}
