// display 
function df(){
  document.getElementById('screen').style.display = 'flex';
}
function cdf() {
  navigator.clipboard.writeText("display: flex;");
}

function db(){
  document.getElementById('screen').style.display = 'block';
}
function cdb() {
  navigator.clipboard.writeText("display: block;");
}

// justify content 
function jcfs(){
  document.getElementById('screen').style.justifyContent = 'flex-start';
}
function cjcfs() {
  navigator.clipboard.writeText("justify-content: flex-start;");
}

function jcfe(){
  document.getElementById('screen').style.justifyContent = 'flex-end';
}
function cjcfe() {
  navigator.clipboard.writeText("justify-content: flex-end;");
}

function jcc(){
  document.getElementById('screen').style.justifyContent = 'center';
}
function cjcc() {
  navigator.clipboard.writeText("justify-content: center;");
}

function jcse(){
  document.getElementById('screen').style.justifyContent = 'space-evenly';
}
function cjcse() {
  navigator.clipboard.writeText("justify-content: space-evenly;");
}

function jcsb(){
  document.getElementById('screen').style.justifyContent = 'space-between';
}
function cjcsb() {
  navigator.clipboard.writeText("justify-content: space-between;");
}


// reload 
function reload(){
    location.reload();
}



// function myFunction() {
//   /* Get the text field */
//   var copyText1 = document.getElementById("myInput");
//   var copyText = copyText1;

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//   /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);
  
//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }
// function copyToClipboardid1(element1,element2) {
//   var $temp = $("<input>");
//   $("body").append($temp);
//   $temp.val($(element1,element2).text()).select();
//   document.execCommand("copy");
//   $temp.remove();
// }

// function copy() {
//   var copyText = document.querySelector("#id1");
//   copyText.select();
//   document.execCommand("copy");
//   alert(copyText);
// }