var subButton = document.getElementById('add_todo');
var list = document.getElementsByTagName('ul');
var inputField= document.getElementById('add_todo');
var inputText = inputField[0].value;

var a = function (input){
  list.innerHTML= list + ('<li>' + input+  '</li>');
};
subButton.addEventListener('click', function (){
  a(inputField[0].value);
});

//this is my rubber ducky btw
//this is pissing me off, I've tryed a bunch of different things, Ive tryed the
//method sugessted, then I'm thrying to change the innerHTML, and for some unknown
//reason, its throwing up errors like it can't read the property value of undefined, dispite the fact
//that i have text in the input field, so what that means is, javascript doesn't know
//about the text field value, disptie me useing . value.
//fuck.
// I've tryied using this method as wellhttp://stackoverflow.com/questions/5074059/retrieving-text-field-value-using-javascript
// I've got it to return a list of 'undefined' which is not what I was going for but it was closer.
//I'm sure its a dumb mistake.
// this was where I was at when you called submit.
//fuck.
