import React from 'react';
import { GridList, GridTile, IconButton, Paper } from "material-ui";
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from "react-router-dom";
import axios from 'axios';
import config from "../config";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        overflowY: 'auto',
        justifyContent: 'space-evenly'
    },
    titleStyle: {
        fontSize: '1.2em',
    },
};

class GroupsContainer extends React.Component {
    state = {
        groups: [],
    };
    componentDidMount() {
        axios.get(config.apiUrl + 'group', {
            params : {token: localStorage.getItem('token') },
        }).then(({data}) => {
            this.setState({ groups: data.groups });
        });
    }
    render() {
        console.log(this.state.groups);
        return (
            <GridList style={styles.gridList} cols={4} cellHeight={330}>
                {this.state.groups.map(group => (
                    <GridTile
                        key={group._id}
                        title={<Link to={"/home/groups/" + group.urlname}>{group.name}</Link>}
                        actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                        titleStyle={styles.titleStyle}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                        <img src={'https://network.informatica.com/images/jive-sgroup-default-portrait-large.png'} />
                    </GridTile>
                ))}
            </GridList>
        );
    }
}

export default GroupsContainer;