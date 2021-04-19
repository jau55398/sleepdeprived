import React from 'react';
import '../../App.css';
import '../../Form.css';


/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.value + ', your email was sent!');
    }

    render() {
        return (
            <div className="app">
                <p className="heading">Contact Us</p>
                
                <form 
                    className="form"
                    onSubmit={this.handleSubmit}>
                    
                <div className="contact-inputs">
                    <label className="contact-label1">
                        NAME
                    </label>
                    <div>
                    <input 
                        type="text" 
                        name="name"
                        className="contact-input" 
                        placeholder="Enter your Full Name"
                        value={this.state.value}
                        onChange={this.handleChange} 
                    />
                    </div>
                </div>

                <div className="contact-inputs">
                    <label className="contact-label">
                        EMAIL
                    </label>
                    <div>
                    <input 
                        type="text" 
                        name="email"
                        className="contact-input" 
                        placeholder="Enter your Email" 
                    />
                    </div>
                </div>

                <div className="contact-inputs">
                    <label className="contact-label">
                        MESSAGE
                    </label>
                    <div>
                    <textarea 
                        type="text" 
                        name="message"
                        className="contact-msg" 
                        placeholder="Enter your message here" 
                    />
                    </div>
                </div>

                <div className="pageformat">
                    <input 
                        type="submit" 
                        value="SUBMIT" 
                        className="contact-btn"
                    />
                </div>
                </form>
                
            </div>
        )
    }
}

export default Contact;