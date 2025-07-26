# Gerenciador de Posts - Blog Simples

Um projeto simples de gerenciador de posts para blog, feito com HTML, CSS e JavaScript puro, usando **localStorage** para salvar os dados no navegador. Ideal para estudos e pequenos projetos sem backend.

---

## Funcionalidades

- Login simples (usuário fixo: `admin` / senha: `1234`).
- Criação, edição e exclusão de posts.
- Listagem de posts na área de gerenciamento.
- Busca de posts na página pública.
- Visualização detalhada do post.
- Proteção simples das páginas administrativas via login.
- Armazenamento dos posts no `localStorage`.

---

## Tecnologias

- HTML5
- CSS3 (customizado e responsivo)
- JavaScript (ES6+)
- `localStorage` para persistência de dados

---

## Estrutura do Projeto

BLOG
├── blog.html # Página pública do blog (listar posts)
├── login.html # Tela de login
├── gerenciar-posts.html# Área administrativa (listar, editar, excluir)
├── criar-post.html # Formulário para criar novo post
├── editar-post.html # Formulário para editar post existente
├── post.html # Detalhes de um post específico
├── style.css # Estilos principais (responsivo e moderno)
└── script.js # Lógica em JavaScript (login, CRUD, busca)

---

## Como usar

1. Abra `login.html` e entre com:  
   - **Usuário:** admin  
   - **Senha:** 1234

2. Após logar, você pode criar, editar e excluir posts na área administrativa.

3. Acesse `blog.html` para visualizar os posts publicamente e usar a busca.

4. Clique em um post para ver os detalhes.

---

## Considerações

- Projeto simples, sem backend real — dados ficam no navegador via `localStorage`.
- Senha fixa e simples aqui apenas para fins educacionais.
  
---

## Melhorias Futuras

- Autenticação com backend e banco real (ex: MySQL).
- Upload de imagens (em vez de URLs).
- Editor WYSIWYG para a descrição do post.
- Sistema de permissões de usuário.
- Design responsivo avançado e mobile-first.
- Validações e feedbacks mais robustos.

---

## Autor

[Andrey S Soares]

---
