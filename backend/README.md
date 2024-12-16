# NestJS + Prisma + SQLite Starter

Este projeto é uma aplicação básica usando [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/) e banco de dados SQLite. Ele serve como um ponto de partida para criar APIs REST modernas e escaláveis.

---

## Tecnologias Utilizadas

- **NestJS**: Framework para desenvolvimento de aplicações Node.js escaláveis.
- **Prisma ORM**: Ferramenta para gerenciamento de banco de dados e mapeamento objeto-relacional.
- **SQLite**: Banco de dados leve e rápido para desenvolvimento.
- **TypeScript**: Linguagem de programação com tipagem estática.

---

## Configurações do Ambiente

Certifique-se de ter as seguintes ferramentas instaladas:

1. [Node.js](https://nodejs.org/) (versão 18 ou superior)
2. [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

---

## Passos para Rodar o Projeto

### 1. Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nestjs-prisma-sqlite.git
cd nestjs-prisma-sqlite
```

### 2. Instalar Dependências

Instale as dependências do projeto:

```bash
npm install
```

### 3. Configurar o Banco de Dados

Este projeto utiliza SQLite como banco de dados. O arquivo de configuração do Prisma está localizado em `prisma/schema.prisma`.

#### 3.1. Configuração Inicial

Por padrão, o banco de dados será armazenado em um arquivo local chamado `dev.db`. Você pode ajustar isso no arquivo `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

#### 3.2. Gerar o Cliente Prisma

Gere o cliente Prisma a partir do esquema definido:

```bash
npx prisma generate
```

#### 3.3. Executar Migrações

Aplique as migrações ao banco de dados:

```bash
npx prisma migrate dev --name init
```

### 4. Rodar o Servidor

Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

---

## Testando a API

### 1. Endpoints Disponíveis

Você pode testar a API usando ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/). Caso o Swagger esteja configurado, você pode acessar a documentação interativa em:

```
http://localhost:3000/api
```

### 2. Exemplo de Requisições

#### Criar uma Tarefa (POST `/tasks`)
```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da tarefa",
}
```

#### Atualizar uma Tarefa (PATCH `/tasks/:id`)
```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da tarefa"
}
```

#### Atualizar Status de uma Tarefa (PATCH `/tasks/:id/status`)
```json
{
  "status": "in_progress"
}
```

#### Obter Todas as Tarefas (GET `/tasks?page=1&items=10`)

#### Remover uma Tarefa (DELETE `/tasks/1`)


---

## Scripts Disponíveis

- **`npm run start`**: Inicia o servidor em modo de produção.
- **`npm run start:dev`**: Inicia o servidor em modo de desenvolvimento.
- **`npm run prisma:studio`**: Abre o Prisma Studio para gerenciar os dados.
- **`npm run build`**: Compila o projeto TypeScript para JavaScript.

---


## Notas Finais

- Para modificar as entidades ou o esquema do banco de dados, edite o arquivo `prisma/schema.prisma` e execute os comandos `npx prisma migrate dev` e `npx prisma generate`.
- Consulte a [documentação oficial do Prisma](https://www.prisma.io/docs) para mais informações sobre recursos avançados.

Se tiver dúvidas ou sugestões, fique à vontade para contribuir com o projeto!

