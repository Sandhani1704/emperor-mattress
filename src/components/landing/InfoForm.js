import React from 'react';
import './InfoForm.css';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      userEmail: '',
    };
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  handleChange = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  render() {
    if (this.state.submitted) {
      return (
        <p className="infoForm-text">
          Благодарим вас за подписку. Мы свяжемся с вами, когда царство комфорта откроется!
        </p>
      );
    }
    return (
      <div className="infoForm-container">
        <p className="infoForm-text">Заполните форму ниже, чтобы узнать об открытии «Империи матрасов» первыми.</p>
        <form onSubmit={this.handleSubmit} className="infoForm-form">
          <input onChange={this.handleChange} className="infoForm-input" type="email" placeholder="E-mail" />
          <button className="infoForm-button" type="submit">Удивите меня!</button>
        </form>
      </div>
    );
  }
}

export default InfoForm;
