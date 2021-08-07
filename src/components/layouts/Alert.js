import React from 'react'

const Alert = ({ alert }) => {
    console.log(alert);
    return (
        alert != null && (
            <div id="alert-container" className={`alert-cont alert alert-${alert.type}` }>
                <i className='fas fa-info-circle'/> {alert.message}
            </div>
        )
    )
}

export default Alert;