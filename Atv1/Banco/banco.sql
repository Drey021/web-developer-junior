-- Layout
users
- id (PK)
- username
- password (criptografado)
- created_at
- updated_at

posts
- id (PK)
- title
- slug
- image_path
- description (HTML)
- created_at
- updated_at

-- Banco 
-- Criação do banco
CREATE DATABASE IF NOT EXISTS blog_ci4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE blog_ci4;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de posts
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    image_path VARCHAR(255),
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Usuário admin (senha: admin123)
INSERT INTO users (username, password)
VALUES ('admin', '$2y$10$e0NRqvE7U2dGpNhDqZr2CefPCnpnF.D94ph8jFGVbZhWYpCvUMRKS');
