import axios from 'axios';
import React from 'react';
import SignUp from './components/SignUp/SignUp';
import UserDetail from './components/UserDetail/userdetail';
import Users from './components/Users/Users';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    page: "",
    usersDetail: [],
    edit: false,
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
  
  onClickEdit = () => {
    this.setState({edit: true})
  }

  getUsers = async() => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    
    try {
      const res = await axios.get(url, header)
      this.setState({users: res.data})
    } catch (err) {
      alert(err)
    }
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
      this.setState({inputEmail: ""})
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

  onClickUserDetail = (e) => {
    const id = e.target.value

    this.setState({page: "userdetail"})

    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
  
    axios.get(`${url}/${id}`, header)
    .then((res) => {
      this.setState({usersDetail: res.data})
      this.getUsers()
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  onClickSave = (e) => {
    const id = e.target.value
    
    this.setState({edit: false})
    
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }
    
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.put(`${url}/${id}`, body, header)
    .then((res) => {
      alert("Usuário alterado com sucesso!")
      this.setState({inputName: ""})
      this.setState({inputEmail: ""})
      this.getUsers()
    })
    .catch((err) => {
      console.log(err.response)
    })
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
        onClickUserDetail={this.onClickUserDetail}
        />      
      } else if (this.state.page === "userdetail") {
        return <UserDetail
        onClickUsersList={this.onClickUsersList}
        usersDetail={this.state.usersDetail}
        onClickSave={this.onClickSave}
        onClickEdit={this.onClickEdit}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        edit={this.state.edit}
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

