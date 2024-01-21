/*

    innerHTML
    innerText
    textcontent


    1 - create 
    2 - setAttribute
    ------
    append
    prepend
    before
    after
    ------
    3 - remove
*/

// let heading=document.querySelector('.heading');
// console.log(heading.textContent)


// let meraDiv= document.createElement('div');
// meraDiv.setAttribute('class','mera');
// document.body.append(meraDiv)
// let miniDiv = document.createElement('div');
// meraDiv.innerHTML=`<h1>Hello i am usama how are you </h1>`
// miniDiv.setAttribute('class','mini');
// meraDiv.append(miniDiv)

// miniDiv.addEventListener('click',()=>{
//     meraDiv.remove();
// })

let mera=document.querySelector('.mera');

let three=document.createElement('div');
three.setAttribute('class','three');
mera.after(three)
three.innerText="three"

