# Relações em SQL

### Exercício 1:

a) A chave estrangeira é um meio relacionar uma tabela com outra, ela serve para identificar a "quem pertence" determinado dado, usando a Primary Key como referência.

b) 
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"004",
    "Bom",
    6,
    "005"
);
```

c) `Erro de código: 1452. Não pode adicionar ou atualizar linha filha: a restrição de chave estrangeira falhou.`

d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```

e) `Erro de código: 1054. Coluna 'rating' desconhecida na condição WHERE.`

### Exercício 2:

a) Essa tabela possui como valores para coluna duas variáveis VARCHAR(255), a movie_id e a actor_id, que estarão relacionadas ao id das tabelas Movie e Actor, respectivamente.

b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "003"
);
```

c) `Erro de código: 1452. Não pode adicionar ou atualizar linha filha: a restrição de chave estrangeira falhou.`

d) `Erro de código: 1451. Não pode deletar linha pai: a restrição de chave estrangeira falhou.`


### Exercício 3:

a) O operador `ON` serve para referenciar quais colunas de quais tabelas irão se juntar.

b) 
```
SELECT movie_id, rate, Movie.title FROM Rating
JOIN Movie ON Movie.id = Rating.movie_id;
```
