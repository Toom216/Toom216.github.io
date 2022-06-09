import React from "react";
import ProfileContent from "./ProfileContent";
import { connect } from "react-redux";
import { getUserProfile } from "../../statements/profile-reducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"} />;
        return <ProfileContent {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
