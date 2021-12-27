/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/

const engineer = (array) => array.forEach(e => console.log("eng."+e));
  // input code here
let arrN=["zainab","omar","zahraa"];
engineer(arrN);
let arr=[90,100,80,70,60];
let mar = 20;

/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/

const toKWD =(array)=>array.map(e=> e*0.3);

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/

const richestWallet = (wallets,maxAmount)=> wallets.filter(e=> e<maxAmount);

/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/

const makeLiteralGrades = (grades) => grades.map(e=> {
  if(e >=90){
return e ="A"
  }else if(e>=80){
    return e ="B"
  }else if(e>=70){
    return e= "C";
  }else if(e>=60){
return e="D";
  }
  else {
    return e ="F";
  }
})
console.log(makeLiteralGrades(arr));