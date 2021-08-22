# Introdução a Autentificação


## Exercício 1:
a) Sim, pois com strings podemos ter uma combinação de letras e números, sendo mais eficiente para criação de ids únicos.

## Exercício 2:

a) O código mencionado está criando uma váriavel `userTableName` que irá armazenar o nome da tabela aonde vamos inserir os dados a partir do query builder, após isso está sendo criada a conexão com o knex, para que seja possível haver a comunicação com o banco de dados, e por fim foi criado o endpoint `createUser`. Esse endpoint é uma função assíncrona que recebe como parâmetros `id, email e password`, todos como strings, e a partir da conexão com o knex e a tabela fornecida para o query builder irá inserir as informações no banco de dados descrito no arquivo `.env`, onde estão as informações do banco de dados.

## Exercício 3:

a) A sintaxe `as string` garante para o typescript que a informação que irá chegar vai vir como uma string, pois as vezes ela pode ser interpretada como outro tipo, como undefined.