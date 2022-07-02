const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('ul')

menuBtn.addEventListener('click', ()=>{
    nav.classList.remove('hidden')
    closeBtn.classList.remove('hidden')
    menuBtn.classList.add('hidden')
})

closeBtn.addEventListener('click', ()=>{
    nav.classList.add('hidden')
    menuBtn.classList.remove('hidden')
    closeBtn.classList.add('hidden')
    
})


