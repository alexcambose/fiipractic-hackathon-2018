import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import axios from 'axios';
import config from "../config";
import {FlatButton, RaisedButton} from "material-ui";
import history from '../redux/history';
class GroupsAll extends React.Component {
    state = {
        groups: [],
    };
    componentDidMount() {
        axios.get(config.apiUrl + 'group/all', {params: { token: localStorage.getItem('token')}})
            .then(({ data }) => {
                console.log(data);
                this.setState({ groups: data.groups });
            });
    }
    handlesubmit = urlname => {
                console.log('a')
                history.push('/home/groups/' + urlname);
    };

    render () {
        return (
            <div className="container">
                <GridList
                    cellHeight={300}
                >
                    <Subheader>Toate grupurile</Subheader>
                    {this.state.groups.map(group => (

                        <GridTile
                            key='https://network.informatica.com/images/jive-sgroup-default-portrait-large.png'
                            title={group.name}
                            subtitle={<span>by <b>{group.urlname}</b></span>}
                            actionIcon={<RaisedButton primary={true} style={{marginRight: 10}} onClick={() => this.handlesubmit(group.urlname)} label="Inregistrare"></RaisedButton>}
                        >
                            <img src={'https://network.informatica.com/images/jive-sgroup-default-portrait-large.png'} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default GroupsAll;