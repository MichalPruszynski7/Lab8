function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
  	var textbox = document.getElementById('entryinput');
  	document.getElementById('textoutput').innerHTML =textbox.value;
  	alert("Michal Pruszynski: " + textbox.value);
  }

  button.addEventListerner('click', showMeText);
  }

window.addEventListener('load', init);