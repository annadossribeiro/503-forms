let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let select =document.querySelector("select");




if(email === confirm){
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('email', email.value);
}
    
function cadastrar(){
    localStorage.setItem(nome)
}


// if(localStorage.email == confirm){
//     form.style.display="none";
//     section.style.display="initial";
//     texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
//     naoSou.innerHTML=`Não sou ${localStorage.email};`
// }
// else{
//     function acessar(){
//         form.style.display="initial";
//         localStorage.setItem("email", email.value);
//         if(localStorage.nome){
//             div.style.display="none";
//             section.style.display="initial";
//             texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
//             naoSou.innerHTML=`Não sou ${localStorage.email};`
//         }
//     }
// }

function limpar(){
    localStorage.removeItem('email');
}

botao.onclick = cadastrar;
naoSou.onclick = limpar;
