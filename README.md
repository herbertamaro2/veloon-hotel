# Guia de Instalação e Inicialização do Projeto

Este guia explica como instalar e inicializar o frontend em React e o backend em Node.js (Express) passo a passo.

---

## Requisitos
Certifique-se de que você tenha os seguintes softwares instalados:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **yarn**
- **Git** (para clonar o repositório)

---

## 1. Clonando o Repositório
Abra o terminal e execute o comando:

```bash
# Substitua pela URL do seu repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre no diretório do projeto:

```bash
cd seu-repositorio
```

---

## 2. Configuração do Backend (Node.js com Express)

### 2.1. Navegue para a pasta do backend

```bash
cd backend
```

### 2.2. Instale as dependências

Utilize **npm** ou **yarn** para instalar os pacotes necessários:

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 2.3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do diretório `backend` e configure as variáveis de ambiente necessárias, como a porta do servidor e credenciais. Exemplo:

```
PORT=5000
DB_URL=mongodb://localhost:27017/nome-do-banco
```

### 2.4. Inicie o servidor

Para iniciar o servidor backend, execute:

```bash
# Usando npm
npm start

# Ou usando yarn
yarn start
```

Se estiver utilizando **nodemon** para desenvolvimento:

```bash
# Usando npm
npm run dev

# Ou usando yarn
yarn dev
```

O servidor será iniciado em `http://localhost:5000` por padrão (ou na porta especificada no `.env`).

---

## 3. Configuração do Frontend (React)

### 3.1. Navegue para a pasta do frontend

```bash
cd ../frontend
```

### 3.2. Instale as dependências

Execute o comando para instalar os pacotes:

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3.3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do diretório `frontend` e configure as variáveis de ambiente. Exemplo:

```
REACT_APP_API_URL=http://localhost:5000
```

### 3.4. Inicie o servidor de desenvolvimento

Para iniciar o frontend, execute:

```bash
# Usando npm
npm start

# Ou usando yarn
yarn start
```

O React iniciará no navegador automaticamente em `http://localhost:3000`.

---

## 4. Verificando o Funcionamento

1. Certifique-se de que o backend (Node.js) esteja rodando em `http://localhost:5000`.
2. Certifique-se de que o frontend (React) esteja rodando em `http://localhost:3000`.
3. Acesse o frontend no navegador e teste as funcionalidades da aplicação.

---

## 5. Comandos Importantes

### Backend
- **Iniciar servidor**: `npm start` ou `yarn start`
- **Iniciar com nodemon**: `npm run dev` ou `yarn dev`

### Frontend
- **Iniciar servidor React**: `npm start` ou `yarn start`

---

## 6. Possíveis Erros e Soluções

### Erro: Porta já em uso
- Verifique se outra aplicação está usando a mesma porta e altere a configuração no arquivo `.env`.

### Erro: Dependências não instaladas
- Certifique-se de ter executado `npm install` ou `yarn install` nos diretórios `backend` e `frontend`.

### Erro: API não encontrada
- Certifique-se de que o backend está rodando na URL configurada no `REACT_APP_API_URL`.

---

## 7. Conclusão
Agora você tem o frontend e o backend configurados e rodando localmente. Caso tenha dúvidas ou encontre problemas, verifique os logs de erro no terminal ou consulte a documentação do projeto.

