document.addEventListener("DOMContentLoaded", getItemInfo);


function getItemInfo(){

    
    itemInfo=JSON.parse(localStorage.getItem("item"));

    let output=``;

    output+=`<img class="item-picture" src="item1.jpg" >`;
        output+=`<p class="item-content">${itemInfo.name} Price is ${itemInfo.price}</p>`;


    console.log(itemInfo);
    const newDiv=document.createElement("div");
    newDiv.className="item";
    newDiv.innerHTML=output;
    const container=document.querySelector(".container");

    container.appendChild(newDiv);



   

}
