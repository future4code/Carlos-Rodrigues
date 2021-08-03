// Exercício 1

// a) O construtor é usado para "iniciar" a classe, ele é usado quando queremos definir algo no momento em que
// a classe é criada, exemplo, atribuir um valor para algum item, definir uma ação ou algo do tipo.

// b) Para cada instância da classe que é criada, a mensagem é mostrada no console uma vez.

// c) Por meio de funções que devem ser públicas declaradas dentro do construtor utilizando as propriedades.

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string,
    ) {
        this.description = description,
        this.value = value,
        this.date = date
    }
}



class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

const user = new UserAccount('ab', 'carlos', 24)

class Bank {
    private accounts: UserAccount[]
    constructor (accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccount() {
        return this.accounts
    }
}