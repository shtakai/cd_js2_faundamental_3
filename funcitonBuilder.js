function runningLogger(){
  console.log('I am running!');
}
function multiplyByTen(n){
  var result;
  result = n * 10;
  return result;
}
function stringReturnOne(){
   return '1 STRING RETURN ONE';
}
function stringReturnTwo(){
   return '2 STRING RETURN TWO';
}
function caller(param){
  if(typeof param == "function"){
    console.log('param is function');
    param();
  }else{
    console.log('param is not function');
  }
}
function myDoubleConsoleLog(first, second){
  if(typeof first == "function" && typeof second == "function"){
    console.log(first());
    console.log(second());
  }
}
function caller2(param){
  console.log('starting');
  if(typeof param == "function"){
  setTimeout(param, 10000);
  }
  console.log('ending?')
  return 'interesting';
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

runningLogger();
console.log(multiplyByTen(5));
console.log(stringReturnOne());
console.log(stringReturnTwo());

caller('test');
caller(stringReturnTwo);

myDoubleConsoleLog('test','test');
myDoubleConsoleLog(stringReturnOne,'test');
myDoubleConsoleLog('test', stringReturnTwo);
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
console.log('-------------');
console.log(caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo)));
