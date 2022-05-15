
/*
1. SIMPLE INTREST

console.log('simple interest calculator \n');

function simpleIntrest(p,r,t)
{
var si=(parseFloat(p)*parseFloat(r)*parseFloat(t))/100;
return si;
}
var p=window.prompt('enter principal : ')
var r=window.prompt('enter rate : ');
var t=window.prompt('enter time : ');
var res=simpleIntrest(p,r,t);
console.log('simple intrest for principtal-', p,' , rate-', r,' ,time-', t,' is = ', res);


2. SUM OF ARRAY ELEMENTS

console.log('sum of list of numbers \n');

function sumarray(...arr)
{
  for(var i=0;i<n;i++)
  {
      sum=sum+arr[i];
  } 
  return sum; 
}
var arr=[];
var n=window.prompt('enter no of elements : ');
for(var i=0;i<n;i++)
{
    arr[i]=parseInt(prompt('enter array element '+(i+1)));
}
var sum=0;
var res=sumarray(...arr);
console.log(arr);
console.log('sum of array elements : ',res);


3. PRINT TABLE

console.log('print table \n');
var no=window.prompt('enter number : ');
for(var i=1;i<=10;i++)
{
    console.log(no," * ",i," = ",no*i);
}


4. SUM OF AVERAGE OF ARRAY ELEMENTS
console.log('average of sum of array \n');
var n=window.prompt('enter no of elements');
var arr=[];
function average(...arr)
{
    var sum=0
    for(var i=0;i<n;i++)
    {
        sum=sum+arr[i];
    }
    var avg=sum/n;
    return avg;
}
for(var i=0;i<n;i++)
{
    arr[i]=parseFloat(prompt('enter array element ',i+1));
}
var res=average(...arr);
console.log(arr);
console.log('sum of array = ', res*n);
console.log('average of sum of array = ', res);


5. FIND ELEMENT IN ARRAY 

console.log('find in array \n');

function findElement(x,...arr)
{
    for(var i=0;i<n;i++)
    {
        if(arr[i]==x)
        return true;
    }
    return false;
}
var arr=[];
var n=window.prompt('enter no of elements');


for(var i=0;i<n;i++)
{
    arr[i]=prompt('enter array element '+(i+1));
}
console.log(arr);
var x=window.prompt('enter element to be searched ');
var res=findElement(x,...arr);
console.log('the searched element', x,' is ', res);



6. POSITIVE ELEMEMENT IN ARRAY
console.log('positive element in array \n\n');
var brr=[];
function findElement(...arr)
{
    var j=0;
    for(var i=0;i<n;i++)
    {
       if(arr[i]>=0)
       {
           
           brr[j]=arr[i];
           j++;
       }
    }
   return brr;
}
var arr=[];
var n=window.prompt('enter no of elements');


for(var i=0;i<n;i++)
{
    arr[i]=prompt('enter array element '+(i+1));
}
console.log('array elements : ');
console.log(arr);
console.log('array after removing negative elments : ')
var res=findElement(...arr);

console.log(res);


6. LARGEST ELEMEMENT IN ARRAY

console.log('largest element in array \n\n');
function maxElement(...arr)
{
   var max=arr[0];
    for(var i=0;i<n;i++)
    {
       if(arr[i]>max)     
          max=arr[i];
    }
return max;
 
}
var arr=[];
var n=window.prompt('enter no of elements');


for(var i=0;i<n;i++)
{
    arr[i]=prompt('enter array element '+(i+1));
}
console.log('array elements : ');
console.log(arr);
var res=maxElement(...arr);
console.log('largest element in array : ', res);

*/

console.log('Fizz Buzz Challenge \n\n');
function fizzBuzz(n)
{
    var res;
if(n%5==0 && n%3==0)
res='FIZZBUZZ';
else if(n%3==0)
res='FIZZ';
else if(n%5==0)
res='BUZZ';
else
res='NORMAL NUMBER';
return res;
}
var n=window.prompt('enter number ');
var res=fizzBuzz(n);
console.log(n,' is a ', res,' number');