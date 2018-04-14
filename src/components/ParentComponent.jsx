import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import InfoHeader from './InfoHeader/InfoHeader';
import CardList from './CardList/CardList';


class ParentComponent extends Component {
  updateRecentLike = (adventure) => {
    if (adventure !== this.state.recentLike) {
      this.setState(() => ({
        recentLike: adventure
      }));
    } else {
      this.setState(() => ({
        recentLike: null
      }));
    }
    console.log('Recently Liked:', adventure);
  }

  updateLikeCount = () => {
    if (this.state.recentLike === null) {
      this.setState((prevState) => ({
        likeCount: prevState.likeCount + 1
      }));
    }
    console.log('+1 Like');
  }

  updateLikeState = (adventureClicked) => {
    this.setState((prevState) => ({
      songs: prevState.adventure.map((adventure) => {
          if (adventureClicked === adventure.title) {
            return {
              ...adventure,
              like: !adventure.like
            };
          } else {
            return adventure;
          }
        })
    }));
    console.log('Liked:', adventureClicked);
  }

  render () {
    const { recentLike, likeCount, adventures } = this.state;
    return (
      <div>
        <NavBar />
        <InfoHeader 
          recentLike={recentLike}
          likeCount={likeCount}
        />
        <Container>
          <CardList 
            adventures={adventures}
            updateCurrentLike={this.updateRecentLike}
            updateLikeCount={this.updateLikeCount}
            updateLikeState={this.updateLikeState}
          />
        </Container>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('GLOBAL STATE', state);
  return {
    recentLike: state.toolbar.recentLike,
    likeCount: state.toolbar.likeCount,
    adventures: state.adventures
  };
};


export default connect(mapStateToProps)(ParentComponent);
