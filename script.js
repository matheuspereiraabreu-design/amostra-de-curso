/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [

  /* =========================
     MERCADO
  ========================== */

  {id:1,nome:"Maçã",cat:"Frutas",grupo:"Mercado",preco:7.99,emoji:"🍎"},
  {id:2,nome:"Maçã Verde",cat:"Frutas",grupo:"Mercado",preco:8.49,emoji:"🍏"},
  {id:3,nome:"Laranja",cat:"Frutas",grupo:"Mercado",preco:6.99,emoji:"🍊"},
  {id:4,nome:"Tangerina",cat:"Frutas",grupo:"Mercado",preco:7.49,emoji:"🍊"},
  {id:5,nome:"Melancia",cat:"Frutas",grupo:"Mercado",preco:12.90,emoji:"🍉"},
  {id:6,nome:"Abacaxi",cat:"Frutas",grupo:"Mercado",preco:8.50,emoji:"🍍"},
  {id:73,nome:"Banana",cat:"Frutas",grupo:"Mercado",preco:5.49,emoji:"🍌"},
  {id:74,nome:"Banana Prata",cat:"Frutas",grupo:"Mercado",preco:6.49,emoji:"🍌"},
  {id:75,nome:"Uva",cat:"Frutas",grupo:"Mercado",preco:9.90,emoji:"🍇"},
  {id:76,nome:"Morango",cat:"Frutas",grupo:"Mercado",preco:11.90,emoji:"🍓"},
  {id:77,nome:"Mamão",cat:"Frutas",grupo:"Mercado",preco:9.90,emoji:"🍈"},
  {id:78,nome:"Manga",cat:"Frutas",grupo:"Mercado",preco:8.90,emoji:"🥭"},

  {id:7,nome:"Alface",cat:"Verduras",grupo:"Mercado",preco:3.99,precoOferta:2.99,emoji:"🥬"},
  {id:8,nome:"Tomate",cat:"Verduras",grupo:"Mercado",preco:6.49,emoji:"🍅"},
  {id:9,nome:"Cenoura",cat:"Verduras",grupo:"Mercado",preco:4.79,precoOferta:3.49,emoji:"🥕"},
  {id:10,nome:"Batata",cat:"Verduras",grupo:"Mercado",preco:5.99,emoji:"🥔"},
  {id:79,nome:"Cebola",cat:"Verduras",grupo:"Mercado",preco:5.49,emoji:"🧅"},
  {id:80,nome:"Pepino",cat:"Verduras",grupo:"Mercado",preco:4.99,precoOferta:3.49,emoji:"🥒"},
  {id:81,nome:"Pimentão",cat:"Verduras",grupo:"Mercado",preco:7.90,emoji:"🫑"},
  {id:82,nome:"Berinjela",cat:"Verduras",grupo:"Mercado",preco:7.49,emoji:"🍆"},
  {id:83,nome:"Brócolis",cat:"Verduras",grupo:"Mercado",preco:8.90,emoji:"🥦"},
  {id:84,nome:"Couve-flor",cat:"Verduras",grupo:"Mercado",preco:9.90,emoji:"🥦"},
  {id:85,nome:"Milho",cat:"Verduras",grupo:"Mercado",preco:6.49,emoji:"🌽"},
  {id:86,nome:"Beterraba",cat:"Verduras",grupo:"Mercado",preco:5.90,emoji:"🫜"},

  {id:11,nome:"Carne bovina",cat:"Carnes",grupo:"Mercado",preco:39.90,precoOferta:34.90,emoji:"🥩"},
  {id:12,nome:"Carne suína",cat:"Carnes",grupo:"Mercado",preco:24.90,emoji:"🥩"},
  {id:13,nome:"Frango",cat:"Carnes",grupo:"Mercado",preco:14.90,emoji:"🍗"},
  {id:14,nome:"Peito de frango",cat:"Carnes",grupo:"Mercado",preco:18.90,emoji:"🍗"},
  {id:15,nome:"Peixe",cat:"Carnes",grupo:"Mercado",preco:29.90,emoji:"🐟"},
  {id:16,nome:"Salmão",cat:"Carnes",grupo:"Mercado",preco:49.90,emoji:"🐟"},
  {id:17,nome:"Lula",cat:"Carnes",grupo:"Mercado",preco:34.90,emoji:"🦑"},
  {id:18,nome:"Camarão",cat:"Carnes",grupo:"Mercado",preco:59.90,emoji:"🦐"},

  {id:19,nome:"Leite",cat:"Bebidas",grupo:"Mercado",preco:5.49,emoji:"🥛"},
  {id:20,nome:"Leite achocolatado",cat:"Bebidas",grupo:"Mercado",preco:6.99,emoji:"🥛"},
  {id:21,nome:"Refrigerante",cat:"Bebidas",grupo:"Mercado",preco:7.99,emoji:"🥤"},
  {id:22,nome:"Guaraná",cat:"Bebidas",grupo:"Mercado",preco:7.49,emoji:"🥤"},
  {id:23,nome:"Chá gelado",cat:"Bebidas",grupo:"Mercado",preco:6.49,emoji:"🧋"},
  {id:24,nome:"Suco de laranja",cat:"Bebidas",grupo:"Mercado",preco:8.49,emoji:"🧃"},
  {id:25,nome:"Suco de uva",cat:"Bebidas",grupo:"Mercado",preco:8.99,emoji:"🧃"},
  {id:26,nome:"Água mineral",cat:"Bebidas",grupo:"Mercado",preco:2.49,emoji:"💧"},
  {id:27,nome:"Água com gás",cat:"Bebidas",grupo:"Mercado",preco:3.49,emoji:"💧"},
  {id:28,nome:"Café",cat:"Bebidas",grupo:"Mercado",preco:12.90,emoji:"☕"},
  {id:29,nome:"Vinho",cat:"Bebidas",grupo:"Mercado",preco:29.90,emoji:"🍾"},

  {id:30,nome:"Detergente",cat:"Limpeza",grupo:"Mercado",preco:2.99,precoOferta:1.99,emoji:"🧴"},
  {id:31,nome:"Sabão em pó",cat:"Limpeza",grupo:"Mercado",preco:12.90,emoji:"🫧"},
  {id:32,nome:"Vassoura",cat:"Limpeza",grupo:"Mercado",preco:18.90,emoji:"🧹"},
  {id:33,nome:"Esponja",cat:"Limpeza",grupo:"Mercado",preco:16.50,emoji:"🧽"},
  {id:34,nome:"Desentupidor",cat:"Limpeza",grupo:"Mercado",preco:9.90,emoji:"🪠"},
  {id:35,nome:"Balde",cat:"Limpeza",grupo:"Mercado",preco:14.90,emoji:"🪣"},

  {id:36,nome:"Papel higiênico",cat:"Banheiro",grupo:"Mercado",preco:15.90,emoji:"🧻"},
  {id:37,nome:"Shampoo",cat:"Banheiro",grupo:"Mercado",preco:13.99,emoji:"🧴"},
  {id:38,nome:"Sabonete",cat:"Banheiro",grupo:"Mercado",preco:3.49,precoOferta:2.49,emoji:"🧼"},
  {id:39,nome:"Condicionador",cat:"Banheiro",grupo:"Mercado",preco:14.99,emoji:"🚿"},
  {id:40,nome:"Creme dental",cat:"Banheiro",grupo:"Mercado",preco:6.99,emoji:"🪥"},
  {id:41,nome:"Banheira para bebê",cat:"Banheiro",grupo:"Mercado",preco:89.90,emoji:"🛁"},
  {id:42,nome:"Toalha de bebê",cat:"Banheiro",grupo:"Mercado",preco:29.90,imagem:"toalhadebebe.png"},
  {id:43,nome:"Shampoo para bebê",cat:"Banheiro",grupo:"Mercado",preco:16.90,emoji:"🧴"},
  {id:44,nome:"Sabonete para bebê",cat:"Banheiro",grupo:"Mercado",preco:5.90,emoji:"🧼"},

  {id:45,nome:"Pão francês",cat:"Padaria",grupo:"Mercado",preco:1.20,emoji:"🥖"},
  {id:46,nome:"Bolo de chocolate",cat:"Padaria",grupo:"Mercado",preco:24.90,emoji:"🍰"},
  {id:47,nome:"Croissant",cat:"Padaria",grupo:"Mercado",preco:7.50,emoji:"🥐"},
  {id:48,nome:"Biscoito",cat:"Padaria",grupo:"Mercado",preco:4.49,precoOferta:3.49,emoji:"🍪"},
  {id:49,nome:"Cookie",cat:"Padaria",grupo:"Mercado",preco:5.49,emoji:"🍪"},
  {id:50,nome:"Panqueca",cat:"Padaria",grupo:"Mercado",preco:9.90,emoji:"🥞"},
  {id:51,nome:"Pretzel",cat:"Padaria",grupo:"Mercado",preco:7.90,emoji:"🥨"},
  {id:52,nome:"Hambúrguer",cat:"Padaria",grupo:"Mercado",preco:12.90,emoji:"🍔"},
  {id:53,nome:"Batata frita",cat:"Padaria",grupo:"Mercado",preco:9.90,emoji:"🍟"},
  {id:54,nome:"Rosquinha",cat:"Padaria",grupo:"Mercado",preco:6.90,emoji:"🍩"},
  {id:55,nome:"Pudim",cat:"Padaria",grupo:"Mercado",preco:8.90,emoji:"🍮"},
  {id:56,nome:"Bolo tradicional",cat:"Padaria",grupo:"Mercado",preco:14.90,emoji:"🥮"},

  {id:57,nome:"Arroz 5kg",cat:"Mercearia",grupo:"Mercado",preco:28.90,emoji:"🍚"},
  {id:58,nome:"Feijão 1kg",cat:"Mercearia",grupo:"Mercado",preco:8.90,emoji:"🫘"},
  {id:59,nome:"Macarrão",cat:"Mercearia",grupo:"Mercado",preco:4.99,precoOferta:3.99,emoji:"🍝"},
  {id:60,nome:"Ovos",cat:"Mercearia",grupo:"Mercado",preco:12.90,emoji:"🥚"},
  {id:61,nome:"Mel",cat:"Mercearia",grupo:"Mercado",preco:18.90,emoji:"🍯"},
  {id:62,nome:"Queijo",cat:"Mercearia",grupo:"Mercado",preco:15.90,emoji:"🧀"},
  {id:63,nome:"Chocolate",cat:"Mercearia",grupo:"Mercado",preco:7.90,emoji:"🍫"},
  {id:64,nome:"Sal",cat:"Mercearia",grupo:"Mercado",preco:3.49,precoOferta:2.49,emoji:"🧂"},
  {id:65,nome:"Manteiga",cat:"Mercearia",grupo:"Mercado",preco:9.90,emoji:"🧈"},
  {id:66,nome:"Pipoca",cat:"Mercearia",grupo:"Mercado",preco:5.49,emoji:"🍿"},

  {id:67,nome:"Ração para cachorro",cat:"Pet",grupo:"Mercado",preco:69.90,emoji:"🐶"},
  {id:68,nome:"Ração para gato",cat:"Pet",grupo:"Mercado",preco:49.90,emoji:"🐱"},
  {id:69,nome:"Ração para coelho",cat:"Pet",grupo:"Mercado",preco:29.90,emoji:"🐰"},
  {id:70,nome:"Ração para pássaros",cat:"Pet",grupo:"Mercado",preco:18.90,emoji:"🐦"},
  {id:71,nome:"Ração para peixes",cat:"Pet",grupo:"Mercado",preco:24.90,emoji:"🐠"},
  {id:72,nome:"Aquário pequeno",cat:"Pet",grupo:"Mercado",preco:79.90,emoji:"🐟"},


 /* =========================
   ESPORTES
========================= */

{id:101,nome:"Bola de futebol",cat:"Futebol",grupo:"Esportes",preco:79.90,precoOferta:59.90,emoji:"⚽"},
{id:102,nome:"Bola de basquete",cat:"Basquete",grupo:"Esportes",preco:89.90,precoOferta:69.90,emoji:"🏀"},
{id:103,nome:"Bola de vôlei",cat:"Vôlei",grupo:"Esportes",preco:69.90,precoOferta:49.90,emoji:"🏐"},
{id:104,nome:"Raquete de tênis",cat:"Tênis",grupo:"Esportes",preco:129.90,precoOferta:99.90,emoji:"🎾"},
{id:105,nome:"Chuteira",cat:"Futebol",grupo:"Esportes",preco:199.90,precoOferta:159.90,emoji:"👟"},
{id:106,nome:"Luva de goleiro",cat:"Futebol",grupo:"Esportes",preco:99.90,precoOferta:79.90,emoji:"🧤"},
{id:107,nome:"Corda de pular",cat:"Fitness",grupo:"Esportes",preco:29.90,precoOferta:22.90,emoji:"🪢"},
{id:108,nome:"Colchonete",cat:"Fitness",grupo:"Esportes",preco:59.90,precoOferta:44.90,emoji:"🧘"},
{id:109,nome:"Garrafa esportiva",cat:"Fitness",grupo:"Esportes",preco:34.90,precoOferta:27.90,emoji:"🥤"},
{id:110,nome:"Skate",cat:"Skate",grupo:"Esportes",preco:249.90,precoOferta:199.90,emoji:"🛹"},

{id:111,nome:"Camisa de futebol",cat:"Futebol",grupo:"Esportes",preco:119.90,emoji:"👕"},
{id:112,nome:"Short esportivo",cat:"Fitness",grupo:"Esportes",preco:69.90,emoji:"🩳"},
{id:113,nome:"Meia esportiva",cat:"Fitness",grupo:"Esportes",preco:24.90,emoji:"🧦"},
{id:114,nome:"Bomba para bola",cat:"Futebol",grupo:"Esportes",preco:29.90,emoji:"⚽"},
{id:115,nome:"Rede de futebol",cat:"Futebol",grupo:"Esportes",preco:149.90,emoji:"🥅"},
{id:116,nome:"Rede de vôlei",cat:"Vôlei",grupo:"Esportes",preco:119.90,emoji:"🏐"},
{id:117,nome:"Óculos de natação",cat:"Natação",grupo:"Esportes",preco:59.90,emoji:"🥽"},
{id:118,nome:"Touca de natação",cat:"Natação",grupo:"Esportes",preco:29.90,emoji:"🏊"},
{id:119,nome:"Prancha de skate",cat:"Skate",grupo:"Esportes",preco:229.90,emoji:"🛹"},
{id:120,nome:"Capacete esportivo",cat:"Acessórios",grupo:"Esportes",preco:89.90,emoji:"⛑️"},
{id:121,nome:"Luvas de academia",cat:"Fitness",grupo:"Esportes",preco:49.90,emoji:"🥊"},
{id:122,nome:"Saco de pancadas",cat:"Fitness",grupo:"Esportes",preco:299.90,emoji:"🥊"},
{id:123,nome:"Halter 5kg",cat:"Fitness",grupo:"Esportes",preco:79.90,emoji:"🏋️"},
{id:124,nome:"Tapete de yoga",cat:"Fitness",grupo:"Esportes",preco:69.90,emoji:"🧘"},


  /* =========================
   ROUPAS
========================= */

{id:201,nome:"Camiseta",cat:"Camisetas",grupo:"Roupas",preco:49.90,precoOferta:39.90,emoji:"👕"},
{id:202,nome:"Calça jeans",cat:"Calças",grupo:"Roupas",preco:119.90,precoOferta:89.90,emoji:"👖"},
{id:203,nome:"Moletom",cat:"Blusas",grupo:"Roupas",preco:99.90,precoOferta:74.90,emoji:"🧥"},
{id:204,nome:"Boné",cat:"Acessórios",grupo:"Roupas",preco:39.90,precoOferta:29.90,emoji:"🧢"},
{id:205,nome:"Tênis casual",cat:"Calçados",grupo:"Roupas",preco:149.90,precoOferta:119.90,emoji:"👟"},
{id:206,nome:"Meias",cat:"Acessórios",grupo:"Roupas",preco:19.90,precoOferta:14.90,emoji:"🧦"},
{id:207,nome:"Mochila",cat:"Acessórios",grupo:"Roupas",preco:89.90,precoOferta:69.90,emoji:"🎒"},

{id:208,nome:"Camiseta polo",cat:"Camisetas",grupo:"Roupas",preco:69.90,emoji:"👕"},
{id:209,nome:"Camiseta estampada",cat:"Camisetas",grupo:"Roupas",preco:59.90,emoji:"👕"},
{id:210,nome:"Regata",cat:"Camisetas",grupo:"Roupas",preco:39.90,emoji:"👕"},
{id:211,nome:"Bermuda",cat:"Calças",grupo:"Roupas",preco:69.90,emoji:"🩳"},
{id:212,nome:"Calça moletom",cat:"Calças",grupo:"Roupas",preco:89.90,emoji:"👖"},
{id:213,nome:"Jaqueta",cat:"Blusas",grupo:"Roupas",preco:159.90,emoji:"🧥"},
{id:214,nome:"Casaco",cat:"Blusas",grupo:"Roupas",preco:139.90,emoji:"🧥"},
{id:215,nome:"Sandália",cat:"Calçados",grupo:"Roupas",preco:79.90,emoji:"🩴"},
{id:216,nome:"Tênis esportivo",cat:"Calçados",grupo:"Roupas",preco:189.90,emoji:"👟"},
{id:217,nome:"Chinelo",cat:"Calçados",grupo:"Roupas",preco:29.90,emoji:"🩴"},
{id:218,nome:"Óculos de sol",cat:"Acessórios",grupo:"Roupas",preco:59.90,emoji:"🕶️"},
{id:219,nome:"Relógio",cat:"Acessórios",grupo:"Roupas",preco:99.90,emoji:"⌚"},
{id:220,nome:"Carteira",cat:"Acessórios",grupo:"Roupas",preco:49.90,emoji:"👛"},
{id:221,nome:"Bolsa",cat:"Acessórios",grupo:"Roupas",preco:109.90,emoji:"👜"},
{id:222,nome:"Boné esportivo",cat:"Acessórios",grupo:"Roupas",preco:44.90,emoji:"🧢"},


  /* =========================
   ELETRÔNICOS
========================= */

{id:301,nome:"Fone Bluetooth",cat:"Áudio",grupo:"Eletrônicos",preco:89.90,precoOferta:69.90,emoji:"🎧"},
{id:302,nome:"Caixa de som",cat:"Áudio",grupo:"Eletrônicos",preco:149.90,precoOferta:119.90,emoji:"🔊"},
{id:303,nome:"Mouse",cat:"Computadores",grupo:"Eletrônicos",preco:59.90,precoOferta:44.90,emoji:"🖱️"},
{id:304,nome:"Teclado",cat:"Computadores",grupo:"Eletrônicos",preco:99.90,precoOferta:79.90,emoji:"⌨️"},
{id:305,nome:"Smartphone",cat:"Celulares",grupo:"Eletrônicos",preco:999.90,precoOferta:899.90,emoji:"📱"},
{id:306,nome:"Carregador",cat:"Acessórios",grupo:"Eletrônicos",preco:39.90,precoOferta:29.90,emoji:"🔌"},
{id:307,nome:"Smartwatch",cat:"Wearables",grupo:"Eletrônicos",preco:199.90,precoOferta:159.90,emoji:"⌚"},
{id:308,nome:"Webcam",cat:"Computadores",grupo:"Eletrônicos",preco:129.90,precoOferta:99.90,emoji:"📷"},

{id:309,nome:"Monitor",cat:"Computadores",grupo:"Eletrônicos",preco:699.90,emoji:"🖥️"},
{id:310,nome:"Notebook",cat:"Computadores",grupo:"Eletrônicos",preco:2499.90,emoji:"💻"},
{id:311,nome:"Tablet",cat:"Celulares",grupo:"Eletrônicos",preco:899.90,emoji:"📱"},
{id:312,nome:"Celular",cat:"Celulares",grupo:"Eletrônicos",preco:1299.90,emoji:"📱"},
{id:313,nome:"Power bank",cat:"Acessórios",grupo:"Eletrônicos",preco:79.90,emoji:"🔋"},
{id:314,nome:"Cabo USB",cat:"Acessórios",grupo:"Eletrônicos",preco:24.90,emoji:"🔌"},
{id:315,nome:"Carregador sem fio",cat:"Acessórios",grupo:"Eletrônicos",preco:99.90,emoji:"📱"},
{id:316,nome:"Teclado gamer",cat:"Computadores",grupo:"Eletrônicos",preco:179.90,emoji:"⌨️"},
{id:317,nome:"Mouse gamer",cat:"Computadores",grupo:"Eletrônicos",preco:129.90,emoji:"🖱️"},
{id:318,nome:"Headset gamer",cat:"Áudio",grupo:"Eletrônicos",preco:199.90,emoji:"🎧"},
{id:319,nome:"Microfone",cat:"Áudio",grupo:"Eletrônicos",preco:149.90,emoji:"🎙️"},
{id:320,nome:"Projetor",cat:"Áudio",grupo:"Eletrônicos",preco:599.90,emoji:"📽️"},
{id:321,nome:"TV Smart",cat:"TV",grupo:"Eletrônicos",preco:1899.90,emoji:"📺"},
{id:322,nome:"Controle remoto",cat:"TV",grupo:"Eletrônicos",preco:49.90,emoji:"🎮"},
{id:323,nome:"Console de videogame",cat:"Games",grupo:"Eletrônicos",preco:2499.90,emoji:"🎮"},
{id:324,nome:"Controle gamer",cat:"Games",grupo:"Eletrônicos",preco:249.90,emoji:"🎮"},

 /* =========================
   CASA
========================= */

{id:401,nome:"Panela",cat:"Cozinha",grupo:"Casa",preco:79.90,precoOferta:59.90,emoji:"🍳"},
{id:402,nome:"Jogo de pratos",cat:"Cozinha",grupo:"Casa",preco:89.90,precoOferta:69.90,emoji:"🍽️"},
{id:403,nome:"Copo",cat:"Cozinha",grupo:"Casa",preco:19.90,precoOferta:14.90,emoji:"🥛"},
{id:404,nome:"Almofada",cat:"Decoração",grupo:"Casa",preco:39.90,precoOferta:29.90,emoji:"🛋️"},
{id:405,nome:"Luminária",cat:"Decoração",grupo:"Casa",preco:69.90,precoOferta:49.90,emoji:"💡"},
{id:406,nome:"Tapete",cat:"Decoração",grupo:"Casa",preco:99.90,precoOferta:79.90,emoji:"🧶"},
{id:407,nome:"Organizador",cat:"Organização",grupo:"Casa",preco:29.90,precoOferta:19.90,emoji:"📦"},

{id:408,nome:"Frigideira",cat:"Cozinha",grupo:"Casa",preco:69.90,emoji:"🍳"},
{id:409,nome:"Liquidificador",cat:"Eletrodomésticos",grupo:"Casa",preco:149.90,emoji:"🥤"},
{id:410,nome:"Air Fryer",cat:"Eletrodomésticos",grupo:"Casa",preco:399.90,emoji:"🍟"},
{id:411,nome:"Cafeteira",cat:"Eletrodomésticos",grupo:"Casa",preco:199.90,emoji:"☕"},
{id:412,nome:"Sanduicheira",cat:"Eletrodomésticos",grupo:"Casa",preco:99.90,emoji:"🥪"},
{id:413,nome:"Aspirador de pó",cat:"Limpeza",grupo:"Casa",preco:249.90,emoji:"🧹"},
{id:414,nome:"Vassoura",cat:"Limpeza",grupo:"Casa",preco:29.90,emoji:"🧹"},
{id:415,nome:"Rodo",cat:"Limpeza",grupo:"Casa",preco:24.90,emoji:"🧹"},
{id:416,nome:"Cortina",cat:"Decoração",grupo:"Casa",preco:89.90,emoji:"🪟"},
{id:417,nome:"Quadro decorativo",cat:"Decoração",grupo:"Casa",preco:59.90,emoji:"🖼️"},
{id:418,nome:"Vaso de planta",cat:"Decoração",grupo:"Casa",preco:44.90,emoji:"🪴"},
{id:419,nome:"Espelho",cat:"Decoração",grupo:"Casa",preco:119.90,emoji:"🪞"},
{id:420,nome:"Caixa organizadora",cat:"Organização",grupo:"Casa",preco:39.90,emoji:"📦"},
{id:421,nome:"Cabide",cat:"Organização",grupo:"Casa",preco:19.90,emoji:"👔"},
{id:422,nome:"Prateleira",cat:"Organização",grupo:"Casa",preco:129.90,emoji:"🗄️"},

];


