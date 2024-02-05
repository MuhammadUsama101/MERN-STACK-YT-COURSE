
let btn =document.querySelector('.btn');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
let inp = document.querySelector('.input');

// btn.addEventListener('dblclick',(e)=>{
//     console.log(e)
// })

// function clicked(){
//     console.log('you clicked on the button')
// }

// function dblclicked(){
//     console.log('double clicked')
// }


parent.addEventListener('click',e=>{
    console.log('parent');
})

child.addEventListener('click',e=>{
    console.log('child');
    e.stopPropagation()
})

document.addEventListener('click',e=>{
    console.log('document')
})


inp.addEventListener('input',(e)=>{
    console.log(e.target.value)
})