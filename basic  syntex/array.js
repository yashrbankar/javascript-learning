let array=[1 ,2,3,4,5,"yash"];
// console.log(array[5]);

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
// pop at the end;
// push at the end;
let x=array.pop(); // return that value
array.push("ronit");

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

// from front : shifting
array.shift();
array.unshift(111);
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}



