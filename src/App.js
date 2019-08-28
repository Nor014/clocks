import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForms from './InputForms'
import Clocks from './Clocks'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      timeDifference: '',
      submitMass: []
    }
  }

  onFormInput = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  onSubmit = (event) => {
    event.preventDefault();

    // валидация ввода разницы во времени
    if (!isNaN(this.state.timeDifference) && this.state.timeDifference.length > 0) {

      // делим дробное число на часы и минуты, приводим к числовому типу
      let splitHour = this.state.timeDifference.includes('.') ? +this.state.timeDifference.split('.')[0] : +this.state.timeDifference
      let splitMinutes = this.state.timeDifference.includes('.') ? +this.state.timeDifference.split('.')[1] : 0

      this.setState(prevState => ({
        ...prevState, submitMass: this.state.submitMass.concat(
          {
            location: this.state.location,
            differenceInHours: splitHour,
            differenceInMinutes: splitMinutes,
            id: Date.now()
          }
        )
      }))

    } else { this.setState(prevState => ({ ...prevState, timeDifference: 'нужно ввести число' })) }
  }

  onRemove = (id) => {
    this.setState(prevState => ({ ...prevState, submitMass: this.state.submitMass.filter(el => el.id !== id) }))
  }

  render() {
    return (
      <div className="App" >

        <InputForms onFormInput={this.onFormInput} onSubmit={this.onSubmit} location={this.state.location} timeDifference={this.state.timeDifference} />

        <div className='clocks-container'>
          {this.state.submitMass.length > 0 && this.state.submitMass.map((el, index) =>
            <Clocks key={index} location={el.location} differenceInHours={el.differenceInHours} differenceInMinutes={el.differenceInMinutes}
              onRemove={() => this.onRemove(el.id)} />
          )}
        </div>

      </div>
    )
  }
}

export default App;
