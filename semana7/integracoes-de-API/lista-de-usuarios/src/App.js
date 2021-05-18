import axios from 'axios';
import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Users from './components/Users/Users';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {
  state = {
    user: [],
    inputName: "",
    inputEmail: "",
    page: ""
  }

  onChangeName = (e) => {
    this.setState({inputName: e.target.value})
  }

  onChangeEmail = (e) => {
    this.setState({inputEmail: e.target.value})

  }

  onClickBack = () => {
    this.setState({page: ""})
  }

  onClickUserList = () => {
    this.setState({page: "users"})
  }
  
  getUsers = () => {
    const header = {
      headers: {
        Authorization: "carlos-rodrigues-paiva"
      }
    }

    axios.get(url, header)
    .then((res) => {
      this.setState({user: res.data.name})
      console.log(res.data.name)
    })
    .catch((err) => {
      console.log(err)
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
      console.log(err)
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
        onClickUserList={this.onClickUserList}
        />     
      } else if (this.state.page === "users") {
        return <Users
        onClickBack={this.onClickBack}
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

