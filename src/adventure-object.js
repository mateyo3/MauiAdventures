import React, { Component } from 'react';
import { Menu, Button, Container, Card, Header } from 'semantic-ui-react';

class Static extends Component {
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
				reviews: '0'
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
				reviews: '0'
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
				reviews: '0'
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
				reviews: '0'
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
				reviews: '0'
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
				reviews: '0'
				buttonId: 'lavender-farm',
				type: 'activity',
				like: false
			},
		]
	};
}