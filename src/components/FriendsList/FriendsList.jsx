import cl from './FriendsList.module.css';
import Friends from './Friends/Friends';
import React from 'react';

const FriendsList = (props) => {

    let List = props.props.state.map(el => <Friends id={el.id} name={el.name} way={el.way} key={el.id} />)

    return (
        <div className={cl.friends}>
            <div className={cl.friend}>{List}</div>
        </div>
    );
};

export default FriendsList;