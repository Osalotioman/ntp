const fs = require('fs');

// Read the file synchronously and convert the data to a string
const filePath = 'issue_body.txt';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Now `fileContent` contains the entire content of the file as a string
//console.log(fileContent);


let newBody = fileContent.split('\n');
let newBody1 = "";

for(let i=0; i<newBody.length; ++i){
    if(newBody[i].includes("### Screenshots") && i+5<newBody.length){
        if(newBody.slice(i, i+6).join('').replace(/\s+/g, '') === "###Screenshots```bash```"){
            newBody.splice(i, 6, ...Array(6).fill(""));
        }
    }
    if(newBody[i].includes("### Logs") && i+5<newBody.length){
        if(newBody.slice(i, i+6).join('').replace(/\s+/g, '') === "###Logs```bash```"){
            newBody.splice(i, 6, ...Array(6).fill(""));
        }
    }
    if(newBody[i].includes("### Browsers") && i+3<newBody.length){
        if(newBody.slice(i, i+4).join('').replace(/\s+/g, '') === "###Browsers_Noresponse_"){
            newBody.splice(i, 4, ...Array(4).fill(""));
        }
    }
    if(newBody[i].includes("### OS") && i+2<newBody.length){
        if(newBody.slice(i, i+3).join('').replace(/\s+/g, '') === "###OS_Noresponse_"){
            newBody.splice(i, 3, ...Array(3).fill(""));
        }
    }
    if(newBody[i] != ""){
        newBody1 += newBody[i] + '\n';
    }
}
console.log("file content: ");
console.log(fileContent.split('\n'));
console.log("new body: ");
console.log(newBody1.split('\n'));