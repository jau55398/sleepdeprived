import React, { } from 'react';
import '../../App.css';
import '../../Form.css';

var tnv;
/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
class Tracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        tnv = require('tracking-url');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        var str = JSON.stringify(tnv(this.state.value));
        var tmp, tmp2, tmp3;
        if (str !== "null") {
            tmp = str.split(",");
            tmp2 = tmp[1].split(":\"");
            tmp3 = tmp2[1].split("\"");
            if (window.confirm("You are about to be redirected to an outside link. Press Ok to confirm")) {
                window.location.href = tmp3[0]; // brings user to page
            };
        } else {
            alert("Null number");
        }
        //str = tmp3[0].link(tmp3[0]) ;
        //window(str); // prints out package URL  // make clickable
        // 9400128206335334236415
        event.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <p className="heading">Tracking</p>

                <form onSubmit={this.handleSubmit} className="form">

                    <div className="contact-inputs">
                        <label className="contact-label1">
                            Enter Tracking Number Below
                        </label>
                        <div>
                            <input
                                value={this.state.value}
                                onChange={this.handleChange}
                                type="text"
                                name="name"
                                className="trackbox"
                                placeholder="Enter tracking number"
                                style={{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    paddingLeft: "10px",
                                    outline: "black",
                                    borderRadius: "2px",
                                    height: "40px",
                                    width: "40%",
                                }}
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

export default Tracking;