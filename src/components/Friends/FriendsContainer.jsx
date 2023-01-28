import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, requestUsers, toggleFollowingProgress,followSuccess, setCurrentPage, unfollowSuccess,} from '../../redux/friends-reducer';
import Friends from './Friends';
import Preloader from "../../UI/preloader/Preloader.jsx";
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { getFriendsSuperSelector, getCurrentPage, getFollowingInProgress, getFriends, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/friends-selectors";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber, action = null) => {
        if (action === '+' && (this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize))) {
            pageNumber += 1;
        } else if (action === '++' && (this.props.currentPage < (Math.ceil(this.props.totalUsersCount / this.props.pageSize))-100)) {
            pageNumber += 100;
        } else if (action === '++' && (this.props.currentPage > (Math.ceil(this.props.totalUsersCount / this.props.pageSize))-100)) {
            pageNumber = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        } else if (action === '-' && (this.props.currentPage > 1)) {
            pageNumber -= 1;
        } else if (action === '--' && (this.props.currentPage > 100)) {
            pageNumber -= 100;
        } else if (action === '--' && (this.props.currentPage < 100)) {
            pageNumber = 1;
        }
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };
    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                getUsers={this.requestUsers}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getFriends(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};



export default compose(
    connect(mapStateToProps,{follow, unfollow, followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, requestUsers}),
)(FriendsContainer);