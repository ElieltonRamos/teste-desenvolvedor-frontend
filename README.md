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

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Docker](https://www.docker.com/get-started/)

[MySQL](https://www.mysql.com/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Índice

- [Ambiente de Desenvolvimento](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)
- [Licença](#licença)

## Ambiente de Desenvolvimento

Para desenvolver e executar esta aplicação, é necessário configurar um ambiente com as seguintes ferramentas:

**Docker**: Utilizamos o Docker para empacotar e isolar a aplicação em contêineres, garantindo uma implantação consistente e fácil gerenciamento de dependências.

**Node.js**: A aplicação é desenvolvida em Node.js, uma plataforma de tempo de execução JavaScript, e é necessária para executar o código.

**Docker Compose**: O Docker Compose é uma ferramenta que simplifica a definição e o gerenciamento de serviços multi-contêiner em um único arquivo, ideal para orquestrar contêineres relacionados à aplicação.

Certifique-se de instalar e configurar essas ferramentas em seu ambiente de desenvolvimento antes de iniciar o projeto.

## Instalação

Clone este repositório:

   ```bash
   git clone git@github.com:ElieltonRamos/project-api-talker-manager.git
   ```

Navegue até o diretório do projeto:

   ```bash
cd project-api-talker-manager
   ```

Instale as dependências:

   ``` bash
npm install
   ```

Inicie o docker compose:

   ``` bash
docker compose -up -d
   ```

Inicie a aplicação:

   ``` bash
docker exec -it talker_manager bash
npm start
   ```

## Testes

O projeto conta com testes que verificam o funcionamento de cada rota da API, os testes foram escritos com JEST, lembrando que e necessario que o docker compose tenha sido executado para que os containers da apricação estejam online para que os testes funcionem.

Para executar os testes siga os seguintes passos:

Abra o terminal na raiz do projeto

Execute o comando:

   ``` bash
docker exec -it talker_manager bash
   ```

Agora, dentro do container do node, execute:

   ``` bash
npm test
   ```

Verifique a saida dos testes no seu terminal

## Uso

Explore as rotas essenciais desta API, incluindo autenticação, operações de CRUD e funcionalidades de pesquisa para uma administração eficaz dos palestrantes.

1. **GET /talker**
   - Retornar lista de palestrantes.
   - Se não houver palestrantes, retornar array vazio.

2. **GET /talker/:id**
   - Retornar palestrante com base no ID.
   - Retornar 404 se o palestrante não existir.

3. **POST /login**
   - Retornar token aleatório de 16 caracteres.
   
4. **Validações para /login**
   - Validar campos e retornar 400 com mensagem de erro, em caso de dados inválidos.

5. **POST /talker**
   - Criar novo palestrante.

6. **PUT /talker/:id**
   - Atualizar informações de um palestrante.

7. **DELETE /talker/:id**
   - Excluir um palestrante.

8. **GET /talker/search?q=searchTerm**
   - Implementar pesquisa com base em um termo de consulta.

9. **GET /talker/search?rate=rateNumber**
   - Implementar pesquisa por classificação.

10. **GET /talker/search?date=watchedDate**
    - Implementar pesquisa por data de visualização.

11. **PATCH /talker/rate/:id**
    - Atualizar a classificação de um palestrante.

12. **GET /talker/db**
    - Utilizar um banco de dados MySQL para listar palestrantes.

## Estrutura do Projeto

A seguir esta explicada a estrutura de pastas do projeto

project-api-talker-manager/ : A pasta raiz do projeto.<br>
├── node_modules/ : Contém as dependências da aplicação.<br>
├── tests/ : Contém os testes do projeto.<br>
├── src/ : O diretório principal do código-fonte da aplicação, onde estão localizados os middlewares, modelos de dados e definições das rotas da API.<br>
│   ├── middlewares/<br>
│   ├── models/<br>
│   ├── routes/<br>
├── index.js : O arquivo principal que inicia o servidor e configura as rotas da API.<br>
├── talker.json : Pode conter dados iniciais ou de exemplo para palestrantes.<br>
├── package.json : Descreve as dependências e configurações do projeto.<br>
├── README.md : A documentação do projeto.<br>
├── docker-compose.yml : Utilizado para configurar e executar a aplicação em contêineres Docker.<br>
├── DockerFile : Contém instruções para a criação de uma imagem Docker para a aplicação.<br>
├── Jest.config.js : Configurações para testes com o framework Jest.<br>
├── seed.sql : Um arquivo SQL usado para preencher o banco de dados com dados iniciais.<br>

## Contato

Elielton Ramos

[![Envie-me um e-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)

## Contribuição

Este projeto foi desenvolvido durante meu curso na [Trybe](https://www.betrybe.com/) com base no projeto 'Talker Manager'. A Trybe é uma escola de programação que tem compromisso com o sucesso profissional. O projeto 'Talker Manager' é parte do módulo de Back-End e envolve a criação de uma API com Express, Node, Docker e MySQL.

## Licença

Código Aberto (Open Source)

Este projeto é de código aberto e está disponível para toda a comunidade. Fique à vontade para explorar, clonar e contribuir para o projeto.

## Agradecimentos

Sou grato à [Trybe](https://www.betrybe.com/) por proporcionar esse desafio enriquecedor e pela oportunidade de aprimorar minhas habilidades como desenvolvedor. Estou empolgado para aplicar os conhecimentos adquiridos em projetos futuros e continuar minha jornada de desenvolvedor web.







[![](https://dotlib.com/theme/img/logos/logo.png)](https://www.dotlib.com)

# Descrição da vaga de Desenvolvedor Frontend Jr.

Buscamos profissionais que sejam apaixonados por desenvolvimento, inovação e novas tecnologias, para integrar nosso time em projetos baseados em Laravel, Node.js, React e React Native.

[Oportunidades Dotlib](https://github.com/Dotlib-BR/oportunidades)

## Requisitos

### Obrigatórios:

- Experiência em desenvolvimento de sites em React
- Consumo de APIs RESTful
- SASS e Flexbox
- API Contexts e Hooks
- Controle de versões (GIT)

### Bônus:

- Conhecimentos em Docker
- Conhecimentos em Typescript
- Conhecimentos em Node.js
- Conhecimentos em testes automatizados com Cypress
- Experiência em metodologias ágeis (Scrum/Kanban)

## Como se candidatar

Para se candidatar, basta acessar a url e realizar o teste para a vaga:

- [Teste para Desenvolvedor Frontend Jr.](teste-frontend.md)
