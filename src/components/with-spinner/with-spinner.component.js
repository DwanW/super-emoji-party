import React from 'react';
import './with-spinner.styles.scss';

//not implemented yet
const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ?
            (<div className="spinner-overlay">
                <div className="spinner-container"></div>
            </div>)
            : <WrappedComponent {...otherProps} />
    }
    return Spinner
}

export default WithSpinner;