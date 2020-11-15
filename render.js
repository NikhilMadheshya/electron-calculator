
const remote = require('electron').remote;



//selecting dom object
const inputText=document.querySelector('#inputText');
const buttonsContainer=document.querySelector('.buttons');
const minimize=document.querySelector('#minimize');
const close=document.querySelector('#close');


//Buttons Text Values
const inputTexts=['(',')','bsp','C',7,8,9,'/',4,5,6,'*',1,2,3,'-','.',0,'=','+'];

window.addEventListener('DOMContentLoaded',()=>{
inputTexts.forEach(elem=>{
const button=document.createElement('button');
button.innerHTML=elem;
button.setAttribute('onclick','addInputValue()');
button.classList.add('button');
if(isNaN(elem))
{
button.classList.add('different');
}
buttonsContainer.appendChild(button);   
});   
});


//common controls over window
minimize.addEventListener('click',()=>{
   var currentWindow=remote.getCurrentWindow();
   currentWindow.minimize(); 
 })

 

  close.addEventListener('click',()=>{
    var currentWindow=remote.getCurrentWindow();
    currentWindow.close(); 
  })  

  function addInputValue()
  {
    const val=this.event.target.innerHTML;
      if(val ==='bsp')
      {
        inputText.value=inputText.value.substr(0,inputText.value.length-2); 
      }
      else if(val ==='C')
      {
       inputText.value='';
      }
      else if(val === '=')
      {
        inputText.value='Ans: '+eval(inputText.value);
      } 
      else
      {
        inputText.focus();
        inputText.value+=val;
      }
  }