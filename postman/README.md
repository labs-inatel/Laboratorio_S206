# S206 - Qualidade de Software

- Repositório para registro de projetos e exercícios desenvolvidos nas aulas.
- Instituto Nacional de Telecomunicações - Inatel.
- Curso: Engenharia de Software.
- Elaborado por: Iza Lopes.

## Exercicio02 - Lista de testes de API com Postman: 

<br>

<div> 
  <img align="left" alt="picture" width="300em" src= "https://github.com/Izalp/Laboratorio_S206/assets/102091381/3b564617-6687-4047-b008-5eefcc52860f"> 
  <p align="left">Projeto desenvolvido para realização de testes de API no site <a href= "https://restful-api.dev/"> RESTFUL-API</a> utilizando a ferramenta de automação de teste <a href= "https://www.postman.com/"> Postman</a>.
  </p>
</div>

<br>
<br>
<br>
<br>

<div align="left">   
  <img src= "https://img.shields.io/badge/-postman-%23E5E5E5?style=for-the-badge&logo=postman&logoColor=058a5e">   
  <img src= "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">      
  <img src= "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">   
  <img src= "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"> 
</div> 
  
## Sumário:

1. [Cenários de teste](#cenários-de-teste)
2. [Pré-requisitos](#pré-requisitos)
3. [Como executar](#como-executar)
4. [Relatório de testes](#relatório-de-testes)

## Cenários de teste

O objetivo é testar a API [RESTFUL-API](https://restful-api.dev/) com os seguintes cenários de teste:

1. *__Cenário:__ Verificar a listagem de todos os objetos*

   - *__Descrição:__* Verificar se é possível listar todos os objetos disponíveis.
   - *__Método:__* GET
   - *__Endpoint:__* ```https://api.restful-api.dev/objects```
   - *__Critérios de Aceitação dos testes:__*
     - Status code deve ser 200.
     - O tipo de conteúdo deve ser application/json.
     - O corpo da resposta não deve estar vazio.
     - O corpo da resposta deve ser um JSON válido.
    
---

2. *__Cenário:__ Filtrar objetos por IDs específicos*

   - *__Descrição:__* Verificar se é possível filtrar objetos por IDs específicos.
   - *__Método:__* GET
   - *__Endpoint:__* ```https://api.restful-api.dev/objects?id=3&id=5&id=10```
   - *__Critérios de Aceitação dos testes:__*
     - Status code deve ser 200.
     - O corpo da resposta não deve estar vazio.
     - O tipo de conteúdo deve ser application/json.

---

3. *__Cenário:__ Buscar objeto por ID específico*

   - *__Descrição:__* Verificar se é possível buscar um objeto específico por seu ID.
   - *__Método:__* GET
   - *__Endpoint:__* ```https://api.restful-api.dev/objects/7```
   - *__Critérios de Aceitação dos testes:__*
     - Status code deve ser 200.
     - O corpo da resposta deve ser um JSON válido.
     - O tipo de conteúdo deve ser application/json.

---

4. *__Cenário:__ Criar um novo objeto*

   - *__Descrição:__* Verificar se é possível criar um novo objeto.
   - *__Método:__* POST
   - *__Endpoint:__* ```https://api.restful-api.dev/objects```
   - *__Corpo de requisição:__*
   ```
   {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
      }
   }
   ```
   - *__Critérios de Aceitação dos testes:__*   
     - Status code deve ser 200.       
     - O tipo de conteúdo deve ser application/json.   
     - Deve ser capturado o ID do objeto criado para testes futuros.

---

5. *__Cenário:__ Atualizar um objeto existente*

   - *__Descrição:__* Verificar se é possível atualizar um objeto existente.
   - *__Método:__* PUT
   - *__Endpoint:__* ```https://api.restful-api.dev/objects/{{objectId}}```
   - *__Corpo de requisição:__*
   ```
   {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"
      }
   }
   ```
   - *__Critérios de Aceitação dos testes:__*
     - Status code deve ser 200.
     - O tipo de conteúdo deve ser application/json.
     - Deve ser tratado corretamente o manejo de erros.

---

6. *__Cenário:__ Atualizar parcialmente um objeto existente*

   - *__Descrição:__* Verificar se é possível atualizar parcialmente um objeto existente.
   - *__Método:__* PATCH
   - *__Endpoint:__* ```https://api.restful-api.dev/objects/{{objectId}}```
   - *__Corpo de requisição:__*
   ```
   {
   "name": "Apple MacBook Pro 17"
   }
   ```
   - *__Critérios de Aceitação dos testes:__*
     - Status code deve ser 200.
     - O tipo de conteúdo deve ser application/json.
     - Deve ser tratado corretamente o manejo de erros.

---

7. *__Cenário:__ Excluir um objeto existente*

   - *__Descrição:__* Verificar se é possível excluir um objeto existente.
   - *__Método:__* DELETE
   - *__Endpoint:__* ```https://api.restful-api.dev/objects/{{objectId}}```
   - *__Critérios de Aceitação dos testes:__*
     - Deve ser verificado se a operação de exclusão foi bem-sucedida (Status 200) ou se o objeto não existe (Status 404).

---

Estes cenários de teste abrangem diversas funcionalidades da API [RESTFUL-API](https://restful-api.dev/), garantindo que todas as operações CRUD (Create, Read, Update, Delete) funcionem conforme esperado e que erros sejam tratados adequadamente.


## Pré-requisitos

- Instalar o Postman

Link para download direto: https://www.postman.com/jp/downloads/

- Instalar o Node.js

Link para download direto: https://nodejs.org/en/download/prebuilt-installer

## Como executar

1. Clone este repositório na sua máquina;
2. Instalar o Postman;
3. Importar o arquivo ```RESTFUL-API.postman_collection.json```;
4. Para executar a collection ```RESTFUL-API```, clique na opção ```Run``` que se encontra no canto direito superior da Workspace:

<div align= "center"> 
  <img alt="picture" width="600em" src= "https://github.com/Izalp/Laboratorio_S206/assets/102091381/bf2c1834-f8db-44cc-bb14-a2da38428dc4"> 
</div>

<br>

5. Em seguida, clique no botão laranja ```Run RESTFUL-API```:

<div align= "center"> 
  <img alt="picture" width="600em" src= "https://github.com/Izalp/Laboratorio_S206/assets/102091381/2c0c3c6c-cba0-4939-a6fa-ea11e1e3a0d9"> 
</div>

## Relatório de testes

O relatório de testes gerado pelo [Newman](https://www.npmjs.com/package/newman-reporter-htmlextra) oferece uma visão abrangente da execução dos testes, permitindo uma análise detalhada dos resultados. Para gerar o relatório de testes pelo [Newman](https://www.npmjs.com/package/newman-reporter-htmlextra):

- Instale a dependência pelo comando:

```
npm install -g newman-reporter-htmlextra
```

- Para exibir o relatório de testes pelo navegador, no terminal, execute o comando a seguir dentro da pasta __postman__:

```
newman run "RESTFUL-API.postman.collection.json" -r htmlextra
```

Ao executar este comando, será gerado um arquivo ```RESTFUL-API-data-horario-ID.html``` contendo o relatório de testes do Exercicio02.
