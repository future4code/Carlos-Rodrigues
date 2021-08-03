# Herança e Polimorfismo

### Exercício 1

a) Não, pois é uma propriedade privada e não há nenhum getter para senha.

b) A mensagem do console.log é impressa a cada vez que for criada uma nova instância, a cada vez que é escrito ``` const xxx = new User(parametros) ``` é impresso um console.log.

### Exercício 2

a) A mensagem foi impressa uma vez, quando foi construída a instância.

b) A mensagem também foi impressa uma vez, pois como o Customer é uma subclasse de User, o construtor também passa pelo User.

### Exercício 3

a) Não, pois como é uma 'extensão' de User, sua senha também é privada.