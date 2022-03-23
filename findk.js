let array = [3, 5, 2, -4, 8, 11].reverse()
let arr = array
let arr2= []
let k = 7;

for( let i =0; i< arr.length-1 ; i++)
{      
    for( let j = i+1; j< arr.length ; j++)
    {
        if(arr[i] + arr[j] == k )
        {
            arr2.push(arr[i],arr[j])
            
           
        }
    }
}
let arr3 =[]
while (arr2.length) {
    arr3.push(arr2.splice(0,2));
  }

console.log(arr3)