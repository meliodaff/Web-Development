function submit(){
    let pf = +document.getElementById('pf').value;
    let cc = +document.getElementById('cc').value;
    let im = +document.getElementById('im').value;

    let result = (pf + cc + im) / 3;

    document.getElementById('score').innerHTML = "Score: " + result;
}

function clear1(){
    document.getElementById('pf').value = '';
    document.getElementById('cc').value = '';
    document.getElementById('im').value = '';
    document.getElementById('score').innerHTML = "Score: 0";
}

let original = [1, 2, 3, 4];
let clone = [...original];

for(let i = clone.length - 1; i >= 0; i--){
    console.log(original[i]);
}

console.log(clone.length, original.length);