/* =====================================================
   CARRINHO
===================================================== */

let carrinho =
  JSON.parse(
    localStorage.getItem("carrinhoMercado") || "[]"
  );


/* =====================================================
   FAVORITOS
===================================================== */

let favoritos =
  JSON.parse(
    localStorage.getItem("favoritosMercado") || "[]"
  );


function salvarFavoritos(){

  localStorage.setItem(
    "favoritosMercado",
    JSON.stringify(favoritos)
  );

  atualizarContadorFavoritos();
}


function atualizarContadorFavoritos(){

  const contador =
    document.getElementById("contadorFavoritos");

  if(contador){
    contador.textContent =
      favoritos.length;
  }
}


function alternarFavorito(id){

  if(favoritos.includes(id)){

    favoritos =
      favoritos.filter(
        f => f !== id
      );

    toast(
      "Produto removido dos favoritos 🤍"
    );

  }else{

    favoritos.push(id);

    toast(
      "Produto adicionado aos favoritos ❤️"
    );
  }

  salvarFavoritos();

  mostrarProdutosAtual();
}


function mostrarFavoritos(){

  const lista =
    produtos.filter(
      p => favoritos.includes(p.id)
    );

  document.getElementById("titulo")
    .textContent =
    "❤️ Meus favoritos";

  mostrar(lista);

  mudarFundo("Favoritos");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* =====================================================
   PRODUTOS
===================================================== */

let listaAtual = produtos;


function moeda(valor){

  return valor.toLocaleString(
    "pt-BR",
    {
      style:"currency",
      currency:"BRL"
    }
  );
}


function mostrar(lista = produtos){

  listaAtual = lista;

  const area =
    document.getElementById("produtos");


  if(!lista.length){

    area.innerHTML = `
      <div class="empty-favorites glass">

        <div>🔍</div>

        <h3>
          Nenhum produto encontrado
        </h3>

        <p>
          Tente outra categoria ou pesquisa.
        </p>

      </div>
    `;

    document.getElementById("quantidade")
      .textContent =
      "0 produtos encontrados";

    return;
  }


  area.innerHTML =
    lista.map(p => `

      <article class="card">

        ${
          p.precoOferta
          ? `<span class="badge">
               🏷️ OFERTA
             </span>`
          : ""
        }


        <button
          class="favorite-btn ${
            favoritos.includes(p.id)
              ? "active"
              : ""
          }"
          onclick="alternarFavorito(${p.id})">

          ${
            favoritos.includes(p.id)
              ? "❤️"
              : "🤍"
          }

        </button>


        <div class="product-img">

          ${
            p.imagem
            ? `<img
                 src="${p.imagem}"
                 alt="${p.nome}">
               `
            : p.emoji
          }

        </div>


        <div class="category">
          ${p.cat}
        </div>


        <h3>
          ${p.nome}
        </h3>


        <div class="price">

          ${
            p.precoOferta

            ? `
              <span class="preco-antigo">
                ${moeda(p.preco)}
              </span>

              <span class="preco-oferta">
                ${moeda(p.precoOferta)}
              </span>
            `

            : moeda(p.preco)
          }

        </div>


        <button
          class="add"
          onclick="adicionar(${p.id})">

          Adicionar ao carrinho

        </button>

      </article>

    `).join("");


  document.getElementById("quantidade")
    .textContent =
    `${lista.length} produtos encontrados`;
}


function mostrarProdutosAtual(){

  mostrar(listaAtual);
}


/* =====================================================
   ABAS PRINCIPAIS
===================================================== */

let abaAtual = "Mercado";


const subcategorias = {

  Mercado: [
    ["Todos","🛒 Todos"],
    ["Ofertas","🔥 Ofertas"],
    ["Frutas","🍎 Frutas"],
    ["Verduras","🥬 Verduras"],
    ["Carnes","🥩 Carnes"],
    ["Bebidas","🥤 Bebidas"],
    ["Limpeza","🧹 Limpeza"],
    ["Banheiro","🚿 Banheiro"],
    ["Padaria","🥖 Padaria"],
    ["Mercearia","🛍️ Mercearia"],
    ["Pet","🐶 Pet"]
  ],

  Esportes: [
    ["Todos","⚽ Todos"],
    ["Ofertas","🔥 Ofertas"],
    ["Futebol","⚽ Futebol"],
    ["Basquete","🏀 Basquete"],
    ["Vôlei","🏐 Vôlei"],
    ["Tênis","🎾 Tênis"],
    ["Fitness","🏋️ Fitness"],
    ["Skate","🛹 Skate"]
  ],

  Roupas: [
    ["Todos","👕 Todas"],
    ["Ofertas","🔥 Ofertas"],
    ["Camisetas","👕 Camisetas"],
    ["Calças","👖 Calças"],
    ["Blusas","🧥 Blusas"],
    ["Calçados","👟 Calçados"],
    ["Acessórios","🧢 Acessórios"]
  ],

  Eletrônicos: [
    ["Todos","📱 Todos"],
    ["Ofertas","🔥 Ofertas"],
    ["Áudio","🎧 Áudio"],
    ["Computadores","💻 Computadores"],
    ["Celulares","📱 Celulares"],
    ["Acessórios","🔌 Acessórios"],
    ["Wearables","⌚ Wearables"]
  ],

  Casa: [
    ["Todos","🏠 Todos"],
    ["Ofertas","🔥 Ofertas"],
    ["Cozinha","🍳 Cozinha"],
    ["Decoração","🛋️ Decoração"],
    ["Organização","📦 Organização"]
  ]

};

function abrirAba(aba){

  abaAtual = aba;


  document
    .querySelectorAll(".main-tab")
    .forEach(btn =>
      btn.classList.remove("active")
    );


  const botao =
    document.getElementById(
      `tab-${aba}`
    );

  if(botao){
    botao.classList.add("active");
  }


  criarSubcategorias(aba);


  const lista =
    produtos.filter(
      p => p.grupo === aba
    );


  document.getElementById("titulo")
    .textContent =
    aba === "Mercado"
      ? "Todos os produtos"
      : aba;


  mostrar(lista);

  mudarFundo(aba);


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


function criarSubcategorias(aba){

  const area =
    document.getElementById(
      "subcategorias"
    );


  const botoes =
    subcategorias[aba] || [];


  area.innerHTML =
    botoes.map(item => `

      <button
        onclick="filtrar('${item[0]}')">

        ${item[1]}

      </button>

    `).join("");


  area.innerHTML += `

    <button
      class="favorites-tab"
      onclick="mostrarFavoritos()">

      ❤️ Favoritos

      <span id="contadorFavoritos">
        ${favoritos.length}
      </span>

    </button>

  `;
}


/* =====================================================
   FILTROS
===================================================== */

function filtrar(cat){

  let lista = [];

  // TODOS DA ABA ATUAL
  if(cat === "Todos"){

    lista = produtos.filter(
      p => p.grupo === abaAtual
    );

  }

  // OFERTAS DA ABA ATUAL
  else if(cat === "Ofertas"){

    lista = produtos.filter(
      p =>
        p.grupo === abaAtual &&
        p.precoOferta !== undefined &&
        p.precoOferta < p.preco
    );

  }

  // CATEGORIA NORMAL
  else{

    lista = produtos.filter(
      p =>
        p.grupo === abaAtual &&
        p.cat === cat
    );

  }

  // TÍTULO
  if(cat === "Ofertas"){

    document.getElementById("titulo").textContent =
      "🔥 Ofertas de " + abaAtual;

  }else if(cat === "Todos"){

    document.getElementById("titulo").textContent =
      abaAtual;

  }else{

    document.getElementById("titulo").textContent =
      cat;

  }

  mostrar(lista);

  mudarFundo(
    cat === "Todos"
      ? abaAtual
      : cat
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================================
   BUSCA
===================================================== */

function buscar(){

  const termo =
    document
      .getElementById("busca")
      .value
      .toLowerCase()
      .trim();


  const lista =
    produtos.filter(p =>

      p.nome
        .toLowerCase()
        .includes(termo)

      ||

      p.cat
        .toLowerCase()
        .includes(termo)

      ||

      p.grupo
        .toLowerCase()
        .includes(termo)

    );


  document.getElementById("titulo")
    .textContent =
      termo
        ? `Busca: "${termo}"`
        : "Todos os produtos";


  mostrar(lista);
}


document
  .getElementById("busca")
  .addEventListener(
    "keydown",
    e => {
      if(e.key === "Enter"){
        buscar();
      }
    }
  );


/* =====================================================
   CORES DAS ABAS
===================================================== */

function mudarFundo(cat){

  const cores = {

    Todos:
      ["#b8f2e6","#c7d2fe"],

    Mercado:
      ["#b8f2e6","#c7d2fe"],

    Esportes:
      ["#b7e4ff","#d7f5ff"],

    Roupas:
      ["#ffd1e8","#ffe9f4"],

    Eletrônicos:
      ["#c9c8ff","#e7e7ff"],

    Casa:
      ["#ffe1a8","#fff1ce"],

    Frutas:
      ["#b7f7c1","#d9ffd9"],

    Verduras:
      ["#9be7a5","#d7ffd9"],

    Carnes:
      ["#ffb3b3","#ffd1d1"],

    Bebidas:
      ["#a9d8ff","#d5efff"],

    Limpeza:
      ["#d2b5ff","#eee0ff"],

    Banheiro:
      ["#9ee7ff","#d9f8ff"],

    Padaria:
      ["#ffd28a","#fff0c2"],

    Mercearia:
      ["#ffe58a","#fff7c2"],

    Pet:
      ["#c7b5ff","#e7ddff"],

    Favoritos:
      ["#ffbfd8","#ffe1ec"]

  };


  const cor =
    cores[cat] ||
    cores[abaAtual] ||
    cores.Todos;


  document.body.style.background =
    `linear-gradient(
      135deg,
      ${cor[0]},
      ${cor[1]}
    )`;
}


/* =====================================================
   CARRINHO
===================================================== */

function salvar(){

  localStorage.setItem(
    "carrinhoMercado",
    JSON.stringify(carrinho)
  );

  atualizarContador();
}


function atualizarContador(){

  document.getElementById("contador")
    .textContent =
    carrinho.reduce(
      (s,x) => s + x.qtd,
      0
    );
}


function adicionar(id){

  const item =
    carrinho.find(
      x => x.id === id
    );


  if(item){

    item.qtd++;

  }else{

    carrinho.push({
      id:id,
      qtd:1
    });

  }


  salvar();

  toast(
    "Produto adicionado ao carrinho! 🛒"
  );
}


function abrirCarrinho(){

  document
    .getElementById("modal")
    .classList.remove("hidden");

  renderCarrinho();
}


function fecharCarrinho(e){

  if(
    !e ||
    e.target.id === "modal"
  ){

    document
      .getElementById("modal")
      .classList.add("hidden");

  }
}


function alterar(id,delta){

  const item =
    carrinho.find(
      x => x.id === id
    );


  if(!item) return;


  item.qtd += delta;


  if(item.qtd <= 0){

    carrinho =
      carrinho.filter(
        x => x.id !== id
      );

  }


  salvar();

  renderCarrinho();
}


function renderCarrinho(){

  const area =
    document.getElementById(
      "itensCarrinho"
    );


  if(!carrinho.length){

    area.innerHTML =
      "<p>Seu carrinho está vazio. Adicione alguns produtos! 😊</p>";

    document.getElementById("total")
      .textContent =
      moeda(0);

    return;
  }


  let total = 0;


  area.innerHTML =
    carrinho.map(item => {

      const p =
        produtos.find(
          x => x.id === item.id
        );


      const preco =
        p.precoOferta ??
        p.preco;


      total +=
        preco * item.qtd;


      return `

        <div class="cart-item">

          <div class="emoji">

            ${
              p.imagem
              ? `<img
                   src="${p.imagem}"
                   alt="${p.nome}">`
              : p.emoji
            }

          </div>

          <div class="cart-info">

            <strong>
              ${p.nome}
            </strong>

            <small>
              ${moeda(preco)} cada
            </small>

          </div>

          <div class="qty">

            <button
              onclick="alterar(${p.id},-1)">
              −
            </button>

            <b>
              ${item.qtd}
            </b>

            <button
              onclick="alterar(${p.id},1)">
              +
            </button>

          </div>

        </div>

      `;

    }).join("");


  document.getElementById("total")
    .textContent =
    moeda(total);
}


function finalizarCompra(){

  if(!carrinho.length){

    toast(
      "Adicione produtos primeiro."
    );

    return;
  }


  toast(
    "Compra simulada com sucesso! ✅"
  );


  carrinho = [];

  salvar();

  renderCarrinho();
}


/* =====================================================
   CARROSSEL DE OFERTAS
===================================================== */

const ofertas =
  produtos.filter(
    p => p.precoOferta
  );


let ofertaAtual = 0;


function mostrarOferta(){

  if(!ofertas.length) return;


  const produto =
    ofertas[ofertaAtual];


  document.getElementById(
    "ofertaEmoji"
  ).textContent =
    produto.emoji;


  document.getElementById(
    "ofertaNome"
  ).textContent =
    produto.nome;


  document.getElementById(
    "ofertaPrecoAntigo"
  ).textContent =
    moeda(produto.preco);


  document.getElementById(
    "ofertaPreco"
  ).textContent =
    moeda(produto.precoOferta);


  document.getElementById(
    "indicadores"
  ).innerHTML =

    ofertas.map(
      (_,i) => `

        <button
          class="${
            i === ofertaAtual
              ? "ativo"
              : ""
          }"
          onclick="irParaOferta(${i})">
        </button>

      `
    ).join("");
}


function mudarOferta(direcao){

  ofertaAtual += direcao;


  if(
    ofertaAtual >=
    ofertas.length
  ){

    ofertaAtual = 0;

  }


  if(ofertaAtual < 0){

    ofertaAtual =
      ofertas.length - 1;

  }


  mostrarOferta();
}


function irParaOferta(index){

  ofertaAtual = index;

  mostrarOferta();
}


function adicionarOferta(){

  if(!ofertas.length) return;

  adicionar(
    ofertas[ofertaAtual].id
  );
}


setInterval(
  () => mudarOferta(1),
  5000
);


/* =====================================================
   TOAST
===================================================== */

function toast(msg){

  const t =
    document.getElementById(
      "toast"
    );


  t.textContent = msg;

  t.classList.add("show");


  setTimeout(
    () =>
      t.classList.remove("show"),
    2200
  );
}


/* =====================================================
   LOGIN
===================================================== */

let contas =
  JSON.parse(
    localStorage.getItem(
      "contasMercado"
    ) || "[]"
  );


let usuarioLogado =
  JSON.parse(
    localStorage.getItem(
      "usuarioMercado"
    ) || "null"
  );


function abrirLogin(){

  document
    .getElementById("loginModal")
    .classList.remove("hidden");

  atualizarTelaConta();
}


function fecharLogin(e){

  if(
    !e ||
    e.target.id === "loginModal"
  ){

    document
      .getElementById("loginModal")
      .classList.add("hidden");

  }
}


function alternarCadastro(){

  const loginForm =
    document.getElementById(
      "loginForm"
    );


  const cadastroForm =
    document.getElementById(
      "cadastroForm"
    );


  const voltar =
    document.getElementById(
      "voltarLogin"
    );


  const link =
    document.querySelector(
      ".link-btn:not(#voltarLogin)"
    );


  const titulo =
    document.getElementById(
      "loginTitulo"
    );


  const subtitulo =
    document.getElementById(
      "loginSubtitulo"
    );


  const abrindoCadastro =
    cadastroForm.classList.contains(
      "hidden"
    );


  loginForm.classList.toggle(
    "hidden",
    abrindoCadastro
  );


  cadastroForm.classList.toggle(
    "hidden",
    !abrindoCadastro
  );


  voltar.classList.toggle(
    "hidden",
    !abrindoCadastro
  );


  link.classList.toggle(
    "hidden",
    abrindoCadastro
  );


  titulo.textContent =
    abrindoCadastro
      ? "Criar conta"
      : "Entrar na conta";


  subtitulo.textContent =
    abrindoCadastro

      ? "Cadastre-se para ter sua conta no Mercado Mix."

      : "Entre para efetivar sua conta e finalizar suas compras.";
}


function criarConta(e){

  e.preventDefault();


  const nome =
    document.getElementById(
      "cadNome"
    ).value.trim();


  const email =
    document.getElementById(
      "cadEmail"
    ).value.trim().toLowerCase();


  const senha =
    document.getElementById(
      "cadSenha"
    ).value;


  if(
    contas.some(
      c => c.email === email
    )
  ){

    toast(
      "Este e-mail já está cadastrado."
    );

    return;
  }


  const conta = {
    nome,
    email,
    senha
  };


  contas.push(conta);


  localStorage.setItem(
    "contasMercado",
    JSON.stringify(contas)
  );


  usuarioLogado = {
    nome,
    email
  };


  localStorage.setItem(
    "usuarioMercado",
    JSON.stringify(
      usuarioLogado
    )
  );


  toast(
    "Conta criada com sucesso! ✅"
  );


  document
    .getElementById("loginModal")
    .classList.add("hidden");


  atualizarTelaConta();
}


function entrarConta(e){

  e.preventDefault();


  const email =
    document.getElementById(
      "loginEmail"
    ).value.trim().toLowerCase();


  const senha =
    document.getElementById(
      "loginSenha"
    ).value;


  const conta =
    contas.find(
      c =>
        c.email === email &&
        c.senha === senha
    );


  if(!conta){

    toast(
      "E-mail ou senha incorretos."
    );

    return;
  }


  usuarioLogado = {
    nome:conta.nome,
    email:conta.email
  };


  localStorage.setItem(
    "usuarioMercado",
    JSON.stringify(
      usuarioLogado
    )
  );


  toast(
    `Bem-vindo, ${conta.nome}! 👋`
  );


  document
    .getElementById("loginModal")
    .classList.add("hidden");


  atualizarTelaConta();
}


function atualizarTelaConta(){

  const texto =
    document.getElementById(
      "contaTexto"
    );


  if(!texto) return;


  texto.textContent =
    usuarioLogado
      ? usuarioLogado.nome
      : "Entrar";
}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

abrirAba("Mercado");

mostrarOferta();

atualizarContador();

atualizarContadorFavoritos();

atualizarTelaConta();