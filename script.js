const produtos = [

  { id: 1, nome: "Maçã", cat: "Frutas", preco: 7.99, emoji: "🍎" },
  { id: 2, nome: "Maçã Verde", cat: "Frutas", preco: 8.49, emoji: "🍏" },
  { id: 3, nome: "Laranja", cat: "Frutas", preco: 6.99, emoji: "🍊" },
  { id: 4, nome: "Tangerina", cat: "Frutas", preco: 7.49, emoji: "🍊" },
  { id: 5, nome: "Melancia", cat: "Frutas", preco: 12.90, emoji: "🍉" },
  { id: 6, nome: "Abacaxi", cat: "Frutas", preco: 8.50, emoji: "🍍" },

  { id: 7, nome: "Alface", cat: "Verduras", preco: 3.99, precoOferta: 2.99, emoji: "🥬" },
  { id: 8, nome: "Tomate", cat: "Verduras", preco: 6.49, emoji: "🍅" },
  { id: 9, nome: "Cenoura", cat: "Verduras", preco: 4.79, precoOferta: 3.49, emoji: "🥕" },
  { id: 10, nome: "Batata", cat: "Verduras", preco: 5.99, emoji: "🥔" },

  { id: 11, nome: "Carne bovina", cat: "Carnes", preco: 39.90, precoOferta: 34.90, emoji: "🥩" },
  { id: 12, nome: "Carne suína", cat: "Carnes", preco: 24.90, emoji: "🥩" },
  { id: 13, nome: "Frango", cat: "Carnes", preco: 14.90, emoji: "🍗" },
  { id: 14, nome: "Peito de frango", cat: "Carnes", preco: 18.90, emoji: "🍗" },
  { id: 15, nome: "Peixe", cat: "Carnes", preco: 29.90, emoji: "🐟" },
  { id: 16, nome: "Salmão", cat: "Carnes", preco: 49.90, emoji: "🐟" },
  { id: 17, nome: "Lula", cat: "Carnes", preco: 34.90, emoji: "🦑" },
  { id: 18, nome: "Camarão", cat: "Carnes", preco: 59.90, emoji: "🦐" },

  { id: 19, nome: "Leite", cat: "Bebidas", preco: 5.49, emoji: "🥛" },
  { id: 20, nome: "Leite achocolatado", cat: "Bebidas", preco: 6.99, emoji: "🥛" },
  { id: 21, nome: "Refrigerante", cat: "Bebidas", preco: 7.99, emoji: "🥤" },
  { id: 22, nome: "Guaraná", cat: "Bebidas", preco: 7.49, emoji: "🥤" },
  { id: 23, nome: "Chá gelado", cat: "Bebidas", preco: 6.49, emoji: "🧋" },
  { id: 24, nome: "Suco de laranja", cat: "Bebidas", preco: 8.49, emoji: "🧃" },
  { id: 25, nome: "Suco de uva", cat: "Bebidas", preco: 8.99, emoji: "🧃" },
  { id: 26, nome: "Água mineral", cat: "Bebidas", preco: 2.49, emoji: "💧" },
  { id: 27, nome: "Água com gás", cat: "Bebidas", preco: 3.49, emoji: "💧" },
  { id: 28, nome: "Café", cat: "Bebidas", preco: 12.90, emoji: "☕" },
  { id: 29, nome: "Vinho", cat: "Bebidas", preco: 29.90, emoji: "🍾" },

  { id: 30, nome: "Detergente", cat: "Limpeza", preco: 2.99, precoOferta: 1.99, emoji: "🧴" },
  { id: 31, nome: "Sabão em pó", cat: "Limpeza", preco: 12.90, emoji: "🫧" },
  { id: 32, nome: "Vassoura", cat: "Limpeza", preco: 18.90, emoji: "🧹" },
  { id: 33, nome: "Esponja", cat: "Limpeza", preco: 16.50, emoji: "🧽" },
  { id: 34, nome: "Desentupidor", cat: "Limpeza", preco: 9.90, emoji: "🪠" },
  { id: 35, nome: "Balde", cat: "Limpeza", preco: 14.90, emoji: "🪣" },

  { id: 36, nome: "Papel higiênico", cat: "Banheiro", preco: 15.90, emoji: "🧻" },
  { id: 37, nome: "Shampoo", cat: "Banheiro", preco: 13.99, emoji: "🧴" },
  { id: 38, nome: "Sabonete", cat: "Banheiro", preco: 3.49, precoOferta: 2.49, emoji: "🧼" },
  { id: 39, nome: "Condicionador", cat: "Banheiro", preco: 14.99, emoji: "🚿" },
  { id: 40, nome: "Creme dental", cat: "Banheiro", preco: 6.99, emoji: "🪥" },
  { id: 41, nome: "Banheira para bebê", cat: "Banheiro", preco: 89.90, emoji: "🛁" },
  { id: 42, nome: "Toalha de bebê", cat: "Banheiro", preco: 29.90, imagem: "toalhadebebe.png" },
  { id: 43, nome: "Shampoo para bebê", cat: "Banheiro", preco: 16.90, emoji: "🧴" },
  { id: 44, nome: "Sabonete para bebê", cat: "Banheiro", preco: 5.90, emoji: "🧼" },

  { id: 45, nome: "Pão francês", cat: "Padaria", preco: 1.20, emoji: "🥖" },
  { id: 46, nome: "Bolo de chocolate", cat: "Padaria", preco: 24.90, emoji: "🍰" },
  { id: 47, nome: "Croissant", cat: "Padaria", preco: 7.50, emoji: "🥐" },
  { id: 48, nome: "Biscoito", cat: "Padaria", preco: 4.49, precoOferta: 3.49, emoji: "🍪" },
  { id: 49, nome: "Cookie", cat: "Padaria", preco: 5.49, emoji: "🍪" },
  { id: 50, nome: "Panqueca", cat: "Padaria", preco: 9.90, emoji: "🥞" },
  { id: 51, nome: "Pretzel", cat: "Padaria", preco: 7.90, emoji: "🥨" },
  { id: 52, nome: "Hambúrguer", cat: "Padaria", preco: 12.90, emoji: "🍔" },
  { id: 53, nome: "Batata frita", cat: "Padaria", preco: 9.90, emoji: "🍟" },
  { id: 54, nome: "Rosquinha", cat: "Padaria", preco: 6.90, emoji: "🍩" },
  { id: 55, nome: "Pudim", cat: "Padaria", preco: 8.90, emoji: "🍮" },
  { id: 56, nome: "Bolo tradicional", cat: "Padaria", preco: 14.90, emoji: "🥮" },

  { id: 57, nome: "Arroz 5kg", cat: "Mercearia", preco: 28.90, emoji: "🍚" },
  { id: 58, nome: "Feijão 1kg", cat: "Mercearia", preco: 8.90, emoji: "🫘" },
  { id: 59, nome: "Macarrão", cat: "Mercearia", preco: 4.99, precoOferta: 3.99, emoji: "🍝" },
  { id: 60, nome: "Ovos", cat: "Mercearia", preco: 12.90, emoji: "🥚" },
  { id: 61, nome: "Mel", cat: "Mercearia", preco: 18.90, emoji: "🍯" },
  { id: 62, nome: "Queijo", cat: "Mercearia", preco: 15.90, emoji: "🧀" },
  { id: 63, nome: "Chocolate", cat: "Mercearia", preco: 7.90, emoji: "🍫" },
  { id: 64, nome: "Sal", cat: "Mercearia", preco: 3.49, precoOferta: 2.49, emoji: "🧂" },
  { id: 65, nome: "Manteiga", cat: "Mercearia", preco: 9.90, emoji: "🧈" },
  { id: 66, nome: "Pipoca", cat: "Mercearia", preco: 5.49, emoji: "🍿" },

  { id: 67, nome: "Ração para cachorro", cat: "Pet", preco: 69.90, emoji: "🐶" },
  { id: 68, nome: "Ração para gato", cat: "Pet", preco: 49.90, emoji: "🐱" },
  { id: 69, nome: "Ração para coelho", cat: "Pet", preco: 29.90, emoji: "🐰" },
  { id: 70, nome: "Ração para pássaros", cat: "Pet", preco: 18.90, emoji: "🐦" },
  { id: 71, nome: "Ração para peixes", cat: "Pet", preco: 24.90, emoji: "🐠" },
  { id: 72, nome: "Aquário pequeno", cat: "Pet", preco: 79.90, emoji: "🐟" },

  { id: 73, nome: "Banana", cat: "Frutas", preco: 5.49, emoji: "🍌" },
  { id: 74, nome: "Banana Prata", cat: "Frutas", preco: 6.49, emoji: "🍌" },
  { id: 75, nome: "Uva", cat: "Frutas", preco: 9.90, emoji: "🍇" },
  { id: 76, nome: "Morango", cat: "Frutas", preco: 11.90, emoji: "🍓" },
  { id: 77, nome: "Mamão", cat: "Frutas", preco: 9.90, emoji: "🍈" },
  { id: 78, nome: "Manga", cat: "Frutas", preco: 8.90, emoji: "🥭" },

  { id: 79, nome: "Cebola", cat: "Verduras", preco: 5.49, emoji: "🧅" },
  { id: 80, nome: "Pepino", cat: "Verduras", preco: 4.99, precoOferta: 3.49, emoji: "🥒" },
  { id: 81, nome: "Pimentão", cat: "Verduras", preco: 7.90, emoji: "🫑" },
  { id: 82, nome: "Berinjela", cat: "Verduras", preco: 7.49, emoji: "🍆" },
  { id: 83, nome: "Brócolis", cat: "Verduras", preco: 8.90, emoji: "🥦" },
  { id: 84, nome: "Couve-flor", cat: "Verduras", preco: 9.90, emoji: "🥦" },
  { id: 85, nome: "Milho", cat: "Verduras", preco: 6.49, emoji: "🌽" },
  { id: 86, nome: "Beterraba", cat: "Verduras", preco: 5.90, emoji: "🫜" }

];


