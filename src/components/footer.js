import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const Footer = () => (
    <footer className="border-1 border-top p-4">
        <Container className="text-center">
            <small>
                <Link className="m-2 text-dark" to="/privacy-policy">Privacy Policy</Link>
                <Link className="m-2 text-dark" to="/terms">Terms and Conditions</Link>
                <a className="m-2 text-dark" href="https://dylate.net">Dylate.net</a>
            </small>
        </Container>
    </footer>
)

export default Footer