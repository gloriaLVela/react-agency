import React, { Component } from 'react';
import Field from '../Common/Field';
import image from '../assets/img/about.jpg';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
                            <form id="contactForm" onSubmit={this.props.handleSubmit} name="sentMessage" noValidate="novalidate">
                                <div className="row">

                                    {fields.sections.map((section, sectionIndex) => {
                                        return (
                                            <div className="col-md-6" key={sectionIndex}>
                                                {section.map((field, i) => {
                                                    return <Field
                                                        {...field}
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange} onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
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
                                        >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>)
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro, your name is longer than that.').required('You must give us your name.'),
        email: Yup.string().email('You need to give us a valid email').required('We need your email.'),
        phone: Yup.string()
            .min(10, 'Please provide your 10 digit phone number.')
            .max(15, 'Your phone number is too long.')
            .required('We need a phone number to reach you at.'),
        message: Yup.string().min(500, 'You need to provide us more detailed information')
            .required('Message is required.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);