# Herança

### Exercício 1

a) Não, pois é uma propriedade privada e não há nenhum getter para senha.

b) A mensagem do console.log é impressa a cada vez que for criada uma nova instância, a cada vez que é escrito ``` const xxx = new User(parametros) ``` é impresso um console.log.

### Exercício 2

a) A mensagem foi impressa uma vez, quando foi construída a instância.

b) A mensagem também foi impressa uma vez, pois como o Customer é uma subclasse de User, o construtor também passa pelo User.

### Exercício 3

a) Não, pois como é uma 'extensão' de User, sua senha também é privada.

# Polimorfismo

### Exercício 1

a) Todas as informações são impressas normalmente.

### Exercício 2

a) ```Não é possível criar uma instância de uma classe abstrata.```

b) Criar uma instância que seja uma extensão da classe abstrata.


### Exercício 4

a) Os métodos de acessar o CPF, por ser uma propriedade privada não pode ser acessado diretamente e também o método de calcular a conta.

### Exercício 5

a) Ambas implementam o Client e são extensões do tipo de lugar que representam, e além disso possuem métodos equivalentes.

b) O valor usado para calcular a conta e a propriedade quantidade de andares.

### Exercício 6

a) Industry, por causa da propriedade machinesQuantity. 

b) A interface Client, pois ela trás as informações de nome, número de registro, energia consumida e o método de calcular a conta.

c) 