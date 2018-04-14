import React from 'react';
import { Header } from 'semantic-ui-react';

const LikeCount = (props) => {
  return (
    <Header as='h3' inverted>
      {props.likeCount > 0 && `Likes: ${props.likeCount}`}
    </Header>
  );
}

export default LikeCount;