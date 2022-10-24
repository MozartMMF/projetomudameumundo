Exemplo de comunicação do Frontend com o Backend (API)

# Instalar o node_modules:
> npm init -y
> npm install express
> npm i --save-dev nodemon

# Configurando package.json
- Adicionando o nodemon:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },

# Rodando na porta 8383
> npm run dev
