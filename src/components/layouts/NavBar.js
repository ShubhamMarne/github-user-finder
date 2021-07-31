import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';

export class NavBar extends Component {
    // default props
    static defaultProps = {
        title: 'Github Finder'
    }

    // Strict props types
    static propTypes = {
        title : PropTypes.string.isRequired
    }
    
    render() {
        return (
            <div className="navbar bg-primary">
                <h1>
                    <GitHubIcon className="githubIcon"/>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

export default NavBar
