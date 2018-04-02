import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav className="navbar navbar-default">
         <div className="navbar-header">
              <a id="menu-item" className="shop main-nav text-uppercase font-weight-bold" href="#">
            Maui Adventures
              </a>
            </div>
         <div id="menu-standard" className="nav">
              <ul>
                <li id="menu-item" className="saved main-nav text-uppercase font-weight-bold"><a href="#">Saved</a></li>
                <li id="menu-item" className="sign-in main-nav text-uppercase font-weight-bold"><a href="#">Sign-in</a></li>
              </ul>
            </div>
        </nav>

        <header className="header">
          <div className="row">
            <div className="col-md-6"><h3 id="now-viewing">NOW VIEWING</h3></div>
            <div className="col-md-6"><h3 id="likes">LIKES: <span>0</span></h3></div>
          </div>
        </header>

        <div className="toggle-buttons">
          <button>Food</button>
          <button>Activities</button>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div>
              <div>
                <img className="side-image" src="https://static1.squarespace.com/static/559eb4cee4b091a272404aaf/t/5a0bd4484192028d4a89a588/1510724722883/IMG_8088+mochiko+chicken.jpg?format=1500w" />
                <h3 className="title">Tinroof</h3>
                <p className="description"><a className="website" href="http://www.tinroofmaui.com/" target = " _blank">Tinroof</a> is a new generation mom &amp pop shop, owned by Internationally recognized Chef Sheldon Simeon &amp his wife, Janice.</p>
                <p className="location">360 Papa Pl, Kahului, HI 96732</p>
                <p className="rating">Rating: 9/10</p>
                <p className="reviews">Reviews: 0</p>
                <button className="btn btn-secondary" type="button">Like</button>
              </div>
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

        <footer className="main-footer">
          <span>&copy;2018 React Bootcamp</span>
        </footer>

      </div>
    );
  }
}

export default App;
