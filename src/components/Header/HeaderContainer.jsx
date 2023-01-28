import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, setAuthUserData, toggleIsFetching, logout } from '../../redux/auth-reducer.js';
import PreloaderForLogin from '../../UI/preloader/PreloaderForLogin';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <>
            {this.props.isFetching ? <PreloaderForLogin /> : null}
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer);