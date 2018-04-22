import React from 'react';
import CreateGroupsContainer from "../containers/CreateGroupsContainer";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
    Avatar,
    Divider,
    List,
    ListItem,
    Paper,
    Subheader,
    TextField
} from "material-ui";
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class CreateGroups extends React.Component {
    state = {
        selectedOne: 0,
    }
    render() {
        const { selectedOne } = this.state;
        return (
            <div className="container">
                <div className="group-body">
                    <div className="group-sidebar">
                        <Paper style={{marginTop: '10px'}}>
                            <List>

                                <Subheader>Mesaje</Subheader>

                                <ListItem
                                    onClick={() => this.setState({ selectedOne: 1 })}
                                    primaryText="Test user #1"
                                    leftAvatar={<Avatar src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" />}
                                    rightIcon={<CommunicationChatBubble />}
                                />
                                <ListItem
                                    onClick={() => this.setState({ selectedOne: 2 })}
                                    primaryText="Test user #2"
                                    leftAvatar={<Avatar src="http://mehandis.net/wp-content/uploads/2017/12/default-user-300x300.png" />}
                                    rightIcon={<CommunicationChatBubble />}
                                />
                            </List>
                            <Divider />

                            <List>
                                <Subheader>Arhive</Subheader><ListItem
                                        onClick={() => this.setState({ selectedOne: 3 })}
                                        primaryText="Test user #1"
                                        leftAvatar={<Avatar src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" />}
                                    />

                                <ListItem
                                    onClick={() => this.setState({ selectedOne: 4 })}
                                    primaryText="Test user #4"
                                    leftAvatar={<Avatar src="http://mehandis.net/wp-content/uploads/2017/12/default-user-300x300.png" />}
                                />
                            </List>

                        </Paper>

                    </div>
                    <Paper style={{marginTop: '10px', padding: 20}}>
                        { selectedOne === 1 ?
                            <div><TextField
                                disabled={true}
                                fullWidth={true}
                                hintText="titlu"
                            /> <TextField
                                disabled={true}
                                fullWidth={true}
                                hintText="Mesaj 3"
                            />
                                <TextField
                                    multiLine={true}
                                    rows={2}
                                    rowsMax={4}
                                    fullWidth={true}
                                    value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi esse eum harum illo impeLorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi esse eum harum illo impedit non quisquam sequi unde, velit. Ad corporis dolore ea ex facilis neque odit omnis recusandae! dit non quisquam sequi unde, velit. Ad corporis dolore ea ex facilis neque odit omnis recusandae! #2"
                                    hintText="Mesaj 3"
                                />
                            </div> : null

                        }
                        { selectedOne === 2 ?
                            <div><TextField
                                disabled={true}
                                fullWidth={true}
                                hintText="titlu initial"
                            /> <TextField
                                disabled={true}
                                fullWidth={true}
                                hintText="Mesaj 5   "
                            /><TextField
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                                fullWidth={true}
                                value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi esse eum harum illo impedit non quisquam sequi unde, velit. Ad corporis dolore ea ex facilis neque odit omnis recusandae!"
                            /></div> : null
                        }
                        <FloatingActionButton>
                            <ContentAdd />
                        </FloatingActionButton>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default CreateGroups;