import React from 'react';
import '../../App.css';
import '../../Form.css';


/*Currently contains the Search, Currency, logo,
log in, create account, cart, and calls all the buttons
that are in the AppButtons.js file*/
class Terms extends React.Component {
    render() {
        const tnv = require('tracking-number-validation');
        console.log(tnv.getCourier('9400128206335334236415'));

        return (
            <div className="app">
                <p className="heading">Terms</p>
                <div className="pageformat">
                    <div
                        style={{
                            textAlign: "left",
                            marginLeft: "150px",
                            marginRight: "150px"
                        }}>
                        <h4>OVERVIEW</h4>
                        <br></br>
                        <p>This website is operated by Sleepdeprived. Throughout the site, the terms “we”, “us” and “our” refer to Sleepdeprived. Sleepdeprived offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
                        <br></br>
                        <p>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
                        <br></br>
                        <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
                        <br></br>
                        <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
                        <br></br>
                        <p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
                        <br></br>

                        <h4>SECTION 1 - ONLINE STORE TERMS</h4>
                        <br></br>
                        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                        <br></br>
                        <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
                        <br></br>
                        <p>You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>

                    </div>
                </div>
            </div>
        )
    }

}

export default Terms;