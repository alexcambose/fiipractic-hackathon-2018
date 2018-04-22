import React, { Fragment } from 'react';
import {Paper, RadioButton, RadioButtonGroup} from "material-ui";
import AddDeadlineType from "./AddDeadlineType";
import AddContentType from "./AddContentType";

const paperStyle = {
    padding: 10,
    margin: '0 14px',
};

class AddPost extends React.Component {
    state = {
        type: 'content',
    };
    render() {
        const { type } = this.state;
        return (
            <Fragment>

                <Paper style={paperStyle}>
                    <RadioButtonGroup name="shipSpeed" defaultSelected="content" value={type} onChange={e => this.setState({type: e.target.value})}>
                        <RadioButton
                            value="content"
                            label="Text"
                        />
                        <RadioButton
                            value="deadline"
                            label="Termen limita"
                        />
                    </RadioButtonGroup>
                    {type === 'content' && <AddContentType/>}
                    {type === 'deadline' && <AddDeadlineType/>}
                </Paper>

            </Fragment>
        );
    }
}

export default AddPost;