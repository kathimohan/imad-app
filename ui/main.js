console.log('Loaded!');
// change the text
var element = document.getElementById('main-text');
element.innerHTML='New Value' // change the web page content to new value
// move the image
var img = document.getElementById('madi')
var marginleft=0;
function moveRight() {
marginleft = marginleft+10;
img.style.marginleft = marginlet+'px' ;
}
img.onclick = function() {
    
    var interval = Setinterval(moveright,100);
    
    
};