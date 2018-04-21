import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const Post = () => (
  <Card className="profile-post">
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
        <div className="btn-like">
            <FontAwesomeIcon icon="heart" size="lg" />       
        </div>
    </CardActions>
  </Card>
);

export default Post;