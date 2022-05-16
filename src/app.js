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
// flex start 
function jcfs(){
  document.getElementById('screen').style.justifyContent = 'flex-start';
}
function cjcfs() {
  navigator.clipboard.writeText("justify-content: flex-start;");
}
// flex end 
function jcfe(){
  document.getElementById('screen').style.justifyContent = 'flex-end';
}
function cjcfe() {
  navigator.clipboard.writeText("justify-content: flex-end;");
}
// center 
function jcc(){
  document.getElementById('screen').style.justifyContent = 'center';
}
function cjcc() {
  navigator.clipboard.writeText("justify-content: center;");
}
// space evenly 
function jcse(){
  document.getElementById('screen').style.justifyContent = 'space-evenly';
}
function cjcse() {
  navigator.clipboard.writeText("justify-content: space-evenly;");
}
// space between
function jcsb(){
  document.getElementById('screen').style.justifyContent = 'space-between';
}
function cjcsb() {
  navigator.clipboard.writeText("justify-content: space-between;");
}
// space around 
function jcsa(){
  document.getElementById('screen').style.justifyContent = 'space-around';
}
function cjcsa() {
  navigator.clipboard.writeText("justify-content: space-between;");
}

// align-items 
// flex start 
function aifs(){
  document.getElementById('screen').style.alignItems = 'flex-start';
}
function caifs() {
  navigator.clipboard.writeText("align-items: flex-start;");
}
// flex end 
function aife(){
  document.getElementById('screen').style.alignItems = 'flex-end';
}
function caife() {
  navigator.clipboard.writeText("align-items: flex-end;");
}
// stretch 
function aifst(){
  document.getElementById('screen').style.alignItems = 'stretch';
}
function caifst() {
  navigator.clipboard.writeText("align-items: stretch;");
}
// center 
function aic(){
  document.getElementById('screen').style.alignItems = 'center';
}
function caic() {
  navigator.clipboard.writeText("align-items: center;");
}

// align-content 
// flex start 
function acfs(){
  document.getElementById('screen').style.alignContent = 'flex-start';
}
function cacfs() {
  navigator.clipboard.writeText("align-content: flex-start;");
}
// flex end 
function acfe(){
  document.getElementById('screen').style.alignContent = 'flex-end';
}
function cacfe() {
  navigator.clipboard.writeText("align-content: flex-end;");
}
// stretch 
function acsb(){
  document.getElementById('screen').style.alignContent = 'space-between';
}
function cacsb() {
  navigator.clipboard.writeText("align-content: space-between;");
}
// center 
function acc(){
  document.getElementById('screen').style.alignContent = 'center';
}
function cacc() {
  navigator.clipboard.writeText("align-content: center;");
}

// hide element 
var a = document.getElementById("toggleSwitch1");
var b = document.getElementById("toggleSwitch2");
var c = document.getElementById("toggleSwitch3");
var d = document.getElementById("toggleSwitch4");

function hide1() {
  if (a.style.display === "none") {
    document.getElementById('a').style.boxShadow = '0 1px 10px rgba(139, 181, 221, 0.781)';
    document.getElementById('aa').style.fontWeight = '550';
    document.getElementById('b').style.boxShadow = 'none';
    document.getElementById('bb').style.fontWeight = '400';
    document.getElementById('c').style.boxShadow = 'none';
    document.getElementById('cc').style.fontWeight = '400';
    document.getElementById('d').style.boxShadow = 'none';
    document.getElementById('dd').style.fontWeight = '400';
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";    
  } else {
    document.getElementById('a').style.boxShadow = 'none';
    document.getElementById('aa').style.fontWeight = '400';
    a.style.display = "none";
    
  }
}
function hide2() {
  if (b.style.display === "none") {
    document.getElementById('b').style.boxShadow = '0 1px 10px rgba(139, 181, 221, 0.781)';
    document.getElementById('bb').style.fontWeight = '550';
    document.getElementById('a').style.boxShadow = 'none';
    document.getElementById('aa').style.fontWeight = '400';
    document.getElementById('c').style.boxShadow = 'none';
    document.getElementById('cc').style.fontWeight = '400';
    document.getElementById('d').style.boxShadow = 'none';
    document.getElementById('dd').style.fontWeight = '400';

    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    document.getElementById('b').style.boxShadow = 'none';
    document.getElementById('bb').style.fontWeight = '400';
    b.style.display = "none";
  }
}
function hide3() {
  if (c.style.display === "none") {
    document.getElementById('c').style.boxShadow = '0 1px 10px rgba(139, 181, 221, 0.781)';
    document.getElementById('cc').style.fontWeight = '550';
    document.getElementById('a').style.boxShadow = 'none';
    document.getElementById('aa').style.fontWeight = '400';
    document.getElementById('b').style.boxShadow = 'none';
    document.getElementById('bb').style.fontWeight = '400';
    document.getElementById('d').style.boxShadow = 'none';
    document.getElementById('dd').style.fontWeight = '400';
    c.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
  } else {
    document.getElementById('c').style.boxShadow = 'none';
    document.getElementById('cc').style.fontWeight = '400';
    c.style.display = "none";
  }
}
function hide4() {
  if (d.style.display === "none") {
    document.getElementById('d').style.boxShadow = '0 1px 10px rgba(139, 181, 221, 0.781)';
    document.getElementById('dd').style.fontWeight = '550';
    document.getElementById('a').style.boxShadow = 'none';
    document.getElementById('aa').style.fontWeight = '400';
    document.getElementById('b').style.boxShadow = 'none';
    document.getElementById('bb').style.fontWeight = '400';
    document.getElementById('c').style.boxShadow = 'none';
    document.getElementById('cc').style.fontWeight = '400';
    d.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
  } else {
    document.getElementById('d').style.boxShadow = 'none';
    document.getElementById('dd').style.fontWeight = '400';
    d.style.display = "none";
  }
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