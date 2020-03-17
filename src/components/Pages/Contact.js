import React, { Component } from 'react';
import Field from '../Common/Field';
import image from '../assets/img/about.jpg';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name 2*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email 2*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number 2*' }
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*' }
        ]
    ]
}



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    submitForm = (e) => {
        alert('Thank you!. Form submitted!');
    }

    render() {
        return (
            <section style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="row">

                                    {fields.sections.map((section, sectionIndex) => {
                                        return (
                                            <div className="col-md-6" key={sectionIndex}>
                                                {section.map((field, i) => {
                                                   return <Field 
                                                   {...field} 
                                                   key={i} 
                                                   value={this.state[field.name]}
                                                   onChange={e => this.setState({
                                                       [field.name]: e.target.value
                                                   })}
                                                    />
                                                })}
                                            </div>)
                                    })}
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" 
                                        className="btn btn-primary btn-xl text-uppercase" 
                                        type="submit"
                                        onClick={e => this.submitForm(e)}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>)
    }
}


export default Contact;