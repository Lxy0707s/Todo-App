import React from "react";
import PropTypes from "prop-types";


function NewSummary (props: any) {
    const {sum} = props
    return (
        <div>Total Count: {sum}</div>
    );
}

NewSummary.propTypes = {
    sum: PropTypes.number.isRequired
};

export default NewSummary;