import React from 'react';
import PropTypes from 'proptypes';

const ValidationErrors = ({ errors, children }) => {
    if (children) return <div className="text-error">{children}</div>;
    return Object.keys(errors || {}).map((e, i) => <div className="text-error" key={i}>* {errors[e][0]}</div>);
};

ValidationErrors.proptypes = {
    errors: PropTypes.object,
};

export default ValidationErrors;