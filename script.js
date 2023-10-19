// Lặp lại hiệu ứng typing sau mỗi 5 giây
function startTypingAnimation() {
    const textHeading = document.querySelector('#slider .text-heading');
    textHeading.style.animation = 'typing 4s, cursor .4s step-end infinite alternate';
    setTimeout(() => {
        textHeading.style.animation = 'none'; // Dừng animation
        setTimeout(startTypingAnimation, 8000); // Bắt đầu lại sau 8 giây
    }, 4000); // Dừng hiệu ứng typing sau 4 giây
}

startTypingAnimation(); // Bắt đầu ban đầu

var animationEls = document.querySelectorAll('.show-on-scroll')

function toggleAnimationEl(element){
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    //check whether on screen or not
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        // on screen
        element.classList.add('start')
    }else{
        // out screen
        element.classList.remove('start')
    }
}

function checkAnimation(){

    animationEls.forEach(el => {
        toggleAnimationEl(el)
    })

}

window.onscroll = checkAnimation