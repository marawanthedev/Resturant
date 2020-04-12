
document.addEventListener("DOMContentLoaded", () => document.querySelector(".row").classList.add("loaded"));
document.addEventListener("scroll", () => document.querySelector(".item3").classList.add("scrolled"));



const AddtoCart = document.querySelectorAll(".add-button");


AddtoCart.forEach((button) => {

    let output= ``

    button.addEventListener("click", (x) => {


        if (x.target.classList.contains("add-button")) {

            let target = x.target;
            let price = target.parentElement.previousElementSibling.textContent;
            let itemName=target.parentElement.previousElementSibling.previousElementSibling.textContent;
            let picture=target.parentElement.parentElement.parentElement.firstElementChild.src;// this is me gettig the picture  source of the item
            console.log(`pic is ${picture}`);
            output+=
            `<ul><li>Item is <img class="small-picture" src=${picture}> ${itemName}</li>
            <li>Item Price ${price}</li></ul>`

            let itemInfo={

                "image":`${picture}`,
                "price":`${price}`,
                "name":`${itemName}`
            }
            

            localStorage.setItem("item",JSON.stringify(itemInfo))

            console.log(`items is ${itemName}`);
            console.log(`price is ${price}`);
            const body=document.querySelector(".nav");
            const container=document.querySelector(".container");
            const cart=document.createElement("div");
            cart.className="cart-items";
            cart.innerHTML=output;
            console.log(cart);

        // body.appendChild(cart);
        }
    });

    




}); 

const backToHomePage=document.querySelector(".homepage");

backToHomePage.addEventListener("click",returnToHome);


function returnToHome(){

    const  next={
        href:"index.html"
    }

    localStorage.setItem("next",JSON.stringify(next));
   
    setTimeout(()=>window.location.href="loading.html",500)

}