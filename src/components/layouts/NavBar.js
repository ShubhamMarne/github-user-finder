import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Link tag does not do complete refresh so Link is used.
const NavBar = ({title}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <GitHubIcon className="githubIcon"/>
                {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

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
