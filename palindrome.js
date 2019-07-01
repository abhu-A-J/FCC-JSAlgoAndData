function palindrome(str) {
  // Good luck!
  let correctedString="";
    let reversedString="";
  for(let i=0;i<str.length;i++)
  {
    let code=str[i].charCodeAt();
    if(  (code>=65 && code<=90) ||(code>=97 && code<=122) ||(code>=48 && code<=57)     )
    {
      correctedString=correctedString+str[i].toLowerCase();
    }
  }

    for(let i=correctedString.length-1;i>=0;i--)
    {
      reversedString=reversedString+correctedString[i];
    }

    return(correctedString===reversedString);
}
 


palindrome("eye");