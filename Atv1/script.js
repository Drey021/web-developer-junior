function checkLogin() {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  const container = document.getElementById('postsContainer');
  container.innerHTML = ''; // limpa o container

  if (posts.length === 0) {
    container.innerHTML = '<p>Nenhum post disponível.</p>';
    return;
  }

  posts.forEach((post, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${post.title}</h3><small>Data: ${post.date || "N/A"}</small>
      <img src="${post.image}" style="max-width:200px;" />
      <p>
        <a href="view-post.html?id=${index}">Visualizar</a> |
        <a href="edit-post.html?id=${index}">Editar</a> |
        <a href="#" onclick="deletePost(${index})">Excluir</a>
      </p>
      <hr />
    `;
    container.appendChild(div);
  });
}

function deletePost(index) {
  if (confirm('Tem certeza que deseja excluir este post?')) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    if (document.getElementById('postsContainer')) {
      loadPosts();
    } else {
      window.location.href = 'home.html';
    }
  }
}
