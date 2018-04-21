import React, { Component } from 'react'

export default class ProfileBio extends Component {
    render() {
        return (
            <div className="profile-bio box">
                <h3>Descriere</h3>
                &nbsp;{this.props.bio}
            </div>
        )
    }
}