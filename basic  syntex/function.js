var array=[1,2,3,4,5,'y']; // globally acessible

function fun()
{
    let max , min; // local varibles 
    max=min=array[0];
    for(let i=1; i<array.length;i++)
    {
        if(min>array[i])
        {
            min=array[i];
        }
        if(max<array[i])
        {
            max=array[i];
        }
    }
    console.log("min = ",min,"max = ",max);
    return max;
}

console.log(fun());// calling and printing the values
console.log(min);