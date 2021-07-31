import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';

const NavBar = ({title}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <GitHubIcon className="githubIcon"/>
                {title}
            </h1>
        </div>
    )
};

// default props
NavBar.defaultProps = {
    title: 'Github Finder'
}

// Strict props types
NavBar.propTypes = {
    title : PropTypes.string.isRequired
}

export default NavBar
