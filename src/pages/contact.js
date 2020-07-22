import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "emailjs-com"
import Layout from "../components/layout"
import { Jumbotron, Form, Row, Col, Button, Alert } from "react-bootstrap"
import FloatingInput from "../components/floatingInput"

const Contact = () => {
    const closedAlert = {
        isVisible: false,
        variant: "",
        message: ""
    }
    const [alert, setAlert] = useState(closedAlert)

    const submit = (event) => {
        event.preventDefault();
        emailjs.sendForm("yandex", "template_N3q6jlhY", event.target, "user_SKpCGbACGoE0gSJ68VCwO")
            .then(result => setAlert({
                isVisible: true,
                variant: "success",
                message: "Thanks for your message! I will get back to you as soon as I can."
            }))
            .catch(error => setAlert({
                isVisible: true,
                variant: "danger",
                message: "There was an error submitting your form. Please make sure you have filled out everything correctly and try again."
            }))
    }

    return (
        <Layout>
            <Jumbotron className="text-center">
                <div style={{
                    maxWidth: 768,
                    margin: `auto`,
                    padding: `2rem`
                }}>
                    <h2>Contact Me</h2>
                    <p>Get in touch with me by filling out the form below. Please understand that it may take me several hours to get back to you.</p>
                </div>
            </Jumbotron>
            <div
                className={`position-fixed${alert.isVisible ? "" : " d-none"}`}
                style={{
                    left:0,
                    right:0,
                    zIndex: 1031
                }}
            >
                <div style={{maxWidth: 700, margin: `auto`, padding: `1rem`}}>
                    <Alert variant={alert.variant} onClose={() => setAlert(closedAlert)} dismissible>
                        {alert.message}
                    </Alert>
                </div>
            </div>
            <div style={{
                maxWidth: 768,
                margin: `auto`,
                padding: `2rem`
            }}>
                <Form onSubmit={submit} className="contact-form">
                    <Row>
                        <Col>
                            <FloatingInput id="firstName" name="first_name" type="text" label="First Name" />
                        </Col>
                        <Col>
                            <FloatingInput id="lastName" name="last_name" type="text" label="Last Name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingInput id="emailAddress" name="email" type="email" label="Email Address" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingInput id="message" name="message" type="textarea" label="Message" />
                        </Col>
                    </Row>
                    <ReCAPTCHA
                        sitekey="6LdizbMZAAAAAHHnDwZKSRLSRkFgBi2sfP-ov_Mh"
                    />
                    <Button className="mt-3" variant="primary" size="lg" type="submit" block>
                        Send
                    </Button>
                </Form>
            </div>
        </Layout>
    )
}

export default Contact;