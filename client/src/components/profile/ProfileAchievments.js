import React, { Component } from 'react'

export default class ProfileBio extends Component {
    render() {
        let achievments = [
            {
                title: '10 teme terminate',
                img: 'https://png.pngtree.com/element_pic/00/16/07/0157764cc4de872.jpg'
            }, 
            {
                title: 'abcd',
                img: 'https://png.pngtree.com/element_pic/00/16/07/0157764cc4de872.jpg'
            }
        ];
        return (
            <div className="profile-bio box">
                <h3>Achievments</h3>
                &nbsp;{this.props.bio}
                {
                    achievments.map(item => (
                        <div className="achievments">
                            <div className="achievment-title">{item.title}</div>
                            <img className="achievment-img" src={item.img} />
                        </div>
                    ))
                }
            </div>
        )
    }
}