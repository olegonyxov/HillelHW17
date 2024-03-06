let textFieldElement = document.querySelector(".textField");
let showDivElement = document.getElementById("showDiv");
textFieldElement.addEventListener('focusin', function() {
    showDivElement.style.visibility = 'visible'
})
textFieldElement.addEventListener('focusout', function() {
    showDivElement.style.visibility = 'hidden'
})