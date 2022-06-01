const comentario=[];
//const lista2=JSON.parse(localStorage.getItem("lista"))
//localStorage.setItem("lista", JSON.stringify(lista))

const getvalor=()=>{
let usuario2 = document.getElementById("email2").value 
let pass2= document.getElementById("contra2").value



console.log(JSON.parse(localStorage.getItem("lista")))

lala= localStorage.getItem("lista")


for (let index = 0; index < lala.length; index++) {
    const element = lala[index];

    if (usuario2==element.usuario && pass2==element.pass){ 
        alert("ha iniciado sesion con exito")
        window.location="index4.html"
        let flag = true 
        break;//poner una bandera para verificar que esta logeado 
    }   
    
    
    else{ 
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        break;
    }
    

}




//notificaciones 



}
const lista=[{usuario:"xml@xml.com",pass:"lavida"}];
const getData=()=>{
let usuario = document.getElementById("email").value;
let pass = document.getElementById("contra").value;
let nombreU= document.getElementById("nombre").value; 
let apellido = document.getElementById("apellido").value; 

//const lista =[];
lista.push({usuario,pass,nombreU,apellido});

localStorage.setItem("lista", JSON.stringify(lista))

alert("se han guardado tus datos")
window.location="index4.html"

//console.log(JSON.parse(localStorage.getItem("lista")))

}

const getCom=()=>{
let coment= document.getElementById("contenido").value


let mar= comentario.length
let micho =""
//micho es para imprimir los comentarios 
 

    if (flag  = true ){
        comentario.push(coment+"\n")
        localStorage.setItem("comentario",comentario)
       
    }else{
        window.location="index3.html"
        alert("por facvor inicie sesion para poder comentar");
    }

    document.getElementById("lapiz").value = localStorage.getItem("comentario");
}

const getCom2=()=>{
    let coment= document.getElementById("contenido").value
    
    
    
     
    
        if (flag  = true ){
            comentario.push(coment+"\n")
            localStorage.setItem("comentario",comentario)
           
        }else{
            window.location="index3.html"
            alert("por facvor inicie sesion para poder comentar");
        }
    
        document.getElementById("lapiz").value = localStorage.getItem("comentario");
}

const getCom3=()=>{
let coment= document.getElementById("contenido").value



 

    if (flag  = true ){
        comentario.push(coment+"\n")
        localStorage.setItem("comentario",comentario)
       
    }else{
        window.location="index3.html"
        alert("por facvor inicie sesion para poder comentar");
    }

    document.getElementById("lapiz").value = localStorage.getItem("comentario");
}

const getCom4=()=>{
    let coment= document.getElementById("contenido").value
    
    
    
     
    
        if (flag  = true ){
            comentario.push(coment+"\n")
            localStorage.setItem("comentario",comentario)
           
        }else{
            window.location="index3.html"
            alert("por facvor inicie sesion para poder comentar");
        }
    
        document.getElementById("lapiz").value = localStorage.getItem("comentario");
}