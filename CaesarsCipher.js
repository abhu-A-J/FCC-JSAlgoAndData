function rot13(str) { // LBH QVQ VG!

let code;
let character;
let result="";
let replaceCode;
 let replaceChar;

for(let i=0;i<str.length;i++)
{
  character=str[i];
  code=character.charCodeAt();
  if(code>=65 && code<=90)
  {
        if(code<=77)
        {
           replaceCode=code+13;
           replaceChar=String.fromCharCode(replaceCode);
           result=result+replaceChar;
        }
        else
        {
            replaceCode=code-13;
           replaceChar=String.fromCharCode(replaceCode);
           result=result+replaceChar;

        }
      
  }
  else{
    result=result+str[i];
  }
}
  
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");