//Inputs
const userName= document.querySelector('.input-username');
const password= document.querySelector('.input-password');

//Formulario
const formLogin= document.querySelector('.form');

//span
const empytUserName=document.querySelector('.empyt-username');
const empytPassword=document.querySelector('.empyt-password');

//Remplazos
const emptyField ='Fill in the field *';
const removeSpanContent='';
const invalid='User or password Incorrect*'

//boton evento
const button= document.querySelector('.button')

//Evento
button.addEventListener('click',LoginUser);
//Funcion
function LoginUser(event){
    //nose
    event.preventDefault();
    //Agarrar el objeto user
    const getLocal=localStorage.getItem("user");

    //validacion
    const validateUser=JSON.parse(getLocal);
        //ver si los campos estan vacios
        if (userName.value==="" || password.value==="") {

            //Volver al boton a su estado original
            const button= document.querySelector('.button');
            button.style.removeProperty('background-color');
            button.style. transition= '1s';
            if (userName.value==="") {
               empytUserName.textContent=emptyField;
            }else{
               empytUserName.textContent=removeSpanContent;
            }

            if (password.value==="") {
                empytPassword.textContent=emptyField;
            }else{
                empytPassword.textContent=removeSpanContent;
            }
        }
        else if(!validateUser.find(user=>user.user=== userName.value)){
            empytPassword.textContent=removeSpanContent;
           empytUserName.textContent=removeSpanContent;

             if (!validateUser.find(user=>user.user=== userName.value)) {
               empytUserName.textContent='Username does not exist';
            }else{
               empytUserName.textContent=removeSpanContent;
            }
        }

        //si el usuario existe
        else if(!validateUser.find(user=>user.user=== userName.value)){
            empytPassword.textContent=removeSpanContent;
           empytUserName.textContent=removeSpanContent;

             if (!validateUser.find(user=>user.user=== userName.value)) {
               empytUserName.textContent='Username does not exist';
            }else{
               empytUserName.textContent=removeSpanContent;
            }
        }
        //valida contrasena
        else if(validateUser.find(user=>user.user===userName.value).password !== password.value){
            empytPassword.textContent=removeSpanContent;
           empytUserName.textContent=removeSpanContent;
        //la password coincide?
        if (validateUser.find(user=>user.user===userName.value).password !== password.value) {
            empytPassword.textContent='Password does not match';
        }else{
            empytPassword.textContent=removeSpanContent;
        }

        }
        //redirecciona
        else{
           empytUserName.textContent=removeSpanContent;
            empytPassword.textContent=removeSpanContent;
            const button= document.querySelector('.button')
            button.style.background ='blue';
            button.style. transition= '0.5';
            setTimeout(()=>{window.location.href= 'index.html';},2000);
        }
}


    