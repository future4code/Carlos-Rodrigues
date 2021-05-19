import axios from 'axios';
import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Users from './components/Users/Users';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    page: ""
  }

  componentDidMount() {
    this.getUsers()
  }
  onChangeName = (e) => {
    this.setState({inputName: e.target.value})
  }

  onChangeEmail = (e) => {
    this.setState({inputEmail: e.target.value})

  }
  
  onClickUsersList = () => {
    this.setState({page: "users"})
  }

  onClickBack = () => {
    this.setState({page: ""})
  }

  getUsers = () => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }

    axios.get(url, header)
    .then((res) => {
      this.setState({users: res.data})
    })
    .catch((err) => {
    })
  }

  createUsers = () => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    
    axios.post(url, body, header)
    .then(() => {
      alert("Usuário adicionado!")
      this.getUsers();
      this.setState({inputName: ""})
    })
    .catch((err) => {
      alert("Não foi possível adicionar o usuário.")
    })
  }

  deleteUser = (e) => {
    const del = window.confirm("Tem certeza que deseja remover o usuário?")
    if (del === true) {
      const id = e.target.value
      const header = {
        headers: {
          Authorization: "carlos-rodrigues-paiva"
        }
      }
  
      axios.delete(`${url}/${id}`, header)
      .then((res) => {
        alert("Usuário removido")
        this.getUsers()
      })
      .catch((err) => {
        alert(err)
      })
    }
     else {
       alert("Operação cancelada.")
     } 
    }
  
  render() {
    
    const showPage = () => {
      if (this.state.page === "") {
        return <SignUp 
        inputName={this.state.inputName}
        inputEmail={this.state.inputEmail}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        createUsers={this.createUsers}
        onClickUsersList={this.onClickUsersList}
        />     
      } else if (this.state.page === "users") {
        return <Users
        onClickBack={this.onClickBack}
        namesList={this.namesList}
        users={this.state.users}
        deleteUser={this.deleteUser}
        />      
      }
    }

    return (
      <div>
        {showPage()}
      </div>
    );
  }
}

