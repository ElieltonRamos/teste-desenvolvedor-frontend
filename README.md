<div align="center">

# Project Bulario Dot Lib
[![](https://dotlib.com/theme/img/logos/logo.png)](https://www.dotlib.com)

</div>

Este Projeto e a resolução de um desafio tecnico proposto pela [Dot Lib](https://www.dotlib.com/), o desafio consiste em criar uma uma interface frontend para um sistema de gerenciamento de bulas de medicamentos, e possivel visualizar os medicamentos, pesquisar por nome e laboratorio, alem de uma pagina com detalhes de um medicamento e links para downloads das bulas. Desenvolvi este projeto utilizando Vite, React, Typescript, Css e consumindo uma API.

<p align="center">
  <img src="./public/tela inicial.png" alt="homepage" width="300px">
  <img src="./public/detalhes-medicamento.png" alt="page details" width="300px">
</p>

## Tecnologias Utilizadas

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node" width="50px" height="30px"> [Node JS](https://nodejs.org/en/docs)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Express" width="30px" height="30px"> [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript" width="30px" height="30px"> [TypeScript](https://www.typescriptlang.org/)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" width="30px" height="30px"> [React](https://pt-br.reactjs.org/)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt="CSS" width="30px" height="40px"> [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

<img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*DyJgsUtNRuAkiwr5" width="30px" height="30px"> [Vitest](https://vitejs.dev/)

<img src="https://pt.vitejs.dev/logo.svg" alt="vite" width="30px" height="30px"> [Vite](https://vitejs.dev/)

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZWil3CMPi_oxEgTaf16tBnG9ZobYXWk06w&s" width="30px" height="30px"> [Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Índice

- [Ambiente de Desenvolvimento](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)
- [Licença](#licença)

## Ambiente de Desenvolvimento

Para desenvolver e executar esta aplicação, é necessário configurar um ambiente com as seguintes ferramentas:

**Node.js**: A aplicação é desenvolvida em Node.js, uma plataforma de tempo de execução JavaScript, e é necessária para executar o código.

   - [Instalação do Node.js](https://nodejs.org/pt-br/download/)

Certifique-se de instalar e configurar essas ferramentas em seu ambiente de desenvolvimento antes de iniciar o projeto.

## Instalação

Clone este repositório:

   ```bash
   git clone git@github.com:ElieltonRamos/teste-desenvolvedor-frontend.git
   ```

Navegue até o diretório do projeto:

   ```bash
cd teste-desenvolvedor-frontend
   ```

Inicie a API:

   ``` bash
   npx json-server api/dotlib.json -s ./api/public
   ```

Em outro terminal Instale as dependências:

   ``` bash
cd frontend-bulario && npm install
   ```

Inicie o servidor de desenvolvimento:

   ``` bash
npm run dev
   ```

## Testes

O projeto conta com testes que verificam o funcionamento do frontend, existem testes para verificar se a aplicação esta renderizando corretamente, se a busca por medicamentos esta funcionando, se a pagina de detalhes de um medicamento esta funcionando e se os links para download das bulas estão funcionando.

Para executar os testes siga os seguintes passos:

Abra o terminal na raiz do projeto

Execute o comando:

   ``` bash
cd frontend-bulario && npm test
   ```

Verifique a saida dos testes no seu terminal

## Uso

Para utilizar a aplicação, acesse o endereço [http://localhost:5173](http://localhost:5173) em seu navegador.

A aplicação exibe uma lista de medicamentos, com opções de pesquisa por nome e laboratório. Clique em um medicamento para ver detalhes e links para download das bulas.
A aplicação também conta com um botão de voltar para a pagina inicial.
A aplicação é responsiva e se adapta a diferentes tamanhos de tela.
A aplicação conta com testes que verificam o funcionamento do frontend.

## Estrutura do Projeto

A seguir esta explicada a estrutura de pastas do projeto

project-api-talker-manager/ : A pasta raiz do projeto.<br>
├── api/ : Pasta com os arquivos da API.<br>
│   ├── public/ : Pasta com os arquivos estáticos da API.<br>
│   ├── dotlin.json : Arquivo com os dados dos medicamentos.<br>
├── frontend-bulario/ : Pasta com os arquivos do frontend.<br>
├── public/ : Pasta imagens do readme.<br>
├── README.md : Arquivo com a documentação do projeto.<br>
├── .github/ : Pasta com arquivos de configuração do GitHub.<br>

## Contato

Elielton Ramos

[![Envie-me um e-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)

## Licença

Código Aberto (Open Source)

Este projeto é de código aberto e está disponível para toda a comunidade. Fique à vontade para explorar, clonar e contribuir para o projeto.

## Agradecimentos

Agradeço a [Dot Lib](https://www.dotlib.com/) pela oportunidade de participar do processo seletivo e desenvolver este projeto.