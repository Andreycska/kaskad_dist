const textArea = document.querySelectorAll('[data-autoresize]');
let arrInput = document.querySelectorAll('.form__input');
for (var i = 0, count = arrInput.length; i < count; i++) {
    arrInput[i].addEventListener("focus", function() {
        this.nextElementSibling.classList.add("focus");
    });
    arrInput[i].addEventListener("blur", function() {
        if (this.value == false) 
        this.nextElementSibling.classList.remove("focus");
    });
}
textArea.forEach(item => {
    item.addEventListener('input', event =>{
        let $this = event.target;
        $this.style.height = '35px'
        $this.style.height = $this.scrollHeight + 'px';
    });
});