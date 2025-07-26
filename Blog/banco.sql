-- Tabela de usuários (para autenticação)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,  -- para armazenar senha hash (nunca plain text!)
    nome VARCHAR(100) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de posts do blog
CREATE TABLE posts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    imagem VARCHAR(500) DEFAULT NULL, -- URL da imagem
    descricao TEXT NOT NULL,           -- conteúdo HTML do post
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    usuario_id INT,                   -- autor do post, relacionamento com usuarios.id
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);
