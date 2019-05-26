<div align="center">
  <img src="./front/public/img/icons/android-chrome-192x192.png" alt="logo">
  <h1>Vue Memory Game</h1>
</div>

<p align="center">
  Vue Memory Game é um jogo de memória desenvolvido com Vue.js e Express (para um controle básico de usuários e rank).
</p>

## Dependências (principais)

### Front-end

* Vue.js 2.6+
* Vuex
* Vue-Router
* JSX
* SASS
* Axios
* Cypress
* Jest
* V Lazy Image
* Vue Socket Io

**Obs:** O front-end segue Standard ESLint e Stylelint

### Back-end

* Express
* Mongoose
* Socket.io
* Nodemon

## Desenvolvimento

### Configuração

#### Front-end

Todo o front-end está na pasta `front`

---------------------------------------------------------------------------------------

##### Instalação: Sem Docker / Docker-compose

Se você **possui** `Node v8.11.0+` instalado em sua máquina, execute os comandos abaixo:

Dentro da pasta front (`cd front`) execute `npm install`

---------------------------------------------------------------------------------------

##### Instalação: Com Docker / Docker-compose

Execute `docker-compose up -d` para subir os containers

Já existe um `command` onde irá executar o comando `npm install`

Caso ocorra algum problema, para entrar execute `docker-compose exec vue /bin/sh` para entrar dentro do container do front-end

Para sair do container execute `exit`

---------------------------------------------------------------------------------------

Execute `docker-compose down && docker-compose up -d` para reiniciar o servidor

Por padrão o front-end é executado na porta `8080`

Em caso de problemas com o `SASS`, execute o comando dentro da pasta front: `npm rebuild node-sass`

Ou dentro do container `docker-compose exec vue /bin/sh && npm rebuild node-sass`

#### Back-end

Todo o back-end está na pasta `api` na raíz

---------------------------------------------------------------------------------------

##### Instalação: Sem Docker / Docker-compose

Se você **possui** `Node v8.11.0+` instalado em sua máquina, execute os comandos abaixo:

Dentro da pasta api (`cd api`) execute `npm install`

---------------------------------------------------------------------------------------

##### Instalação: Com Docker / Docker-compose

Execute `docker-compose up -d` para subir os containers

Já existe um `command` onde irá executar o comando `npm install`

Caso ocorra algum problema, para entrar execute `docker-compose exec api /bin/sh` para entrar dentro do container do back-end

Para sair do container execute `exit`

---------------------------------------------------------------------------------------

Execute `docker-compose down && docker-compose up -d` para reiniciar o servidor

Por padrão ele é executado na porta `3000`

Para acessar diretamente o back-end, acesse `http://localhost/3000`

**Obs**: Caso não utilize `Docker` / `Docker-compose`, você deverá modificar a configuração do `MongoDB`, caso queria utilizar o ranking de usuários

## Informação das rotas

### Front-end

Rota | Descrição
--- | ---
/ | Rota principal do jogo
/* | Página não encontrada

### Back-end

Método | Rota | Descrição |
--- | --- | ---
GET | /users | Busca todos os usuários, ordenados pela quantidade de movimentos
POST | /users | Salva um novo usuário

**Obs**: Há também uma emissão de `WS` chamada de `usersEmit`, com o objetivo de atualizar o ranking automaticamente

## Testes

### Front-end

### Jest

Este projeto contém alguns testes com Jest. Execute o comando `npm run test:unit`, dentro da pasta front

#### Cypress (E2E)

Este projeto contém apenas 1 teste básico E2E (end-to-end) com Cypress

Execute o comando `npm run test:e2e` em outra aba de seu terminal, dentro da pasta front