//Inputs
const formRegister=document.getElementById('form-register');
const email= document.getElementById('input-email');
const UserName= document.getElementById('input-username');
const password= document.querySelector('.input-password');
const confirmPassword= document.getElementById('input-password_confirm');

//Labels
const labelPassword = document.querySelector(".label-password");
const labelConfirmPassword=document.querySelector('.label-password_confirm');
const labelEmail=document.querySelector('.label-email');
const labelUserName=document.querySelector('.label-username');

//Span
const empytEmail=document.querySelector('.empyt-email');
const empytUserName=document.querySelector('.empyt-username');
const empytPassword=document.querySelector('.empyt-password');
const empytConfirmPassword=document.querySelector('.empyt-confirm-password');
const empytCheck= document.querySelector('.empyt-check')

// Borrar, vacio, invalido , existe, validar
const remove='';
const emptyField ='Fill in the field *';
const credentialInvalid= 'Credentials do not match *';
const exists='The user already exists *';
const passwordValid= 'The password must be at least 6 characters, a capital letter and a number *';

//boton evento
const button= document.querySelector('.button')

//Check
const myCheckbox = document.getElementById('check');

//Evento con funcion publica del formulario
button.addEventListener("click",RegisterUser);

//Array de usuarios
let userRegistered = JSON.parse(localStorage.getItem("user")) || [];

//Funcion de contrasena
function validarContrasena(password) {
      if (password.value.length < 6) {
            return false;
        }
    
       
      if (!/[A-Z]/.test(password.value)) {
            return false;
        }
    

      if (!/\d/.test(password.value)) {
            return false;
        }
    
        
        return true;
  }

//ID
let id= 0;

//Funcion de registroUser con un parametro event
function RegisterUser(event){


      //nose
      event.preventDefault();
      //sumale un id por cada usuario que de submit
      id++
      //Crea un objeto user
      const user={
            Id: id,
            email: email.value,
            user:UserName.value,
            password: password.value,
            confirmPassword:confirmPassword.value 
      };
 
      //Validar si los inputs estan vacio

      if(email.value=== "" || UserName.value=== "" || password.value=== "" || confirmPassword.value=== ""){
                  const button= document.querySelector('.button');
                  button.style.removeProperty('background-color');
                  button.style. transition= '1s';


      
                  //Revisa input por input si esta vacio agrega un text contend al span si no esta vacio quitar el contenido del span
                   if(email.value=== ""){
                        empytEmail.textContent=emptyField;
                  }else{
                        empytEmail.textContent=remove;
                  }
                   if (UserName.value==="") {
                        empytUserName.textContent=emptyField;
                  }else{
                        empytUserName.textContent=remove;
                  }
                  if (password.value==="") {
                        empytPassword.textContent=emptyField;
                  }else{
                        empytPassword.textContent=remove;
                  }
                  if (confirmPassword.value==="") {
                        empytConfirmPassword.textContent=emptyField;
                  }  else{
                        empytConfirmPassword.textContent=remove;
                  }
      }
      //confirmar si las contrasenas estan iguales
      else if( password.value !== confirmPassword.value){
            //Borra los span restantes de la condicion anterior
             empytEmail.textContent=remove;
             empytUserName.textContent=remove;
            //Vuelve a evualuar si son diferentes para agregar el span
             if(password.value !== confirmPassword.value){
             empytPassword.textContent=credentialInvalid;
             empytConfirmPassword.textContent=credentialInvalid;
            }
            //Quita el span
            else{
                  empytPassword.textContent=remove;
                  empytConfirmPassword.textContent=remove;
            }
      }
      //Valida los caracteres de una password
      else if (!validarContrasena(password)) {
            //Remover span
            empytCheck.textContent=remove;
            empytEmail.textContent=remove;
            empytUserName.textContent=remove;
            empytConfirmPassword.textContent=remove;
            if (!validarContrasena(password)){
                  //Agrega un textcontent
                  empytPassword.textContent='Have to add a num, a capital letter and a min of 6 char*';
            }else{
                  //remueve
                  empytPassword.textContent=remove;
        }
      }
      //confirmar si el usuario ya existe
      else if( userRegistered.find(user=>user.user===UserName.value)){
            // Borrando contenido del span
            empytCheck.textContent=remove;
            empytEmail.textContent=remove;
            empytUserName.textContent=remove;
            empytPassword.textContent=remove;
            empytConfirmPassword.textContent=remove;

            if( userRegistered.find(user=>user.user===UserName.value)){
                  
                  empytUserName.textContent=exists;
            }else{
                  empytUserName.textContent=remove;
            }
      }
      // Verificar si el checkbox esta marcado
      else if (!myCheckbox.checked) {
      empytEmail.textContent=remove;
      empytUserName.textContent=remove;
      empytPassword.textContent=remove;
      empytConfirmPassword.textContent=remove;

      if(!myCheckbox.checked){
            empytCheck.textContent= '* Accept the terms and conditions *';
      }else{
            empytCheck.textContent=remove;
      }
        
      }
      //Usuario registrado con extio
      else{
            
            // Borrando contenido del span
            empytEmail.textContent=remove;
            empytUserName.textContent=remove;
            empytPassword.textContent=remove;
            empytConfirmPassword.textContent=remove;
            empytCheck.textContent=remove;
                        
            //Cambia color de boton
            const button= document.querySelector('.button')
            button.style.background ='blue';
            button.style. transition= '0.5';
            
            //Empuja el nuevo usuario al array
            userRegistered.push(user);
            localStorage.setItem("user",JSON.stringify(userRegistered));
            //Deja los inputs vacios
            email.value= ""
            UserName.value= "" 
            password.value= "" 
            confirmPassword.value= ""
            //Pagina siguiente
            setTimeout(()=>{window.location.href= 'login.html';},2000);


      }
}


     







