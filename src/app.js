function copyToClipboardid1(element1,element2) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element1,element2).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
function copyToClipboardid2(element1,element2) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element1,element2).text()).select();
  document.execCommand("copy");
  $temp.remove();
}



function switchCaseid1(){
    document.querySelector('#screen').classList.add('id1');
}
function switchCaseid2(){
    document.querySelector('#screen').classList.add('id2');
}

function reload(){
    location.reload();
}

function reqChange(event) {
    var text = document.getElementById(id1);
    const el = event.target;
    el.setAttribute('style', 'color: text');
  }
  
//   document.querySelector('#image').addEventListener('click', () => {
//     document.querySelector('#screen').classList.add('myClass');
//   }); 


function myFunction() {
  /* Get the text field */
  var copyText1 = document.getElementById("myInput");
  var copyText = copyText1;

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
