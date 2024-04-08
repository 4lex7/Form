//Te envia a un enlace
const titleEvent=document.getElementById('titleEvent');
titleEvent.addEventListener('click',()=>{
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
})

//Borra todo el local store
const anclarClear= document.querySelector('.anclar-clear');

anclarClear.addEventListener('click',()=>{
    
    anclarClear= localStorage. clear()
});