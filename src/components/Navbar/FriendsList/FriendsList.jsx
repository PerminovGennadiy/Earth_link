import cl from './FriendsList.module.css';
import Friends from './Friends/Friends';

const FriendsList = (props) => {

    let List = props.props.state.map(el => <Friends id={el.id} name={el.name} way={el.way} />)

    return (
        <div className={cl.friends}>
            <div className={cl.friend}>{List}</div>
        </div>
    );
};

export default FriendsList;