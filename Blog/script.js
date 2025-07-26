// Função simples para fazer login
function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === "admin" && senha === "1234") {
    localStorage.setItem("logado", "true");
    window.location.href = "gerenciar-posts.html";
  } else {
    alert("Ops! Usuário ou senha estão incorretos. Tente novamente.");
  }
  return false;
}

// Função para sair da sessão
function logout() {
  localStorage.removeItem("logado");
  alert("Você saiu da sua conta com sucesso!");
}

// Verifica se o usuário está logado
function verificarLogin() {
  if (localStorage.getItem("logado") !== "true") {
    alert("Você precisa estar logado para continuar.");
    window.location.href = "login.html";
  }
}

// Função para proteger páginas que exigem login (chamar no onload)
function protegerPagina() {
  verificarLogin();
}

// Pega os posts salvos no localStorage
function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

// Salva os posts no localStorage
function salvarPosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Cria um post novo e salva
function criarPost() {
  const titulo = document.getElementById("titulo").value.trim();
  const imagem = document.getElementById("imagem").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (!titulo || !imagem || !descricao) {
    alert("Por favor, preencha todos os campos antes de salvar.");
    return false;
  }

  const posts = getPosts();
  const novoPost = {
    id: Date.now(),
    titulo,
    imagem,
    descricao,
  };

  posts.push(novoPost);
  salvarPosts(posts);
  alert("Post criado com sucesso! Vamos para a lista.");
  window.location.href = "gerenciar-posts.html";
  return false;
}

// Carrega a lista de posts para exibir na página de gerenciamento
function carregarPosts() {
  protegerPagina();
  const lista = document.getElementById("lista-posts");
  const posts = getPosts();
  lista.innerHTML = "";

  if (posts.length === 0) {
    lista.innerHTML = "<li>Ah, não encontramos nenhum post ainda.</li>";
    return;
  }

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${post.titulo}</strong><br>
      <a href="editar-post.html?id=${post.id}" aria-label="Editar post ${post.titulo}">Editar</a> |
      <a href="#" onclick="excluirPost(${post.id})" aria-label="Excluir post ${post.titulo}">Excluir</a>
    `;
    lista.appendChild(li);
  });
}

// Exclui um post após confirmação
function excluirPost(id) {
  if (confirm("Tem certeza que quer apagar esse post?")) {
    let posts = getPosts();
    posts = posts.filter((p) => p.id !== id);
    salvarPosts(posts);
    carregarPosts();
  }
}

// Carrega os dados do post para edição
function carregarPostEdicao() {
  protegerPagina();
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const posts = getPosts();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    alert("Não encontramos esse post, desculpe.");
    window.location.href = "gerenciar-posts.html";
    return;
  }

  document.getElementById("post-id").value = post.id;
  document.getElementById("titulo").value = post.titulo;
  document.getElementById("imagem").value = post.imagem;
  document.getElementById("descricao").value = post.descricao;
}

// Salva as alterações feitas em um post
function salvarEdicao() {
  const id = Number(document.getElementById("post-id").value);
  const titulo = document.getElementById("titulo").value.trim();
  const imagem = document.getElementById("imagem").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (!titulo || !imagem || !descricao) {
    alert("Por favor, preencha todos os campos antes de salvar.");
    return false;
  }

  const posts = getPosts();
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts[index] = { id, titulo, imagem, descricao };
    salvarPosts(posts);
    alert("Post atualizado com sucesso!");
    window.location.href = "gerenciar-posts.html";
  }

  return false;
}

// Lista posts no blog, com filtro simples
function listarPosts() {
  const posts = getPosts();
  const busca = document.getElementById("busca")?.value.toLowerCase() || "";
  const lista = document.getElementById("posts-publicos");
  lista.innerHTML = "";

  const filtrados = posts.filter((p) => p.titulo.toLowerCase().includes(busca));

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Ops, não encontramos nenhum post que combine.</li>";
    return;
  }

  filtrados.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="post.html?id=${post.id}">${post.titulo}</a>`;
    lista.appendChild(li);
  });
}

// Mostra detalhes de um post específico
function mostrarPostDetalhado() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const posts = getPosts();
  const post = posts.find((p) => p.id === id);

  const div = document.getElementById("post-detalhe");

  if (!post) {
    div.innerHTML = "<p>Não conseguimos encontrar esse post.</p>";
    return;
  }

  div.innerHTML = `
    <h2>${post.titulo}</h2>
    <img src="${post.imagem}" alt="${post.titulo}" style="max-width: 100%; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 15px;">
    <div>${post.descricao}</div>
  `;
}
