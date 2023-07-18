const body = document.querySelector("body");

const h1Heading = document.querySelector('.name');
const h2SubHeading = document.querySelector('.subHeading');
const talkButton = document.querySelector('.contactMe')
const menuUL = document.querySelector('.menuUL')
const nav = document.querySelector('nav');
const chevron = document.querySelector('.chevron');
const mobileNavButton = document.querySelector(".mobileNavButton");




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
                    mobileNavButton.classList.add('active');
                    chevron.classList.add('fadeInFadeOut');
                }
            })
        }
    })
};

const projectAnimationHandling = () =>{
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
}

projectAnimationHandling();
firstLoadGlitchAnimation();



//Modal Scriipts
const contactButton = document.getElementById("contactMeBtn");
const closeContactModalButton = document.getElementById("closeModal")
const modal = document.getElementById("modal");

contactButton.addEventListener('click',()=>{
    modal.showModal();
    modal.classList.remove('above');
})

closeContactModalButton.addEventListener('click',() =>{
    modal.classList.add('above');
    modal.close();
})


//burger menu func


mobileNavButton.addEventListener('click', ()=>{
    nav.classList.toggle('mobileNavActive');
});

nav.addEventListener('click', (e)=>{
    if(e.target.tagName === "A" || e.target.tagName === "BUTTON"){
        nav.classList.toggle('mobileNavActive');
    }
});


// form handling

const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("formStatus");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "//Thank you for reaching out!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "//Oops! please try again later."
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "//Oops! please try again later."
      });
    }
    form.addEventListener("submit", handleSubmit)