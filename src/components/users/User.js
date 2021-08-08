import React, { Component, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Compare } from '@material-ui/icons';

const User = (props) => {
    useEffect(() => {
        props.getUser(props.match.params.login);
        // Below statment supress warning coming on nextline
        // eslint-disable-next-line
    }, []);
    

    const { name, avatar_url, location, company, bio, blog, login, html_url, followers, public_repos, following } = props.user;

    const { loading } = props.loading;

    if (loading) {
        return <Spinner />
    }

    return (
        <Fragment>
            <Link to="/" className="btn btn-light"> Back to search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    {location && <p>Location : {location}</p>}
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                </div>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username : </strong> {login}
                        </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company : </strong> {company}
                        </Fragment>}
                    </li>
                    <li>
                        {login && <Fragment>
                            <strong>Website : </strong> {blog}
                        </Fragment>}
                    </li>
                </ul>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers : {followers}</div>
                <div className="badge badge-success">Followings : {following}</div>
                <div className="badge badge-danger">Public Repos : {public_repos}</div>
            </div>
        </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired
}

export default User;

//Below lines supress warning for inbetween code
// eslint-disable-next-line
/*eslint-disable */
/*eslint-enable */