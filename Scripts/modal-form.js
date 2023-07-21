//Modal Scriipts
const ModalHandling = () => {
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
}




// form handling
const formspreeHandling = () =>{
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
}

export { formspreeHandling, ModalHandling};