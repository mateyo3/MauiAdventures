import React from 'react';
import { Card } from 'semantic-ui-react';

import AdventureCard from './AdventureCard';

const CardList = (props) => {
  return (
    <Card.Group itemsPerRow={3}>
      {
        props.adventures.map((adventure, index) => (
          <AdeventureCard
            key={index}
            imgUrl={adventure.imgUrl}
            title={adventure.title}
            description={adventure.description}
            website={adventure.website}
            location={adventure.location}
            rating={adventure.rating}
            reviews={adventure.reviews}
            buttonId={adventure.buttonId}
            like={adventure.like}
            updateRecentLike={props.updateRecentLike}
            updateLikeCount={props.updateLikeCount}
            updateLikeState={props.updateLikeState}
          />
        ))
      }
    </Card.Group>
  );
}

export default CardList;