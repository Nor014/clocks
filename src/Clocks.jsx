import React from 'react';


class Clocks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: new Date().getUTCHours() + this.props.differenceInHours,
      minutes: new Date().getUTCMinutes() + this.props.differenceInMinutes,
      seconds: new Date().getUTCSeconds()
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {

      this.setState(prevState => ({
        ...prevState,
        hours: new Date().getUTCHours() + this.props.differenceInHours,
        minutes: new Date().getUTCMinutes() + this.props.differenceInMinutes,
        seconds: new Date().getUTCSeconds()
      })
      )

    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const arrow_second = {
      transform: `rotate(${this.state.seconds * 360 / 60}deg) `,
    }

    const arrow_mitute = {
      transform: `rotate(${this.state.minutes * 360 / 60}deg) `,
    }

    const arrow_hour = {
      transform: `rotate(${this.state.hours * 360 / 12}deg) `,
    }

    return (
      <div className='clock__inner'>
        <h3 className='clock__location'>{this.props.location}</h3>

        <div className='button_inner'>
          <button className='clock__remove-button' onClick={this.props.onRemove}> remove </button>
        </div>

        <div className="clocks">

          <span className='arrow-span arrow_second' style={arrow_second}></span>
          <span className='arrow-span arrow_minute' style={arrow_mitute}></span>
          <span className='arrow-span arrow_hour' style={arrow_hour}></span>

        </div>
      </div>
    )
  }
}

export default Clocks;