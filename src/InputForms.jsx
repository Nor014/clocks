import React from 'react';

class InputForms extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div  >
        <form className="form-container" onSubmit={this.props.onSubmit}>
          <div className="form-inner">
            <label htmlFor='location'>Название</label>
            <input type='text' name='location' onChange={this.props.onFormInput} value={this.props.location} />
          </div>

          <div className="form-inner">
            <label htmlFor='timeDifference'>Временная зона</label>
            <input type='text' name='timeDifference' onChange={this.props.onFormInput} value={this.props.timeDifference} />
          </div>

          <button className='form-button'>Добавить</button>
        </form>
      </div>

    )
  }
}

export default InputForms;
