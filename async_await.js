console.log("hey gayu!!!!!!");

async function gayatri(){
    console.log("inside gayatri function");

    const response=await fetch('https://api.github.com/users');

    console.log('before response');

    const users=await response.json();
    console.log('users resolved');
    return users;

    // return "gayatri";
}
console.log('before calling gayatri');
let a=gayatri();

console.log('after calling gayatri');
console.log(a);
a.then(data=>console.log(data))
console.log('last line of this js file');