import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Link} from "react-router-dom";

const GroupUsers = ({ users }) => {
    if(!users) return null;
    const userList = users.map((user, i) => (
        <Link to={"/profile/" + user.username}>
            <ListItem
            primaryText={user.first_name + ' ' + user.last_name}
            leftAvatar={<Avatar src="https://cdn.vox-cdn.com/images/verge/default-avatar.v989902574302a6378709709f7baab789b242ebbb.gif"/>}
            // rightIcon={<CommunicationChatBubble/>}
        /></Link>
    ));

    return (
        <List>
            <Subheader>Membri</Subheader>
            {userList}
        </List>
    )
};

export default GroupUsers;