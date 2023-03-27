# AppLista_ReactNative

Aplicação desenvolvida utilizando a tecnologia React Native. Essa aplicação implementa uma lista que permite, criar, ler e deletar itens. Todas as informações são armazenadas utilizando o MySQL.

1. [Imagens da Aplicação](#head1)
2. [Tecnologias](#head2)
3. [Como Executar](#head3)

# <span id="head1">1. Imagens da Aplicação<span/>
## 1.1. Tela Inicial
<img src="https://github.com/GustavoHFMO/AppLista_ReactNative/blob/master/client/assets/A.jpeg" width="150">

## 1.2. Escrendo um Elemento
<img src="https://github.com/GustavoHFMO/AppLista_ReactNative/blob/master/client/assets/B.jpeg" width="150">

## 1.3. Armazenando e Listando o Elemento
<img src="https://github.com/GustavoHFMO/AppLista_ReactNative/blob/master/client/assets/C.jpeg" width="150">

## 1.4. Pressionando um Elemento para Excluí-lo.
<img src="https://github.com/GustavoHFMO/AppLista_ReactNative/blob/master/client/assets/D.jpeg" width="150">

## 1.5. Atualizando a Lista de Itens
<img src="https://github.com/GustavoHFMO/AppLista_ReactNative/blob/master/client/assets/E.jpeg" width="150">

# <span id="head2">2. Tecnologias<span/>
* client
  * [axios](http://nodejs.org/docs/latest/api/path.html)
  * [react-icons](https://react-icons.github.io/react-icons/)
  * [expo](https://docs.expo.dev/)
   

* server
  * [cors](https://github.com/expressjs/cors#readme)
  * [express](http://expressjs.com/)
  * [mysql](https://github.com/mysqljs/mysql)
  * [nodemon](https://nodemon.io)
  * [axios](http://nodejs.org/docs/latest/api/path.html)
  


# <span id="head3">3. Como Executar<span/>
```
# Clonando o repositório
$ https://github.com/GustavoHFMO/AppLista_ReactNative.git

# Acessando o repositório de cliente
$ cd AppLista_ReactNative/client/

# Instalando as dependências
$ yarn install 

# Executando a aplicação
$ npx expo start

# Executar a query para criar a base de dados no MySQL Workbench
$ AppLista_ReactNative/server/sql - criar banco.sql

# Acessando o repósitorio de server
$ cd AppLista_ReactNative/server/

# Instalando as dependências
$ yarn install 

# Executando o servidor
$ npm run dev
```
