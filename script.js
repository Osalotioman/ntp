const fs = require('fs');

// Read the file synchronously and convert the data to a string
const filePath = 'issue_body.txt';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Now `fileContent` contains the entire content of the file as a string
//console.log(fileContent);


let newBody = fileContent.split('\n');
let newBody1 = "";

for(let i=0; i<newBody.length; ++i){
    if(newBody[i].includes("### Screenshots") && i+4<newBody.length){
        if(newBody[i+2].includes("```bash") && newBody[i+4].includes("```")){
            newBody[i] = "_-1";
            newBody[i+1] = "_-1";
            newBody[i+2] = "_-1";
            newBody[i+3] = "_-1";
            newBody[i+4] = "_-1";
        }
    }
    if(newBody[i].includes("_No response_")){
        newBody[i] = "_-1";
    }
    if(newBody[i] != "_-1"){
        newBody1 += newBody[i] + '\n';
    }
}
console.log("file content: ");
console.log(fileContent.split('\n'));
console.log("new body: ");
console.log(newBody1.split('\n'));