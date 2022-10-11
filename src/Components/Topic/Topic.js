import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;
    return (
        <div className='single-topic'>
            <img src={logo} alt="" />
            <h4>{name}</h4>
            <button>Start Practice</button>

        </div>
    );
};

export default Topic;