const showCaseAnimation = (node) =>{
    window.addEventListener('scroll', ()=>{
        const scrollPosition = window.scrollY + window.innerHeight;
        const showCase = document.querySelector('.showCase');
        const showCaseTop = showCase.offsetTop + 900;
        const showCaseBottom = showCaseTop + showCase.offsetHeight + 100;

    
        if (scrollPosition > showCaseTop && scrollPosition < showCaseBottom){
            document.querySelector('.project1').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.project2').style = "transform: translateX(0%); opacity: 1"
        } else{
            document.querySelector('.project1').style = "transform: translateX(100%); opacity: 0"
            document.querySelector('.project2').style = "transform: translateX(-100%); opacity: 0"
        }
    });
};

export {showCaseAnimation};