/*
    find by id 
    find by class name 
    find by tag name
    find by queryselector 
    queryselectorAll
    by name
    by element childs

    unordered list 
    form input

*/

// const a = document.getElementById('h');
// a.innerHTML='hello'


// const a = document.getElementsByClassName('box');
// for(let i=0;i<a.length;i++){
//     console.log(a[i].innerHTML="hello")
// }


// const a = document.getElementsByTagName('h2');
// console.log(a)
// a.innerHTML='hello'


// const a = document.querySelectorAll('.heading');
// console.log(a)
// a.forEach((value)=>{
//     value.innerHTML="hello"
// })


// let a = document.getElementsByName('fname');
// console.log(a)


// let a = document.querySelector('#box2');
// a.previousElementSibling.innerHTML='usama'


// let a = document.getElementsByTagName('ul')[0];
// console.log(a.children)

// for(let i=0;i<a.children.length;i++){
//     a.children[i].innerHTML='hello'
// }

// let a = document.getElementsByTagName('form')['frm']['inp'];
// console.log(a)

function validForm(){
    let a = document.getElementsByTagName('form')['frm']['inp'].value;
    if(a==""){
        alert('fill kro chup chap');
        return false;
    }else{
        console.log('correct');
    }
}