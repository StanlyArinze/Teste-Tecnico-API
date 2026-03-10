# API de Gerenciamento de Contatos

API REST desenvolvida com Node.js, Express e MySQL para cadastrar, listar, atualizar e remover contatos.

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- nodemon

## Pre-requisitos

- Node.js 20.x LTS
- npm 10.x ou superior
- MySQL Server 8.x

## Instalação

1. Clone ou baixe este projeto.
2. Instale as dependências:

```bash
npm install
```

## Configuração do .env

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=agenda_contatos
```

## Criação do banco de dados e tabela

Execute o script abaixo no MySQL Workbench ou no terminal MySQL:

```sql
CREATE DATABASE IF NOT EXISTS agenda_contatos;

USE agenda_contatos;

CREATE TABLE IF NOT EXISTS contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);
```

## Como rodar o projeto

Para desenvolvimento:

```bash
npm run dev
```

Para produção:

```bash
npm start
```

## Rotas da API

### POST /contatos

Cria um novo contato.

Exemplo de body:

```json
{
  "nome": "Maria Silva",
  "telefone": "11999999999"
}
```

Resposta de sucesso:

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "telefone": "11999999999"
}
```

### GET /contatos

Lista todos os contatos.

Resposta de sucesso:

```json
[
  {
    "id": 1,
    "nome": "Maria Silva",
    "telefone": "11999999999"
  }
]
```

### PATCH /contatos/:id

Atualiza um contato existente.

Exemplo de body:

```json
{
  "telefone": "11988888888"
}
```

Resposta de sucesso:

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "telefone": "11988888888"
}
```

### DELETE /contatos/:id

Remove um contato existente.

Resposta de sucesso:

```http
204 No Content
```

## Possiveis erros de validacao

### 400 Bad Request

```json
{
  "message": "Payload invalido"
}
```

```json
{
  "message": "Nome obrigatorio"
}
```

```json
{
  "message": "Telefone obrigatorio"
}
```

```json
{
  "message": "Nome deve conter pelo menos duas palavras e cada palavra deve ter no minimo 3 letras"
}
```

```json
{
  "message": "Id invalido"
}
```

### 404 Not Found

```json
{
  "message": "Contato nao encontrado"
}
```

### 500 Internal Server Error

```json
{
  "message": "Erro interno do servidor"
}
```

## Observacoes finais

- O projeto usa variaveis de ambiente para conexao com o banco.
- O endpoint `PATCH /contatos/:id` aceita atualizacao parcial de `nome` e `telefone`.
- O nome deve conter pelo menos duas palavras, com no minimo 3 letras cada.
- O projeto esta pronto para execucao local apos instalar as dependencias e configurar o MySQL.
