import React, { Component } from 'react'
import './Personne.css'

export default class Person extends Component {
  state = {
    person: {
      fullName: 'Hend Sabri ',
      bio: '  Hend Sabri a Tunisian actress working in Egypt',
      imgSrc: 'https://pictures.artify.tn/media/uyzsuiaflybpg7ht67hn.jpg',
      profession: 'actress'
    },
    shows: true

  }

  buttonshow = () => {
    this.setState({ shows: !this.state.shows })
  }
  render() {
    return (
      <div className='class'>
        {this.state.shows ? <>  {this.state.person.fullName} <br /> {this.state.person.bio} <br /> {this.state.person.profession} <br />
          <img src={this.state.person.imgSrc} alt=""  className='img'/>
        </> : null}
        <br />
        <button onClick={this.buttonshow}>show</button>
      </div>
    )
  }
}