//1.
//function test100(a,b){
   // return((a==100 || b==100) || (a+b==100));
//}
//console.log(test100(100,100))
//console.log(test100(30,100))
//console.log(test100(30,30))
//console.log(test100(30,70))
//2.
//function string_check(str){
   // if(str===null || str===undefined || str.substring(0,3)==='New')
    //{
      // return str
   // }
   //return "New"+str;
//}
//console.log(string_check("Newbook"));
//console.log(string_check("book"));

//3.
//function front_back(str)
 //{
  //if (str.length>=3)
//{
  // str_len = 3;
  //back = str.substring(str.length-3);
   //return back + str + back;
 //}
   //else
     //return false;
 //}
//console.log(front_back("gfh"));
//console.log(front_back("gf"));
//console.log(front_back("gfhs"));

//4.
//function near_100(a, b) {
  //  if (a != b)
    //{
    //a1 = Math.abs(a- 100);
    //b1 = Math.abs(b - 100);
   //if (a1 < b1)
    //{
      //return a;
    //}
   // if (b1 < a1)
   // {
     // return b;
    //}
    //return 0;
    //}
    //else
      //return false;
  //}
  //console.log(near_100(95, 85));
  //console.log(near_100(-95, -85));
  //console.log(near_100(95, 95)); 

  //5.
 // var number=[34567866];
  //function evenDigits(num){
    //var count =0;
    //var numArr=num.toString().split("");
    //for(var i=0;i<numArr.length;i++){
      //  if(Number(numArr[i]%2==0)){
       //     count++;
        //}
     //}
     //return count;
 //}
 //console.log(eventDigits(number));