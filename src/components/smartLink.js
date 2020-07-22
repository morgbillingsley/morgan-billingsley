import React from "react"
import { Link } from "gatsby"

const SmartLink = (props) => {
    const className = props.className + (window.location.pathname === props.to ? ` active` : ``);
    return (
        <Link
            to={props.to}
            className={className}
        >
            {props.children}
        </Link>
    )
}

export default SmartLink