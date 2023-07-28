// watch the x position of the scroll ammount
// when x position passes a thresh hold show the back to top button
// the x position no longer meets thresh hold hide the button again

// when the button is clicked set the bodys x position back to 0

const backToTopHandling = () =>{
    const button = document.getElementById('top');

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 500){
            button.style.opacity = 1;
        } else{
            button.style.opacity = 0;
        };
    });

    button.addEventListener('click',(e)=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

export {backToTopHandling};