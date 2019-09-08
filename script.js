//Uppgift: Skapa en inloggningssida

//Variables
const loginBtn = document.getElementById("login-button");
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const titleText = document.getElementById("head-title");
const loginName = "test";
const loginPassword = "1234";

//Check if user is already logged in.
verifyLogin();

//When the loginbutton is clicked, check if username and password is correct.
loginBtn.onclick = function(){
    var inputName = document.getElementById("input-one").value;
    var inputPass = document.getElementById("input-two").value;

        //If username and password is correct, call the logIn function.
        //If its wrong, hide the login elements, give a message to the user what went wrong and create a button to try again.
        if(inputName === loginName && inputPass === loginPassword){
            logIn();
            console.log("welcome in");
        }
        else{
            loginBtn.style.display = "none";
            inputFieldOne.style.display = "none";
            inputFieldTwo.style.display = "none";
            titleText.innerHTML = "Ooops!";

            const paraWrong = document.createElement("p");
            paraWrong.innerHTML = "Fel användarnamn eller lösenord.";
            document.body.appendChild(paraWrong);

            const tryAgainBtn = document.createElement("button");
            tryAgainBtn.innerHTML = "Försök igen";
            document.body.appendChild(tryAgainBtn);

            tryAgainBtn.onclick = function(){
                location.reload();
            }

            console.log("Incorrect username or password");
        }
};

//Give the key "loggedin" a value of "true", and reload the page. 
function logIn(){
    localStorage.setItem("loggedin", true);
    location.reload();
};

//Check localstorage to see if the user is logged in.
//If the user is logged in, show a welcome page and create a logout button.
function verifyLogin(){
    let i = localStorage.getItem("loggedin")
        if(i === "true"){
            loginBtn.style.display = "none";
            inputFieldOne.style.display = "none";
            inputFieldTwo.style.display = "none";
            titleText.innerHTML = "Välkommen!";

            const logoutBtn = document.createElement("button");
            logoutBtn.innerHTML = "Log out";
            document.body.appendChild(logoutBtn);

            //If logout button is clicked, clear localstorage and reload the page.
            logoutBtn.onclick = function(){
                localStorage.clear();
                location.reload();
            };

            console.log("local storage works");
        }
        else{
            console.log("nothing in localstorage");
        }
};

