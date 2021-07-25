const form = document.getElementById('form');
let cart = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = {
        nome,
        email,
        telefone
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('cliente', convertData);

    form.reset();

    let finalizado = document.getElementById("finalizado");

   finalizado.innerHTML = "Cadastrado com sucesso!";

})

function reloadCart(){
    cart++;
    contadorCart.innerHTML=cart;

}


const produto1 = document.getElementById('btnProduto1').addEventListener('click', (e) => {
        e.preventDefault();
        let nome = document.getElementById('product-name1').innerText;
        let de = document.getElementById('de1').innerText;
        let por = document.getElementById('por1').innerText ;
        let data = {
            nome,
            de,
            por
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem(`produto${cart}`, convertData);
    

})

const produto2 = document.getElementById('btnProduto2').addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById('product-name2').innerText;
    let de = document.getElementById('de2').innerText;
    let por = document.getElementById('por2').innerText ;
    let data = {
        nome,
        de,
        por
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem(`produto${cart}`, convertData);


})

const produto3 = document.getElementById('btnProduto3').addEventListener('click', (e) => {
    e.preventDefault();
    let nome = document.getElementById('product-name3').innerText;
    let de = document.getElementById('de3').innerText;
    let por = document.getElementById('por3').innerText ;
    let data = {
        nome,
        de,
        por
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem(`produto${cart}`, convertData);


})




