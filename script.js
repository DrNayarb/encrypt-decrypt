
let key ="";
let message ="";
let encrptedMessage ="";
let decryptedMessage = "";
function formdata(){
    key = document.getElementById("key").value;
    message = document.getElementById("message").value;
    let keyI = parseInt(key);
    encrptedMessage = encryptMessage(message,keyI);


    document.body.innerHTML ="";
    const node = document.createElement("h1");
    const textnode = document.createTextNode('Confirmation page')
    node.appendChild(textnode);
    document.body.appendChild(node);

    const p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = encrptedMessage;
    // document.body.appendChild()

}

function encryptMessage(messageV , keyV){
const map = new Map();
const reverseMap = new Map();
let currCode = 65;
let character = String.fromCharCode(currCode);


for(let i = 0 ; i < 26; i++){
    map.set(character,i);
    reverseMap.set(i,character);
    currCode++;
    character = String.fromCharCode(currCode);
}

let newMessage = "";
let arr = [];
// setting message to its map code
for(let i = 0 ; i < messageV.length; i++){
    arr.push(map.get(messageV.charAt(i)));
}

const newMessageChars = arr.map(x => (x + keyV)%26);

for(let i = 0 ; i < newMessageChars.length;i++){
    newMessage+= reverseMap.get(newMessageChars[i]);
}
return newMessage;
}

function decryptMessage(messageV,keyV){
    const map = new Map();
    const reverseMap = new Map();
    let currCode = 65;
    let character = String.fromCharCode(currCode);
    
    
    for(let i = 0 ; i < 26; i++){
        map.set(character,i);
        reverseMap.set(i,character);
        currCode++;
        character = String.fromCharCode(currCode);
    }
    
    let newMessage = "";
    let arr = [];
    // setting message to its map code
    for(let i = 0 ; i < messageV.length; i++){
        arr.push(map.get(messageV.charAt(i)));
    }
    
    const newMessageChars = arr.map(x => ((x - keyV)+26)%26);
    
    for(let i = 0 ; i < newMessageChars.length;i++){
        newMessage+= reverseMap.get(newMessageChars[i]);
    }
    return newMessage;   
}

function formdata2(){
    key = document.getElementById("keyD").value;
    message = document.getElementById("messageD").value;
    let keyI = parseInt(key);
    decryptedMessage = decryptMessage(message,keyI);


    document.body.innerHTML ="";
    const node = document.createElement("h1");
    const textnode = document.createTextNode('Confirmation page')
    node.appendChild(textnode);
    document.body.appendChild(node);

    const p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = decryptedMessage;
    // document.body.appendChild()

}

