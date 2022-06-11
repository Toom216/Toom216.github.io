import React from "react";
import ProfileContent from "./ProfileContent";
import { connect } from "react-redux";
import { getUserProfile } from "../../statements/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <ProfileContent {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(connect(mapStateToProps, { getUserProfile }), withAuthRedirect)(ProfileContainer);
