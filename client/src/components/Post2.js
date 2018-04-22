import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const Post2 = ({post, user}) => (
  <Card className="profile-post">
    <CardHeader
      title={user.first_name + " " + user.last_name}
      subtitle={user.username}
      avatar="images/jsa-128.jpg"
    />
    <CardText>
     { post.content }
    </CardText>
    <CardActions>
        <div className="btn-like">
            <FontAwesomeIcon icon="heart" size="lg" />       
        </div>
    </CardActions>
  </Card>
);

export default Post;