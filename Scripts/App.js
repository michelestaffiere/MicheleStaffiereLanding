const h1Heading = document.querySelector('.name');
const h2SubHeading = document.querySelector('.subHeading');
const talkButton = document.querySelector('.contactMe')
const menuUL = document.querySelector('.menuUL')
const nav = document.querySelector('nav');
const chevron = document.querySelector('.chevron');



// Hackermans glitch animation, we can use this anywhere,,, we are so in.
const GlitchAnimation = (target, completedCallback) => {
    const characters = "12345ABCDEFGHIJKLMNOP$%#@!~.[]";
    
    const targetText = target.innerText;
    let iteration = 0;
    let glitchedText = targetText;
    let stopCheck = null;
    
    clearInterval(stopCheck);
    
    stopCheck = setInterval(() => {
        glitchedText = targetText
        .split("")
        .map((letter, index) => {
            if (index < iteration) {
                return target.dataset.value[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");
        
        target.innerText = glitchedText;
        
        iteration += 1 / 3;
        
        if (iteration >= target.dataset.value.length) {
            clearInterval(stopCheck);
            if (completedCallback) {
                completedCallback();
            }
        }
    }, 30);
};


// only use this at start up for hero animation and menu fade in, use nowhere else!
const firstLoadGlitchAnimation = () =>{
    let h1HasCompleted = false;
    let h2HasCompleted = false;
    h1Heading.classList.add(`active`); 
    GlitchAnimation(h1Heading, ()=>{
        h1HasCompleted = true;
        if(h1HasCompleted === true){
            h2SubHeading.classList.add(`active`);
            GlitchAnimation(h2SubHeading,()=>{
                h2HasCompleted = true;
                if(h2HasCompleted === true){
                    nav.classList.add('active');
                    chevron.classList.add('fadeInFadeOut');
                }
            })
        }
    })
};

firstLoadGlitchAnimation();

// todo 
// copy and tweak the glitch animation to create one thats constantly glitches, do this later for flavour.

const project1Observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        }
    });
});
const project2Observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate__animated','animate__fadeIn');
        }
    });
});
const project3Observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate__animated', 'animate__fadeInRight')
        }
    });
});
project1Observer.observe(document.querySelector('.project1'));
project2Observer.observe(document.querySelector('.project2'));
project3Observer.observe(document.querySelector('.project3'));