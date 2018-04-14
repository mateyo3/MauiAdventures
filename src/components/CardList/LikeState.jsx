import React from 'react';
import { Button } from 'semantic-ui-react';

const LikeState = (props) => {
  return (
    <Button 
      fluid
      icon={props.playing ? "heart" : "heart outline"}
      color={props.like ? "blue" : "grey"}
      id={props.buttonId}
      onClick={() => {
        props.updateRecentLike(props.adventure)
        props.updateLikeCount()
        props.updateLikeState(props.adventure)
      }}
    />
  );
}

export default LikeState;
