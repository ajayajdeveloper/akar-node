let str = "hi hello vanakam";
let splitstr = str.split(" ")
var newstr = ""

splitstr.forEach( a => {
    newstr += a.split("").reverse().join("") + " "
})

console.log(newstr)