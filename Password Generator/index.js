const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");

const slider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');

slider.addEventListener('input', () => {
  lengthValue.textContent = slider.value;
});

//Generate two random passwords 15 characters long
function generatePasswords(){
    let tempPass1 = "";
    let tempPass2 = "";

    const length = parseInt(document.getElementById('lengthSlider').value);


    for (let i=0; i < length; i++) {

        tempPass1 += characters [Math.floor(Math.random() * characters.length )];
        tempPass2 += characters [Math.floor(Math.random() * characters.length )];

        password1.textContent = tempPass1;
        password2.textContent = tempPass2;
    }

    tempPass1 = "";
    tempPass2 = "";
}


//Stretch Goals
//Ability to set password length
//Add "copy-on-click"
//Toggle "symbols" and "numbers" on/off