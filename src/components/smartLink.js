import React from "react"
import { useLocation } from "react-router"
import { Link } from "gatsby"

const SmartLink = (props) => {
    const location = useLocation();
    const className = props.className + (location.pathname === props.to ? ` active` : ``);
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