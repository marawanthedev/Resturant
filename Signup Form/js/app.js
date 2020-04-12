




// Capturing Info

class captureInfo {


    constructor(userName,password,confirmed,email){
       
        this.userName=userName;
        this.password=password;
        this.confirmed=confirmed;
        this.email=email;

    }

    getInfo() {


        let missing = false;

     
        const userName = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        const confirmed = document.querySelector("#confirmed").value;
        const email = document.querySelector("#email").value;

        let  info = new captureInfo( userName, password, confirmed, email);


        //     info.forEach(function(element){

        //     if(element===""){

        //         missing=true;
        //         info=[];
        //         const ui=new UI()
        //         ui.showAlert(`Please fill in all Fields`,"alert");



        //     }
        // });



        if (missing === true) {
            missing = false;
            info = [];
            // const ui = new UI()

            // ui.showAlert("Please fill All fields", "alert");

        }
        else {

            if (confirmed !== password) {

                info = [];
                // const ui = new UI()

                // ui.showAlert("Passwords are not matching", "alert");

            }
            else {

                // const ui = new UI()

                // ui.showAlert(`Success`, "success");

                const newInfo = new Store();

                newInfo.addInfo(info);


                const  next={
                    href:"newlogin.html"
                }
    
                localStorage.setItem("next",JSON.stringify(next));
               
                setTimeout(()=>window.location.href="loading.html",500)
                // setTimeout(() => window.location.href="landingpage.html", 2000);
                



            }
        }

    }


}


//   UI


// class UI {


//     constructor() {

//     }

//     showAlert(message, className) {
//         const ui = new UI()
//         ui.clearAlert();

//         const div = document.createElement("div");
//         div.className = className;
//         div.appendChild(document.createTextNode(message));

//         const container = document.querySelector(".main-info");
//         const form = document.querySelector(".signup")

//         container.insertBefore(div, form);
//         console.log(container.childNodes)
//         console.log(div);
//         setTimeout(function () {
//             if (document.querySelector(".alert") != null) {

//                 console.log(`target secured`);
//                 document.querySelector(".alert").classList.add("remove");
//                 document.querySelector(".alert").classList.remove("alert");






//             }
//             else if (document.querySelector(".success") != null) {
//                 document.querySelector(".success").classList.add("remove");
//                 document.querySelector(".success").classList.add("success");

//             }

//         }, 3000)


//     }
//     clearAlert() {

//         if (document.querySelector(".alert") != null) {

//             console.log(`target secured`)
//             document.querySelector(".alert").remove();

//         }

//         if (document.querySelector(".success") != null) {

//             console.log(`target secured`)
//             document.querySelector(".success").remove();

//         }





//     }

// }


//   Variables and event listners


// Storage

class Store {




    constructor(firstName, lastName, phoneNumber, userName, password, confirmed, email) {



    }

    getInfo() {
        let userInfo;

        if (localStorage.getItem("User Info") === null) {
            userInfo = [];
        }
        else {
            userInfo = JSON.parse(localStorage.getItem("User Info"));
        }
        return userInfo;
    }
    addInfo(userInfo) {
        const store = new Store()
        const info = store.getInfo();
        console.log(info);

        info.push(userInfo)
        console.log(info);

        localStorage.setItem("User Info", JSON.stringify(info))

    }



}


// variables
const signUp = document.querySelector("#signup");
const capture = new captureInfo()



// evenet listners


signUp.addEventListener("click", capture.getInfo);

// document.addEventListener("DOMContentLoaded", bodyAnimation)


// bodyAnimation
// function bodyAnimation() {
//     const body = document.querySelector("body");
//     body.classList.add("animate");

//     setTimeout(function () {


//         body.classList.remove("animate");
//     }

//         , 1000)
// }

// back to landing page
// document.querySelector("#backBtn").addEventListener("click",()=>{

//     const next={

//         href:"index.html"
    
//     }

//     localStorage.setItem("next",JSON.stringify(next));

//     setTimeout(()=>window.location.href="loading.html",500)


// })





