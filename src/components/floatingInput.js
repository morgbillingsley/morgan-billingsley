import React from "react"
import PropTypes from "prop-types"

const FloatingInput = ({ label, type, value, className, id, name }) => (
    <div className="form-label-group">
        {type === "textarea" ? (
            <textarea
                className={'form-control' + className}
                placeholder={label}
                id={id}
                name={name}
            ></textarea>
        ) : (
            <input
                className={'form-control' + className}
                placeholder={label}
                id={id}
                type={type}
                defaultValue={value}
                name={name}
            />
        )}
        <label for={id}>{label}</label>
    </div>
)

FloatingInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    id: PropTypes.string.isRequired
}

FloatingInput.defaultProps = {
    className: ``,
    type: `text`,
    value: ``
}

export default FloatingInput