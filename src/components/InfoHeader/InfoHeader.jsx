import React from 'react';
import { Menu } from 'semantic-ui-react';

import RecentLike from './RecentLike';
import LikeCount from './LikeCount';

const InfoHeader = (props) => {
  return (
    <Menu size='huge' inverted borderless>
      <Menu.Item position='left'>>
        <RecentlyLiked
          recentLike={props.recentLike}
        />
      </Menu.Item>
      <Menu.Item position='right'>
        <Category />
      </Menu.Item>
      <Menu.Item position='right'>
        <LikeCount 
          likeCount={props.likeCount}
        />
      </Menu.Item>
    </Menu>
  );
}

const Category = (props) => {
  return (
    <NowViewing 
      nowViewing={props.type}
    />
  );
}

const NowViewing = (props) => {
  return (
    <div className="col-md-4">
      <h3 className="text-center" id="now-viewing">{props.type ?  `${props.type}` : `Choose your adventure!`}</h3>
    </div>
  );
}


export default InfoHeader;