let carrinho =
  JSON.parse(localStorage.getItem("carrinhoMercado") || "[]");

let favoritos =
  JSON.parse(localStorage.getItem("favoritosMercado") || "[]");


/* =========================
   FAVORITOS
========================= */

function salvarFavoritos() {

  localStorage.setItem(
    "favoritosMercado",
    JSON.stringify(favoritos)
  );

  atualizarContadorFavoritos();
}


function atualizarContadorFavoritos() {

  const contador =
    document.getElementById("contadorFavoritos");

  if (contador) {
    contador.textContent = favoritos.length;
  }
}


function alternarFavorito(id) {

  if (favoritos.includes(id)) {

    favoritos =
      favoritos.filter(f => f !== id);

    toast("Produto removido dos favoritos 🤍");

  } else {

    favoritos.push(id);

    toast("Produto adicionado aos favoritos ❤️");

  }

  salvarFavoritos();

  if (
    document
      .getElementById("titulo")
      .textContent
      .includes("Meus favoritos")
  ) {

    mostrarFavoritos();

  } else {

    mostrar(listaAtual);

  }

}


function mostrarFavoritos() {

  const lista =
    produtos.filter(p => favoritos.includes(p.id));

  document.getElementById("titulo").textContent =
    "❤️ Meus favoritos";

  mostrar(lista);

  mudarFundo("Favoritos");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   PRODUTOS
========================= */

let listaAtual = produtos;


function moeda(valor) {

  return valor.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


function mostrar(lista = produtos) {

  listaAtual = lista;

  const area =
    document.getElementById("produtos");


  if (!lista.length) {

    area.innerHTML = `
      <div class="empty-favorites glass">

        <div>💔</div>

        <h3>
          Você ainda não possui favoritos
        </h3>

        <p>
          Clique no ❤️ dos produtos
          para adicioná-los aqui.
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

        ${p.precoOferta
        ? `<span class="badge">🏷️ OFERTA</span>`
        : ""
      }


        <button
          class="favorite-btn ${favoritos.includes(p.id)
        ? "active"
        : ""
      }"

          onclick="alternarFavorito(${p.id})"

          title="${favoritos.includes(p.id)
        ? "Remover dos favoritos"
        : "Adicionar aos favoritos"
      }">

          ${favoritos.includes(p.id)
        ? "❤️"
        : "🤍"
      }

        </button>


        <div class="product-img">
  ${p.imagem
        ? `<img src="${p.imagem}" alt="${p.nome}">`
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

          ${p.precoOferta

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


/* =========================
   CATEGORIAS
========================= */

function filtrar(cat) {

  let lista;


  if (cat === "Todos") {

    lista = produtos;

  } else {

    lista =
      produtos.filter(
        p => p.cat === cat
      );

  }


  document.getElementById("titulo")
    .textContent =
    cat === "Todos"
      ? "Todos os produtos"
      : cat;


  mostrar(lista);

  mudarFundo(cat);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   CORES DO FUNDO
========================= */

function mudarFundo(cat) {

  const cores = {

    Todos: [
      "#b8f2e6",
      "#c7d2fe"
    ],

    Favoritos: [
      "#ffbfd8",
      "#ffe1ec"
    ],

    Frutas: [
      "#b7f7c1",
      "#d9ffd9"
    ],

    Verduras: [
      "#9be7a5",
      "#d7ffd9"
    ],

    Carnes: [
      "#ffb3b3",
      "#ffd1d1"
    ],

    Bebidas: [
      "#a9d8ff",
      "#d5efff"
    ],

    Limpeza: [
      "#d2b5ff",
      "#eee0ff"
    ],

    Banheiro: [
      "#9ee7ff",
      "#d9f8ff"
    ],

    Padaria: [
      "#ffd28a",
      "#fff0c2"
    ],

    Mercearia: [
      "#ffe58a",
      "#fff7c2"
    ],

    Pet: [
      "#c7b5ff",
      "#e7ddff"
    ]

  };


  const cor =
    cores[cat] || cores.Todos;


  document.body.style.background =
    `linear-gradient(
      135deg,
      ${cor[0]},
      ${cor[1]}
    )`;

}


/* =========================
   BUSCA
========================= */

function buscar() {

  const termo =
    document
      .getElementById("busca")
      .value
      .toLowerCase()
      .trim();


  const lista =
    produtos.filter(
      p =>
        p.nome
          .toLowerCase()
          .includes(termo)
        ||
        p.cat
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

      if (e.key === "Enter") {
        buscar();
      }

    }
  );


/* =========================
   CARRINHO
========================= */

function adicionar(id) {

  const item =
    carrinho.find(
      x => x.id === id
    );


  if (item) {

    item.qtd++;

  } else {

    carrinho.push({
      id: id,
      qtd: 1
    });

  }


  salvar();

  toast(
    "Produto adicionado ao carrinho! 🛒"
  );

}


function salvar() {

  localStorage.setItem(
    "carrinhoMercado",
    JSON.stringify(carrinho)
  );

  atualizarContador();

}


function atualizarContador() {

  document.getElementById("contador")
    .textContent =
    carrinho.reduce(
      (s, x) => s + x.qtd,
      0
    );

}


function abrirCarrinho() {

  document
    .getElementById("modal")
    .classList
    .remove("hidden");

  renderCarrinho();

}


function fecharCarrinho(e) {

  if (
    !e ||
    e.target.id === "modal"
  ) {

    document
      .getElementById("modal")
      .classList
      .add("hidden");

  }

}


function alterar(id, delta) {

  const item =
    carrinho.find(
      x => x.id === id
    );


  if (!item) return;


  item.qtd += delta;


  if (item.qtd <= 0) {

    carrinho =
      carrinho.filter(
        x => x.id !== id
      );

  }


  salvar();

  renderCarrinho();

}


function renderCarrinho() {

  const area =
    document.getElementById(
      "itensCarrinho"
    );


  if (!carrinho.length) {

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
        p.precoOferta ?? p.preco;


      total +=
        preco * item.qtd;


      return `

        <div class="cart-item">

          <div class="emoji">
            ${p.emoji}
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


function finalizarCompra() {

  if (!carrinho.length) {

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


/* =========================
   NOTIFICAÇÃO
========================= */

function toast(msg) {

  const t =
    document.getElementById("toast");


  t.textContent = msg;

  t.classList.add("show");


  setTimeout(
    () => t.classList.remove("show"),
    2200
  );

}


/* =========================
   LOGIN
========================= */

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


function abrirLogin() {

  document
    .getElementById("loginModal")
    .classList
    .remove("hidden");

  atualizarTelaConta();

}


function fecharLogin(e) {

  if (
    !e ||
    e.target.id === "loginModal"
  ) {

    document
      .getElementById("loginModal")
      .classList
      .add("hidden");

  }

}


function alternarCadastro() {

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


  const cadastroAberto =
    cadastroForm.classList
      .contains("hidden");


  loginForm.classList.toggle(
    "hidden",
    cadastroAberto
  );

  cadastroForm.classList.toggle(
    "hidden",
    !cadastroAberto
  );

  voltar.classList.toggle(
    "hidden",
    !cadastroAberto
  );

  link.classList.toggle(
    "hidden",
    cadastroAberto
  );


  titulo.textContent =
    cadastroAberto
      ? "Criar conta"
      : "Entrar na conta";


  subtitulo.textContent =
    cadastroAberto
      ? "Cadastre-se para ter sua conta no Mercado Mix."
      : "Entre para efetivar sua conta e finalizar suas compras.";

}


function criarConta(e) {

  e.preventDefault();


  const nome =
    document
      .getElementById("cadNome")
      .value
      .trim();


  const email =
    document
      .getElementById("cadEmail")
      .value
      .trim()
      .toLowerCase();


  const senha =
    document.getElementById(
      "cadSenha"
    ).value;


  if (
    contas.some(
      c => c.email === email
    )
  ) {

    toast(
      "Este e-mail já está cadastrado."
    );

    return;

  }


  contas.push({
    nome,
    email,
    senha
  });


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
    JSON.stringify(usuarioLogado)
  );


  toast(
    "Conta criada com sucesso! ✅"
  );


  document
    .getElementById("loginModal")
    .classList
    .add("hidden");


  atualizarTelaConta();

}


function entrarConta(e) {

  e.preventDefault();


  const email =
    document
      .getElementById(
        "loginEmail"
      )
      .value
      .trim()
      .toLowerCase();


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


  if (!conta) {

    toast(
      "E-mail ou senha incorretos."
    );

    return;

  }


  usuarioLogado = {
    nome: conta.nome,
    email: conta.email
  };


  localStorage.setItem(
    "usuarioMercado",
    JSON.stringify(usuarioLogado)
  );


  toast(
    `Bem-vindo, ${conta.nome}! 👋`
  );


  document
    .getElementById("loginModal")
    .classList
    .add("hidden");


  atualizarTelaConta();

}


function atualizarTelaConta() {

  const texto =
    document.getElementById(
      "contaTexto"
    );


  if (!texto) return;


  texto.textContent =
    usuarioLogado
      ? usuarioLogado.nome
      : "Entrar";

}

/* =========================
   CARROSSEL DE OFERTAS
========================= */

const ofertas = produtos.filter(
  p => p.precoOferta
);

let ofertaAtual = 0;


function mostrarOferta() {

  if (!ofertas.length) return;

  const produto =
    ofertas[ofertaAtual];


  document.getElementById("ofertaEmoji")
    .textContent = produto.emoji;


  document.getElementById("ofertaNome")
    .textContent = produto.nome;


  document.getElementById("ofertaPrecoAntigo")
    .textContent = moeda(produto.preco);


  document.getElementById("ofertaPreco")
    .textContent = moeda(produto.precoOferta);


  const indicadores =
    document.getElementById("indicadores");


  indicadores.innerHTML =
    ofertas.map((_, index) => `

      <button
        class="${index === ofertaAtual
        ? "ativo"
        : ""
      }"
        onclick="irParaOferta(${index})">
      </button>

    `).join("");

}


function mudarOferta(direcao) {

  ofertaAtual += direcao;


  if (ofertaAtual >= ofertas.length) {
    ofertaAtual = 0;
  }


  if (ofertaAtual < 0) {
    ofertaAtual = ofertas.length - 1;
  }


  mostrarOferta();

}


function irParaOferta(index) {

  ofertaAtual = index;

  mostrarOferta();

}


function adicionarOferta() {

  if (!ofertas.length) return;

  const produto =
    ofertas[ofertaAtual];


  adicionar(produto.id);

}


/* Troca automática */

setInterval(() => {

  mudarOferta(1);

}, 5000);


/* Inicia o carrossel */

mostrarOferta();


/* =========================
   INICIALIZAÇÃO
========================= */

mostrar();

atualizarContador();

atualizarContadorFavoritos();

atualizarTelaConta();