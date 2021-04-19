import React from 'react';
import '../../App.css';
import '../../Form.css';
import asianpeople from "../../images/asianpeople.png";
import pic1 from "./Pictures/1.JPG";
import pic2 from "./Pictures/2.JPG";
import pic3 from "./Pictures/3.JPG";
import pic4 from "./Pictures/4.JPG";
import pic5 from "./Pictures/5.JPG";
import pic6 from "./Pictures/6.JPG";


/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
class About extends React.Component {
    render() {
        return (
            <div className="app">
                <p className="heading">About Us</p>
                <div className="pageformat">
                    <p>Sleepdeprived is local clothing brand based out of Bay Area, California. Sleepdeprived is heavily influenced by</p>
                    <p>streetwear culture and the West Coast Vibe. We as a brand strive on the idea of delivering original and simplistic</p>
                    <p>pieces that belong in your closet. </p>
                    {/*<img src={asianpeople} alt="asians" width="350" height="auto" />*/}
                </div>

                <br></br>
                <div style={{textAlign:"center"}}>
                    <img src={pic1} alt="pic1" width="300px" height="300px"
                        style={{marginTop:"10px"}}/>
                    <img src={pic2} alt="pic2" width="300px" height="300px" 
                        style={{marginLeft:"10px", marginRight:"10px", marginTop:"10px"}}/>
                    <img src={pic4} alt="pic4" width="300px" height="300px"
                        style={{marginTop:"10px"}}/>
                </div>

                <div style={{textAlign:"center"}}>
                    <img src={pic3} alt="pic3" width="300px" height="300px"
                        style={{marginTop:"10px"}}/>
                    <img src={pic5} alt="pic5" width="300px" height="300px" 
                        style={{marginLeft:"10px", marginRight:"10px", marginTop:"10px"}}/>
                    <img src={pic6} alt="pic6" width="300px" height="300px"
                        style={{marginTop:"10px"}}/>
                </div>
            </div>
        )
    }
}

export default About;