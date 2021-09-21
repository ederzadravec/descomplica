## Teste Descomplica

### Dependencias

É necessário ter um banco de dados MYSQL disponível para rodar essa aplicação

### API

Para executar a api, abra a pasta `api` no terminal e execute `yarn install`;

Feito isso, crie o arquivo `.env` com base no `.env.develop`;

Execute `yarn knex migrate:latest` para criar a estrutura de tabelas no banco de dados MYSQL;

Execute `yarn dev` para iniciar a API

### WEB

Para executar o site web, abra a pasta `web` no terminal e execute `yarn install`;

Feito isso, crie o arquivo `.env` com base no `.env.develop`;

Execute `yarn dev` para iniciar o site WEB
