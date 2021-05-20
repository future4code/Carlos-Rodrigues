import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const Imagem = styled.img `
  width:30vw;
`

export default class App extends React.Component {

  componentDidMount() {
    this.getRandomCat()
  }
  
  state = {
    page: "",
    cats: {}
  }

  getRandomCat = () => {
    axios.get("https://thatcopy.pw/catapi/rest/")
    .then((res) =>{
      // console.log(res.data)
      this.setState({cats: res.data})
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  render() {
  
    console.log(this.state.cats.url)
    return (
      <div>
        <Imagem src={this.state.cats.url} />
      </div>
    );
  }
}

