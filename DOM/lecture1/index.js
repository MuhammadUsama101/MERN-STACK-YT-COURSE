
// selection
const value = document.querySelector('h1');
// changing
value.innerHTML='Muhammad Usama Arshad'
// adding colors 
value.style.backgroundColor='green'

let a=1;

value.addEventListener('click',()=>{
    if(a==1){
        value.innerHTML='hello';
        value.style.color='white';
        value.style.backgroundColor='red'
        console.log('hello')
        a=0;
    }
    else{
        value.style.color='black';
        value.style.backgroundColor='green'
        a=1;
    }
})