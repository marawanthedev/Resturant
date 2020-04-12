


class Animation{



    // loading animation


    loadingAnimation(){

        const logo=document.querySelector("img");


        console.log(logo);
        setTimeout(()=>{

            // logo.classList.toggle("in");
            // logo.classList.toggle("out");
            logo.classList.add("rotate1");

            setTimeout(()=>{

                logo.classList.add("rotate2")

            },3000)

        },1000);

        }
}

// class object
const anim=new Animation();
    document.addEventListener("DOMContentLoaded",anim.loadingAnimation)

setTimeout(()=> {
    
    // redirecting the user to the wished page

    next=JSON.parse(localStorage.getItem("next"));

    window.location.href=next.href;

},2000);