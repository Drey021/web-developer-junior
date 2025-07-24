# Web Developer Júnior – Avaliação Técnica

Este repositório contém a solução para a avaliação técnica da vaga de Desenvolvedor Web Júnior. O objetivo é demonstrar domínio nas tecnologias propostas por meio da criação de um gerenciador de posts para blog e sua respectiva interface pública.

## 🚀 Tecnologias Utilizadas

- **PHP** com o framework **CodeIgniter 4**
- **Eloquent ORM** para abstração do banco de dados
- **MySQL** como banco de dados relacional
- **Bootstrap** para estilização e layout
- **jQuery** para comportamentos dinâmicos no frontend
- **Git** para versionamento de código

## 📌 Atividades

### Atividade 1: Gerenciador de Posts (Admin)

- [x] Implementar sistema de **autenticação (login)** para acesso ao painel administrativo
- [x] CRUD completo de **posts de blog**
  - Nome (título)
  - Imagem (upload de foto)
  - Descrição (conteúdo em HTML)
- [x] Projeto **monolítico** (sem separação entre front e back)

### Atividade 2: Interface Pública do Blog

- [x] Tela de **listagem de posts**, com:
  - Campo de busca por nome/título
- [x] Tela de **detalhes de post**, exibindo nome, imagem e conteúdo formatado

## 🗃️ Banco de Dados

- Utilizado MySQL
- O diagrama do banco foi criado com **MySQL Workbench**
- Estrutura composta por tabelas como `users`, `posts`, entre outras

> O arquivo `.sql` do banco e o diagrama em formato `.mwb` estão disponíveis na pasta `/database`.

## 🧪 Avaliação

Serão avaliados:

- Qualidade e organização do código
- Estrutura do projeto
- Uso adequado das tecnologias solicitadas
- Boas práticas de desenvolvimento (nomes de variáveis, organização de pastas, etc.)

## 📂 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/web-developer-junior.git
   cd web-developer-junior
