const statusToBeGiven=["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];

const coinMapping={
      "PENNY" : 0.01,
      "NICKEL" : 0.05,
      "DIME"  : 0.1 ,
     "QUARTER" :0.25,
      "ONE" :1 ,
      "FIVE" :5 ,
      "TEN" :10 ,
      "TWENTY" :20 ,
      "ONE HUNDRED" :100
};

function getTotal(cid)
{
  let sumTotal=0;

  for(let i=0;i<cid.length;i++)
  {
    sumTotal=sumTotal+cid[i][1]  
  }
return sumTotal.toFixed(2);
}

function checkStatus(changeIs,totalMoney)
{
  let returnValue;
  

      if(Number(changeIs)<Number(totalMoney))
      {
        returnValue=statusToBeGiven[2];
      }
      
      else if( Number(changeIs)==Number(totalMoney))
      {
        returnValue= statusToBeGiven[1];
      }
      else
      {
        returnValue= statusToBeGiven[0];
      }

      return returnValue;
}
  
  function giveTheChange(changeNeeded,cash)
  {

        let changeProvided=[];
        for(let i=cash.length-1; i>=0;i--)
        {
            let name=cash[i][0]
            let total=cash[i][1];

            let cashValue=coinMapping[name];
            let cashQuantity=(total/cashValue).toFixed(2);
            let count=0;

            while(changeNeeded>=cashValue && cashQuantity>0)
            {
              changeNeeded=(changeNeeded-cashValue).toFixed(2);
              cashQuantity-=1;
              count++;

            }

            if(count>0)
            {
              changeProvided.push([ name , count*cashValue]);
            }

        }

        return changeProvided;

  }

function checkCashRegister(price, cash, cid) 
{
  let result={
    status:"",
    change:cid
  };

  let changeIs=(cash-price).toFixed(2);
  let totalMoney=getTotal(cid);
 
  const statusGiven=checkStatus(changeIs,totalMoney);
  
  
    if(statusGiven===statusToBeGiven[0])
    {
      result.status=statusToBeGiven[0];
      result.change=[];
      return result;
    }

    else if(statusGiven===statusToBeGiven[1])
    {
        result.status=statusToBeGiven[1];
        result.change=[...cid];
        return result;
    }

    else{

    const changeProvided=giveTheChange(changeIs,cid);

    result.status=statusToBeGiven[2];
    result.change=changeProvided;

    if(changeIs>getTotal(changeProvided))
    {
      result.status=statusToBeGiven[0];
      result.change=[];
    }
    
  }

  return result;


}



//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])