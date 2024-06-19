# Sistema de Gerenciamento de Livraria

Este é um projeto de sistema de gerenciamento de uma livraria, desenvolvido utilizando Node.js e Express. O sistema permite a listagem de livros, compra de livros e cadastro de novos livros.

## Estrutura do Projeto

```
bookstore/
├── controllers/
│ └── bookController.js
├── entities/
│ └── Book.js
├── routes/
│ └── bookRoutes.js
├── useCases/
│ ├── listarLivros.js
│ ├── comprarLivro.js
│ └── cadastrarLivro.js
├── data/
│ └── books.json
├── app.js
└── package.json
```

## Dependências

- [Express](https://expressjs.com/)
- [Body-parser](https://github.com/expressjs/body-parser)

## Instalação

1. Clone o repositório:
```sh
   git clone https://github.com/PortelaD/Programacao-WEB-AT2-N2-2
```

2. Navegue até o diretório do projeto:

```sh
cd bookstore
```

3. Instale as dependências:

```sh
npm install
```

## Endpoints
1. Listar Todos os Livros
URL: /livros
Método: GET
Descrição: Retorna a lista de todos os livros cadastrados.

```sh
curl -X GET http://localhost:3000/livros
```

2. Comprar um Livro
URL: /comprar
Método: POST
Descrição: Realiza a compra de um livro, diminuindo o número de exemplares disponíveis.
Parâmetros do Corpo (JSON):
titulo: O título do livro a ser comprado.

```sh
curl -X POST http://localhost:3000/comprar \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Book One"}'
```

3. Cadastrar um Novo Livro
URL: /cadastrar
Método: POST
Descrição: Adiciona um novo livro ao sistema.
Parâmetros do Corpo (JSON):
titulo: O título do livro.
autor: O autor do livro.
genero: O gênero do livro.
imagem: A URL da imagem da capa do livro.

```sh
curl -X POST http://localhost:3000/cadastrar \
     -H "Content-Type: application/json" \
     -d '{
           "titulo": "Book Three",
           "autor": "Author Three",
           "genero": "Fantasy",
           "imagem": "image3.jpg"
         }'
```

## Estrutura do Código
### app.js
- Arquivo principal que configura e inicia o servidor Express.

### controllers/bookController.js
- Contém a lógica para manipulação dos livros (listar, comprar, cadastrar).

### entities/Book.js
- Define a entidade Book com seus atributos.

### routes/bookRoutes.js
- Define as rotas da aplicação e mapeia para os controladores.

### useCases/
- Contém as funções que implementam os casos de uso do sistema (listarLivros, comprarLivro, cadastrarLivro).

### data/books.json
- Arquivo JSON que armazena os dados dos livros.
