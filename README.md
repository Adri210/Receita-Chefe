
# Projeto de Receitas

Este projeto é um aplicativo web de receitas construído com React, utilizando o Firebase Firestore para armazenar e gerenciar receitas, além de integrar dados locais de um arquivo JSON. Os usuários podem adicionar, visualizar, e excluir receitas.
## Deploy link
 Link: https://receitasm.netlify.app/
## Funcionalidades

- **Listagem de Receitas**: Exibe uma lista de receitas armazenadas no Firestore e no arquivo `api.json`.
- **Adicionar Receitas**: Permite aos usuários adicionar novas receitas ao Firestore.
- **Excluir Receitas**: Usuários podem excluir receitas diretamente do Firestore.
- **Visualizar Receita**: Detalhes da receita, como ingredientes e modo de preparo, são exibidos em uma página separada.
- **Dados Mistos (Firestore e JSON)**: O app integra dados do Firestore e de um arquivo JSON local (`chefData`) para compor a lista de receitas.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construir a interface do usuário.
- **Firebase Firestore**: Banco de dados NoSQL utilizado para armazenar e gerenciar receitas.
- **React Router**: Utilizado para navegação entre páginas.
- **CSS**: Estilização personalizada para o layout e elementos visuais.
- **JSON**: Dados locais de receitas pré-carregadas no arquivo `api.json`.

## Instalação e Execução

### Pré-requisitos

- Node.js instalado na máquina.
- Conta no Firebase e um projeto criado.

### Passos para rodar o projeto:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Adri210/Receita-Chefe/
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e execute o comando:
   ```bash
   npm install
   ```

3. **Configure o Firebase**:
   - Crie um projeto no [Firebase](https://console.firebase.google.com/).
   - Configure o Firestore para habilitar o banco de dados.
   - Adicione o arquivo de configuração do Firebase em `src/Adicionar/firebaseconection.js` com suas credenciais.

   ```javascript
   // firebaseconection.js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "SUAS_CREDENCIAIS",
     authDomain: "SUAS_CREDENCIAIS",
     projectId: "SUAS_CREDENCIAIS",
     storageBucket: "SUAS_CREDENCIAIS",
     messagingSenderId: "SUAS_CREDENCIAIS",
     appId: "SUAS_CREDENCIAIS"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. **Rodar o projeto**:
   ```bash
   npm start
   ```

5. **Acesse o aplicativo**:
   Abra o navegador e vá para `http://localhost:3000`.

## Estrutura do Projeto

- **src/AdicionarReceita**: Componente responsável por adicionar receitas ao Firestore.
- **src/Home**: Componente que lista todas as receitas, tanto do Firestore quanto do arquivo JSON local.
- **src/Receitas**: Componente que exibe os detalhes de uma receita e permite excluí-la.
- **api.json**: Arquivo contendo uma lista de receitas locais.

## Rotas

- `/` : Página inicial, exibe a lista de todas as receitas.
- `/AdicionarReceita` : Página para adicionar novas receitas.
- `/receitas/:id` : Página que exibe os detalhes de uma receita selecionada.

## Como Adicionar Receitas

1. Acesse a página de adicionar receitas clicando no botão "Adicionar Receita" na página inicial.
2. Preencha o título, ingredientes (separados por vírgula) e o modo de preparo.
3. Clique no botão "Adicionar Receita". A receita será salva no Firestore.

## Como Excluir Receitas

1. Acesse os detalhes de uma receita clicando no título da receita na página inicial.
2. Na página de detalhes, clique no botão "Excluir Receita".
3. A receita será removida do Firestore e você será redirecionado à página inicial.

