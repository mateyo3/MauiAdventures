import React from 'react';
import { Menu, Container, Card, Button } from 'semantic-ui-react';

class StaticComponent extends React.Component {
    state = {
      recentlyLike: null,
      likeCount: 0,
      adventure: [
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
          buttonId: 'maui-brewing',
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


  render () {
    return (
      <div>
        <NavBar />
        <Header />
        <FoodCards />
        <ActivitiesCards />
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

// COMPONENT FOR MAIN LOGO
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

// PULLS PROPERTIES FROM PARENT COMPONENT, NavLogo
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
                linkName={"Liked"}
          />
          <NavLink 
                href={"#"}
                linkName={"Sign-in"}
          />
        </ul>
      </div>
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, NavLinks
const NavLink = (props) => {
  return (
    <li id="menu-item" className="shop main-nav text-uppercase font-weight-bold">
      <a href={props.href}>{props.linkName}</a>
    </li>
  );
}

const Header = () => {
  return (
    <header className="header">
      <div className="row">
        <RecentlyLiked />
        <Category />
        <LikeCount />
      </div>
    </header>
  );
}

const RecentlyLiked = () => {
  return (
    <Liked 
      liked={"RECENTLY LIKED:"}
    />
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, RecentlyLiked
const Liked = (props) => {
  return (
    <div className="col-md-4">
      <h3 id="recently-liked">{ props.liked }</h3>
    </div>
  );
}

const Category = () => {
  return (
    <NowViewing 
      nowViewing={"CATEGORY:"}
    />
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, Category
const NowViewing = (props) => {
  return (
    <div className="col-md-4">
      <h3 id="now-viewing">{ props.nowViewing }</h3>
    </div>
  );
}

const LikeCount = () => {
  return (
    <Likes 
      name={"LIKES: "}
      likeCount={"0"}
    />
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, LikeCount
const Likes = (props) => {
  return (
    <div className="col-md-4">
      <h3 id="likes">{ props.name }<span id="like-count">{ props.likeCount }</span></h3>
    </div>
  );
}



const ToggleButtons = (props) => {
  return (
    <div className="toggle-buttons">
      <ToggleButton
        buttonName={"Food"}
      />
      <ToggleButton
        buttonName={"Activities"}
      />
    </div>
  );
}

const ToggleButton = (props) => {
  return (
    <button className="btn">{ props.buttonName }</button>
  );
}

const FoodCards = (props) => {
  return (
    <div className="food-cards">
      <div className="row">
          <div className="col-md-4">
            <Cards
              className={"side-image"}
              src={"https://static1.squarespace.com/static/559eb4cee4b091a272404aaf/t/5a0bd4484192028d4a89a588/1510724722883/IMG_8088+mochiko+chicken.jpg?format=1500w"}
              title={"Tinroof"}
              description={"is a new generation mom &amp pop shop, owned by Internationally recognized Chef Sheldon Simeon &amp his wife, Janice."}
              website={"http://www.tinroofmaui.com/"}
              location={"60 Papa Pl, Kahului, HI 96732"}
              rating={"Rating: 9/10"}
              reviews={"Reviews: 0"}
              buttonId={"tinroof"}
            />
          </div>

          <div className="col-md-4">
            <Cards
              className={"side-image"}
              src={"https://s3-media1.fl.yelpcdn.com/bphoto/tZ7pQRctmqGRfUmcKJd-mA/o.jpg"}
              title={"Monkeypod Kitchen"}
              description={"is founded upon a commitment to craft. Whether that is farming, cooking, brewing, art or design, we believe that the best quality comes from hard work and passion, and we are dedicated to mastering the craft of food, drink and merrymaking."}
              website={"https://www.monkeypodkitchen.com/home"}
              location={"10 Wailea Gateway Place, Kihei, HI 96753"}
              rating={"Rating: 9/10"}
              reviews={"Reviews: 0"}
              buttonId={"monkeypod"}
            />
          </div>

          <div className="col-md-4">
            <Cards
              className={"side-image"}
              src={"https://s3-media2.fl.yelpcdn.com/bphoto/8RsxYXBg7qr7-rlw4p7JZQ/o.jpg"}
              title={"Ka’ana Kitchen"}
              description={"serves up some of Maui’s best dishes family style. So grab your favorite humans, and share farm-to-table cuisine expertly prepared to stimulate your sense of adventure."}
              website={"https://maui.andaz.hyatt.com/en/hotel/dining/ka_ana-kitchen.html"}
              location={"3550 Wailea Alanui Dr, Wailea, HI 96753"}
              rating={"Rating: 9/10"}
              reviews={"Reviews: 0"}
              buttonId={"kaana"}
            />
          </div>
        </div>
    </div>
  );
}

const ActivitiesCards = (props) => {
  return (
    <div className="activities-cards">
        <div className="row">
          <div className="col-md-4">
            <Cards
              className={"side-image"}
              src={"https://images.familyvacationcritic.com/attractions/e2a8d4e2f8bc3ef0c858cc3557accbc7.jpg"}
              title={"O'o Farm"}
              description={"is the result of the owner’s extraordinary commitment to providing quality local produce for their local Maui restaurants to deliver a true “Farm to Table” experience."}
              website={"http://www.oofarm.com/"}
              location={"651 Waipoli Rd, Kula, HI 96790"}
              rating={"Rating: 9/10"}
              reviews={"Reviews: 0"}
              buttonId={"OoFarm"}
            />       
          </div>

          <div className="col-md-4">
            <div>
                <Cards
                  className={"side-image"}
                  src={"http://www.hopsaboutbeer.com/wp-content/uploads/2017/09/unnamed-24.jpg"}
                  title={"Maui Brewing Co. Tour"}
                  description={"is A 45-minute guided tour providing an up-close glimpse of our brewhouse, cellar and packaging line. The tour ends with a tasting of our flagship beers with one of our wonderful Guides."}
                  website={"http://mauibrewingco.com/experience-our-brewery/brewery-tour/"}
                  location={"605 Lipoa Pkwy, Kihei, Maui, HI 96753"}
                  rating={"Rating: 9/10"}
                  reviews={"Reviews: 0"}
                  buttonId={"maui-brewing"}
                />
              </div>  
          </div>

          <div className="col-md-4">
            <div>
              <Cards
                className={"side-image"}
                src={"https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/68/7f/ali-i-kula-lavender-farm.jpg"}
                title={"Ali’i Kula Lavender Farm"}
                description={"let's you take part in our many enjoyable activities or simply explore the farm on your own."}
                website={"https://fareharbor.com/aliikulalavender/"}
                location={"3550 Wailea Alanui Dr, Wailea, HI 96753"}
                rating={"Rating: 9/10"}
                reviews={"Reviews: 0"}
                buttonId={"lavender-farm"}
              />
            </div>
          </div>
        </div>
    </div>
  );
}

const Cards = (props) => {
  return (
    <div>
      <img className={props.className} src={props.src} />
      <h3 className="title">{props.title}</h3>
      <p className="description"><a class="website" href={props.website} target="_blank">{props.title}</a> {props.description}</p>
      <p className="location">{props.location}</p>
      <p className="rating">{props.rating}</p>
      <p className="reviews">{props.reviews}</p>
      <button className="btn btn-secondary" id={props.buttonId} type="button">Like</button>
    </div>
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
