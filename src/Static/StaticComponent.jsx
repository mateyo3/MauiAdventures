import React from 'react';


const StaticComponent = (props) => {
  return (
    <div>
      <NavBar />
      <Header />
      <ToggleButtons />
      <FoodCards />
      <ActivitiesCards />
      <Footer />
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <NavLogo />
         <div id="menu-standard" className="nav">
              <ul>
                <li id="menu-item" className="saved main-nav text-uppercase font-weight-bold"><a href="#">Saved</a></li>
                <li id="menu-item" className="sign-in main-nav text-uppercase font-weight-bold"><a href="#">Sign-in</a></li>
              </ul>
            </div>
        </nav>
  );
}

// COMPONENT FOR MAIN LOGO
const NavLogo = () => {
  return (
      <NavLogoLink 
        href={"#"}
        src={"http://inception-app-prod.s3.amazonaws.com/N2Y3MDdlZWUtYWU4OC00NDk1LTk0NDktZTk0OWY3NmQ2NDQx/logo/2017/05/Islands.png"}
      />
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, NavLogo
const NavLogoLink = (props) => {
  return (
    <div className="navbar-header">
      <a className="logo" href={props.href}>
        <img className="image-responsive" id="navbar-logo" src={props.src} />
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
                linkName={"Saved"}
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
        <Category />
        <LikeCount />
      </div>
    </header>
  );
}

const Category = () => {
  return (
    <NowViewing 
      nowViewing={"NOW VIEWING"}
    />
  );
}

// PULLS PROPERTIES FROM PARENT COMPONENT, Category
const NowViewing = (props) => {
  return (
    <div className="col-md-6">
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
    <div className="col-md-6">
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
            <div>
              <Cards
                className={"side-image"}
                src={"https://static1.squarespace.com/static/559eb4cee4b091a272404aaf/t/5a0bd4484192028d4a89a588/1510724722883/IMG_8088+mochiko+chicken.jpg?format=1500w"}
                title={"Tinroof"}
                description={"is a new generation mom &amp pop shop, owned by Internationally recognized Chef Sheldon Simeon &amp his wife, Janice."}
                website={"http://www.tinroofmaui.com/"}
                location={"60 Papa Pl, Kahului, HI 96732"}
                rating={"Rating: 9/10"}
                reviews={"Reviews: 0"}
                buttonName={"tinroof"}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div>
                <img className="side-image" src="https://s3-media1.fl.yelpcdn.com/bphoto/tZ7pQRctmqGRfUmcKJd-mA/o.jpg" />
                <h3 className="title">Monkeypod Kitchen</h3>
                <p className="description"><a className="website" href="https://www.monkeypodkitchen.com/home" target = " _blank">Monkeypod Kitchen</a> is founded upon a commitment to craft. Whether that is farming, cooking, brewing, art or design, we believe that the best quality comes from hard work and passion, and we are dedicated to mastering the craft of food, drink and merrymaking.</p>
                <p className="location">10 Wailea Gateway Place, Kihei, HI 96753</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div>
                <img className="side-image" src="https://s3-media2.fl.yelpcdn.com/bphoto/8RsxYXBg7qr7-rlw4p7JZQ/o.jpg" />
                <h3 className="title">Ka’ana Kitchen</h3>
                <p className="description"><a className="website" href="https://maui.andaz.hyatt.com/en/hotel/dining/ka_ana-kitchen.html" target = " _blank">Ka’ana Kitchen</a> serves up some of Maui’s best dishes family style. So grab your favorite humans, and share farm-to-table cuisine expertly prepared to stimulate your sense of adventure.</p>
                <p className="location">3550 Wailea Alanui Dr, Wailea, HI 96753</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
            </div>
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
            <div>
              <div>
                <img className="side-image" src="https://images.familyvacationcritic.com/attractions/e2a8d4e2f8bc3ef0c858cc3557accbc7.jpg" />
                <h3 className="title">O'o Farm</h3>
                <p className="description"><a className="website" href="http://www.oofarm.com/" target = " _blank">O’o Farm</a> is the result of the owner’s extraordinary commitment to providing quality local produce for their local Maui restaurants to deliver a true “Farm to Table” experience.</p>
                <p className="location">651 Waipoli Rd, Kula, HI 96790</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div>
                <img className="side-image" src="http://www.hopsaboutbeer.com/wp-content/uploads/2017/09/unnamed-24.jpg" />
                <h3 className="title">Maui Brewing Co. Tour</h3>
                <p className="description"><a className="website" href="http://mauibrewingco.com/experience-our-brewery/brewery-tour/" target = " _blank">Maui Brewing Co. Tour</a> is A 45-minute guided tour providing an up-close glimpse of our brewhouse, cellar and packaging line. The tour ends with a tasting of our flagship beers with one of our wonderful Guides.</p>
                <p className="location">605 Lipoa Pkwy, Kihei, Maui, HI 96753</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div>
              <div>
                <img className="side-image" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/68/7f/ali-i-kula-lavender-farm.jpg" />
                <h3 className="title">Ali’i Kula Lavender Farm</h3>
                <p className="description"><a className="website" href="https://fareharbor.com/aliikulalavender/" target = " _blank">Ali'i Kula Lavender Farm</a> let's you take part in our many enjoyable activities or simply explore the farm on your own.</p>
                <p className="location">3550 Wailea Alanui Dr, Wailea, HI 96753</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
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
      <button className="btn btn-secondary" id={props.buttonName} type="button">Like</button>
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
