import React from 'react';
import {Divider, List} from "material-ui";

const GroupUsers = () => {
    return (
        <MobileTearSheet>
            <List>
                <Subheader>Recent chats</Subheader>
                <ListItem
                    primaryText="Brendan Lim"
                    leftAvatar={<Avatar src="images/ok-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Kerem Suer"
                    leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Raquel Parrado"
                    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
            </List>
            <Divider />
            <List>
                <Subheader>Previous chats</Subheader>
                <ListItem
                    primaryText="Chelsea Otakan"
                    leftAvatar={<Avatar src="images/chexee-128.jpg" />}
                />
                <ListItem
                    primaryText="James Anderson"
                    leftAvatar={<Avatar src="images/jsa-128.jpg" />}
                />
            </List>
        </MobileTearSheet>
    );
};

export default GroupUsers;