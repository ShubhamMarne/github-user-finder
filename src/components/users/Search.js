import React, { Component } from 'react';
import { useContext, useState } from 'react';
import githubContext from '../../context/github/githubContext';

const  Search = (props) => {

    const github = useContext(githubContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text == ''){
            props.setAlert("Please enter something...", "light");
        } else {
            props.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="search user..." value={text} onChange={onChange}></input>
                <input type="submit" className="btn btn-dark btn-block"/>
            </form>
            <button className="btn btn-dark btn-block" onClick={props.clearUsers}>Clear</button>
        </div>
    );
}

export default Search;