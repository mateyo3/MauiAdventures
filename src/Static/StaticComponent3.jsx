import React, { Component } from 'react';
import { Menu, Container, Card, Button } from 'semantic-ui-react';

class StaticComponent extends Component {
    state = {
      recentLike: null,
      likeCount: 0,
      adventures: [
        {
          title: 'Tinroof',
          imgUrl: 'https://static1.squarespace.com/static/559eb4cee4b091a272404aaf/t/5a0bd4484192028d4a89a588/1510724722883/IMG_8088+mochiko+chicken.jpg?format=1500w',
          description: 'is a new generation mom &amp pop shop, owned by Internationally recognized Chef Sheldon Simeon &amp his wife, Janice.',
          website: 'http://www.tinroofmaui.com/',
          location: '60 Papa Pl, Kahului, HI 96732',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'tinroof',
          type: 'food',
          like: false
        },
        {
          title: 'Monkeypod Kitchen',
          imgUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/tZ7pQRctmqGRfUmcKJd-mA/o.jpg',
          description: 'is founded upon a commitment to craft. Whether that is farming, cooking, brewing, art or design, we believe that the best quality comes from hard work and passion, and we are dedicated to mastering the craft of food, drink and merrymaking.',
          website: 'https://www.monkeypodkitchen.com/home',
          location: '10 Wailea Gateway Place, Kihei, HI 96753',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'monkeypod',
          type: 'food',
          like: false
        },
        {
          title: 'Ka\'ana Kitchen',
          imgUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/8RsxYXBg7qr7-rlw4p7JZQ/o.jpg',
          description: 'serves up some of Maui’s best dishes family style. So grab your favorite humans, and share farm-to-table cuisine expertly prepared to stimulate your sense of adventure.',
          website: 'https://maui.andaz.hyatt.com/en/hotel/dining/ka_ana-kitchen.html',
          location: '3550 Wailea Alanui Dr, Wailea, HI 96753',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'kaana',
          type: 'food',
          like: false
        },
        {
          title: 'O\'o Farm',
          imgUrl: 'https://images.familyvacationcritic.com/attractions/e2a8d4e2f8bc3ef0c858cc3557accbc7.jpg',
          description: 'is the result of the owner’s extraordinary commitment to providing quality local produce for their local Maui restaurants to deliver a true “Farm to Table” experience.',
          website: 'http://www.oofarm.com/',
          location: '651 Waipoli Rd, Kula, HI 96790',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'OoFarm',
          type: 'activity',
          like: false
        },
        {
          title: 'Maui Brewing Co. Tour',
          imgUrl: 'http://www.hopsaboutbeer.com/wp-content/uploads/2017/09/unnamed-24.jpg',
          description: 'is A 45-minute guided tour providing an up-close glimpse of our brewhouse, cellar and packaging line. The tour ends with a tasting of our flagship beers with one of our wonderful Guides.',
          website: 'http://mauibrewingco.com/experience-our-brewery/brewery-tour/',
          location: '605 Lipoa Pkwy, Kihei, Maui, HI 96753',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'mauibrewing',
          type: 'activity',
          like: false
        },
        {
          title: 'Ali\'i Kula Lavender Farm',
          imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/68/7f/ali-i-kula-lavender-farm.jpg',
          description: 'let\'s you take part in our many enjoyable activities or simply explore the farm on your own.',
          website: 'https://fareharbor.com/aliikulalavender/',
          location: '3550 Wailea Alanui Dr, Wailea, HI 96753',
          rating: 'Rating: 9/10',
          reviews: '0',
          buttonId: 'lavender-farm',
          type: 'activity',
          like: false
        },
      ]
    };

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
        <Header 
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
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <NavLogo />
      <Navigation />
    </nav>
  );
}

const NavLogo = () => {
  return (
      <NavLogoLink 
        href={"#"}
        src={"http://inception-app-prod.s3.amazonaws.com/N2Y3MDdlZWUtYWU4OC00NDk1LTk0NDktZTk0OWY3NmQ2NDQx/logo/2017/05/Islands.png"}
        name={"MAUI ADVENTURES"}
        alt={"islands"}
      />
  );
}

const NavLogoLink = (props) => {
  return (
    <div className="navbar-header">
      <a className="logo" href={props.href}>
        <img className="image-responsive" id="navbar-logo" src={props.src} alt={props.alt} /> {props.name}
      </a>
    </div>
  );
}

const Navigation = () => {
  return (
      <div id="menu-standard" className="nav">
        <ul>
          <NavLink 
                href={"#"}
                linkName={"My Likes"}
          />
          <NavLink 
                href={"#"}
                linkName={"Sign-in"}
          />
        </ul>
      </div>
  );
}

const NavLink = (props) => {
  return (
    <li id="menu-item" className="shop main-nav text-uppercase font-weight-bold">
      <a href={props.href}>{props.linkName}</a>
    </li>
  );
}

const Header = (props) => {
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

const RecentlyLiked = (props) => {
  return (
    <Header as='h3' inverted>
      {props.recentLike ? `Recently Liked: ${props.recentLike}` : `Like Something!`}
    </Header>
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

const LikeCount = (props) => {
  return (
    <Header as='h3' inverted>
      {props.likeCount > 0 && `Likes: ${props.likeCount}`}
    </Header>
  );
}


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

const AdeventureCard = (props) => {
  return (
    <Card 
      imgUrl={props.imgUrl}
      title={props.title}
      description={props.description}
      website={props.website}
      location={props.location}
      rating={props.rating}
      reviews={props.reviews}
      extra={
        <LikeState 
          like={props.like}
          title={props.like}
          updateRecentLike={props.updateRecentLike}
          updateLikeCount={props.updateLikeCount}
          updateLikeState={props.updateLikeState}
        />
      }
    />
  );
}


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


const Footer = (props) => {
  return (
    <footer className="main-footer">
      <span>&copy;2018 React Bootcamp</span>
    </footer>
  );

}

export default StaticComponent;
