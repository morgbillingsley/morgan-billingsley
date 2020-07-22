import React from "react"
import PropTypes from "prop-types"
import { Form, InputGroup, Button } from "react-bootstrap"

const SearchBar = ({ onChange, onSubmit, defaultValue, size }) => (
    <Form
        inline
        onSubmit={event => {
            event.preventDefault()
            const data = new FormData(event.target)
            onSubmit(data.get("query"))
        }}
        className="justify-content-center"
    >
        <InputGroup>
            <Form.Control 
                type="search"
                size={size}
                name="query"
                placeholder="Search..."
                defaultValue={defaultValue}
                onChange={event => onChange(event.target.value)}
            />
            <InputGroup.Append>
                <Button
                    variant="primary"
                    size={size}
                    type="submit"
                >
                    Search
                </Button>
            </InputGroup.Append>
        </InputGroup>
    </Form>
)

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.string
}

SearchBar.defaultProps = {
    onSubmit: () => console.log('Search form submitted...'),
    onChange: () => console.log('Search form changed...'),
    defaultValue: "",
    size: "lg"
}

export default SearchBar;