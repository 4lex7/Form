const facebook= document.querySelector('.facebook');
const google=document.querySelector('.google');
const register= document.querySelector('.register');
// Redireccionamiento de paginas

export const redirect = () => {}

facebook.addEventListener('click',()=>{
    window.location.href= 'https://www.facebook.com/?locale=es_ES';
})
google.addEventListener('click',()=>{
    window.location.href= 'https://www.google.com/intl/es/account/about/';
})
