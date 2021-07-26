# Aprofundamento SQL 

## Exercício 1:

a) `ALTER TABLE Actor DROP COLUMN salary;` 
<br/>
Esse comando irá excluir a coluna de salário da tabela Actor.

b) `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`
<br/>
Esse comando irá trocar o nome da coluna "gender" por "sex".

c) `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`
<br/>
Esse comando irá trocar o tipo da coluna gender de um `VARCHAR` de 6 caracteres para um de 255.

## Exercício 2:

a)
```
UPDATE Actor 
SET name = "Isis Valverde", birth_date = "1987-02-17"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```
UPDATE Actor
SET name = "Fatima Bernardes", salary = 2000000,  birth_date = "1962-09-17"
WHERE id = "005";
```

d) Aparece a resposta de que o método deu certo, mas não faz nenhuma alteração, já que não existe essa linha da tabela.

## Exercício 3:

a) 
```
DELETE FROM Actor
WHERE name = "Fatima Bernardes";
```

b)
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

## Exercício 4:

a)
```
SELECT MAX(salary) FROM Actor;
```

b)
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```

c)
```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

d)
```
SELECT SUM(salary) FROM Actor;
```

## Exercício 5:

a) Essa query está usando o método `SELECT` junto com a função `COUNT` e `GROUP BY` para fazer a contagem dos atores por gênero e mostrando quantos pertencem a cada grupo.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) 
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

## Exercício 6:

a)
```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie
CHANGE rating rating FLOAT NOT NULL;
```

c)
```
UPDATE Movie
SET playing_limit_date = "2021-10-25"
WHERE id = "001";
```

```
UPDATE Movie
SET playing_limit_date  = "1949-01-01"
WHERE id = "002";
```

d) Aparece a resposta de que o método deu certo, mas não faz nenhuma alteração, já que não existe essa linha da tabela.

## Exercício 7:

a)
```
SELECT COUNT(*),  FROM Movie
WHERE rating > 7.5;
```

b)
```
SELECT AVG(rating) FROM Movie;
```

c) 
```
SELECT COUNT(*) FROM Movie;
```

d)
```
SELECT COUNT(*) FROM Movie
WHERE CURDATE() < release_date;
```

e)
```
SELECT MAX(rating) FROM Movie;
```

f)
```
SELECT MIN(rating) FROM Movie;
```

## Exercício 8:

a)
```
SELECT * FROM Movie
ORDER BY title ASC;
```

b)
```
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```

c)
```
SELECT * FROM Movie
ORDER BY release_date DESC
LIMIT 3;
```

d)
```
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```

