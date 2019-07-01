function checkNumbers(arrNumbers){
  length=arrNumbers.length;

  if(length<10)
  {
    return false;
  }
  else if(length==10)
  {
    return true;
  }
  else
  {
          if(length===11)
          {
            if(arrNumbers[0]==="1")
             {
                return true;
              }

            else
            {
              return false;
            }
          }
          else
            {
            return false

          }
  }

}

function checkBrackets(brackets){
  let length=brackets.length;
  let count=0;

  for(let j=0;j<length;j++)
  {
    
     if(count<0)
      {
        return false;
      }

      if(brackets[j]==="(")
      {
        count+=1;
      }
    else
      {
        count-=1;
      }
  }

  if(count===0)
    return true;
  else
    return false;
}

function checkoverAll(str)
{
  let state=true;

    for(let i=0;i<str.length;i++)
    {
      let code=str[i].charCodeAt();
      if(!state)
      {
        return state;
      }
      
      if( ! (code>=48 && code<=57) ) 
      {
            if(str[i]==="(" || str[i]===")" || str[i]==="-" || str[i]==" ")
            {
              state=true;
            }
            else
            {
              state=false;
            }
      }

    }

    return true;
    

}

function telephoneCheck(str) {
  // Good luck!
  let arrNumbers=[],  brackets=[];
  let initialcheck=true;

  if(str.length>10)
  {
    if(str[0]=="(")
    {
      if(str[1]!=="1" && str[1]!=="5")
      {
      initialcheck=false;
      }
    }
  
    else
    {
        if(str[0]!=="1" &&str[0]!=="5")
        {
          initialcheck=false;
        }
    }
  }  
  

  
  
  for(let i=0;i<str.length;i++)
  {
      let code=str[i].charCodeAt();
      if(code>=48 && code<=57)
      {
        arrNumbers.push(str[i]);
      }

    if(str[i]==="(" || str[i]===")")
    {
      brackets.push(str[i]);
    }
 


    
  }
 
  console.log(str);
 console.log(arrNumbers);
 console.log(brackets);

  let numbersState=checkNumbers(arrNumbers);
  let bracketsState=checkBrackets(brackets);
  let overallState=checkoverAll(str);

  console.log(numbersState);
  console.log(bracketsState);
  console.log(overallState);


  return((numbersState&&bracketsState&&overallState&&initialcheck));



}


telephoneCheck("555-555-5555");