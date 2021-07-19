# Banco de dados e Introdução a SQL

## Exercício 1:

a) VARCHAR: Utilizado para representarmos caracteres;
PRIMARY KEY: Utilizado para informar que o dado em questão é um meio de diferenciar uma informação de outra, um meio de identificar o dado;
DATE: Utilizado para representar o formato de data.

b) O comando `SHOW DATABASES` serve para mostrar cada DATABASE no schema, enquanto o `SHOW TABLES` mostra as tabelas.

c) É mostrado um resultado informando cada campo da tabela, o tipo do conteúdo, se é null ou não, sua chave e seu valor padrão.

## Exercício 2:

a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
)
```

b) Erro de código: 1062. Entrada duplicada '002' para a chave 'primária'.
<br/>
Erro devido a dois valores de id iguais.

c) Erro de código: 1136. Contagem da coluna não corresponde valor de contagem da linha 1.
<br/>
Erro devido a ser passado um valor a mais para inserção do que foi passado de parâmetros para colunas.

d) Erro de código: 1364. Campo nome não possui um valor padrão.

e) Erro de código: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
<br/>
Erro devido a data ter sido passada como número ao invés de string.

## Exercício 3:

a) `SELECT * FROM Actor WHERE gender = "female"` 

b) `SELECT salary FROM Actor WHERE name = "Tony Ramos"`

c) `SELECT * FROM Actor WHERE gender = "invalid"`
<br/>
O resultado foi a última linha com os valores padrões das variáveis.

d) `SELECT * FROM Actor WHERE salary < 500000`

e) Erro de código: 1054. Coluna desconhecida 'nome' na 'lista de campo'. 
<br/>
Erro ocorreu, porque ao invés de procurar pelo campo 'name' foi colocado 'nome'.
<br/>
`SELECT id, name from Actor WHERE id = "002"`

## Exercício 4: 

a) 
```
SELECT * FROM Actor 
WHERE (name LIKE  "A%" OR name LIKE "J%") AND salary > 300000
```

A query acima está usando o método `SELECT` para retornar todas as informações dos atores, usando como informações para pesquisa a letra inicial do nome ser A ou J e o salário ser maior do que R$ 300.000,00

b) 
```
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor 
WHERE name LIKE "%G%";
```

d) 
```
SELECT * FROM Actor 
WHERE (name LIKE "%G%" OR name LIKE "%A%") AND  (salary BETWEEN 350000 AND 900000);
```

## Exercício 5: 

a) 
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
	rating TINYINT NOT NULL
);
```

b) 
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c) 
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d) 
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
	"004",
    "Meu passado me condena",
    "Quando Fábio e Miá se encontram, é amor à primeira vista. Eles se casam um mês depois de se conhecerem e decidem viajar à Europa em um cruzeiro em lua de mel. Só que, durante a viagem, eles encontram seus antigos namorados, Beto e Laura, que hoje estão juntos e também passam sua lua de mel.",
    "2013-10-25",
    7
);
```

## Exercício 6: 

a) 
```
SELECT id, name, rating FROM Movie
WHERE id = "001";
```

b) 
```
SELECT * FROM Movie
WHERE name = "Se eu Fosse Você";
```

c) 
```
SELECT id, name, synopsis FROM Movie
WHERE rating > 7 ;
```

## Exercício 7:

a)
```
SELECT * FROM Movie
WHERE name LIKE "%vida%";
```

b) 
```
SELECT * FROM Movie
WHERE name OR synopsis LIKE "%TERMO DE BUSCA%";
```

c) 
```
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE();
```

d) 
```
SELECT * FROM Movie
WHERE release_date <= CURRENT_DATE() AND (name OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```