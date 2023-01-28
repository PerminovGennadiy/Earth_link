import React from 'react';
import { connect } from 'react-redux';
import MyProfile from './MyProfile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import {Navigate, useLocation, useNavigate, useParams, } from "react-router-dom";
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class MyProfileContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = this.props.authorizedUserId;
            if (!profileId) {
                return <Navigate to='/login' />;
            }
        }
        this.props.getUserProfile(profileId);
        this.props.getStatus(profileId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.profileId != prevProps.router.params.profileId)
            this.refreshProfile()
    }

    render() {
        return (
            <MyProfile {...this.props}
                isOwner={!this.props.router.params.profileId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect,
)(MyProfileContainer);