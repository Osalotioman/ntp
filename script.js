const fs = require('fs');

// Read the file synchronously and convert the data to a string
const filePath = 'issue_body.txt';
const fileContent = fs.readFileSync(filePath, 'utf8');

// Now `fileContent` contains the entire content of the file as a string
//console.log(fileContent);


let newBody = fileContent.split('\n');
let newBody1 = "";
let clear_sh = "";

for(let i=0; i<newBody.length; ++i){
    if(newBody[i].includes("### Screenshots") && i+5<newBody.length){
        //if(newBody[i+2].includes("```bash") && newBody[i+4].includes("```")){
            //clear_sh = ;
            if(newBody.slice(i, i+6).join('').replace(/\s+/g, '') === "###Screenshots```bash```"){
                newBody.splice(i, 6, ...Array(6).fill(""));
            }
            /*newBody[i] = "_-1";
            newBody[i+1] = "_-1";
            newBody[i+2] = "_-1";
            newBody[i+3] = "_-1";
            newBody[i+4] = "_-1";*/
            //newBody.splice(i, 5, ...Array(5).fill("_-1"));
        //}
    }
    if(newBody[i].includes("_No response_")){
        newBody[i] = "";
    }
    if(newBody[i] != ""){
        newBody1 += newBody[i] + '\n';
    }
}
console.log("file content: ");
console.log(fileContent.split('\n'));
console.log("new body: ");
console.log(newBody1.split('\n'));
console.log("clear sh: ");
console.log(clear_sh);