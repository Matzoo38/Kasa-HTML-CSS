const collapse = document.querySelector ("collapse-container")
const collapseText = document.querySelector ("collapse-text")
const collapseArrow = document.querySelector ("#icon")


collapseArrow.addEventListener('click', ()  => {
  alert();
  
  ToggleText();

});

function ToggleText () {


  if  (collapseText.style.display == 'none'){
        
    collapseText.style.display == 'block'
}

else {
  collapseText.style.display = 'none';
} 

}



