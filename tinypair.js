var a = [1, 2, 3]
var b = [1, 2, 3]
var c = []
var d = []
var final =[]
let value = 31;
let count =0;
for (var i = 0; i <= a.length - 1; i++) 
{
   c.push(a[i])
}
for (var j = b.length - 1; j >= 0; j--)
{
   d.push(b[j])
}
var arr1 = JSON.stringify(c)
var arr2 = JSON.stringify(d)

var newstr1 = arr1.split(",").join("") 
var newstr2 = arr2.split(",").join("") 

for (var k = 1 ; k < newstr1.length-1 ; k++)
{
  final.push(newstr1[k]+newstr2[k])
}

let ans = final.map( item => parseInt(item))

for( let m = 0 ; m < ans.length ; m++)
{
    if(ans[m] < value )
    {
        count++;
    }
}

console.log("The number of tiny pairs are "+count)
