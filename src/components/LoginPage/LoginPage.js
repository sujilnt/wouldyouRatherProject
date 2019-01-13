import React from "react";
import { Dropdown } from "react-toolbox";
const albums = [
	{ value: 1, artist: 'Radiohead', album: 'In Rainbows', img: 'http://www.clasesdeperiodismo.com/wp-content/uploads/2012/02/radiohead-in-rainbows.png' },
	{ value: 2, artist: 'QOTSA', album: 'Sons for the Deaf', img: 'http://static.musictoday.com/store/bands/93/product_large/MUDD6669.JPG' },
	{ value: 3, artist: 'Kendrick Lamar', album: 'Good Kid Maad City', img: 'https://cdn.shopify.com/s/files/1/0131/9332/products/0bd4b1846ba3890f574810dbeddddf8c.500x500x1_grande.png?v=1425070323' },
	{ value: 4, artist: 'Pixies', album: 'Doolittle', img: 'http://www.resident-music.com/image/cache/data/Emilys_Packshots/Pixies/Pixies_Doolittlke-500x500.jpg', disabled: true }
];
const countries = [
	{ value: 'EN-gb', label: 'England' },
	{ value: 'ES-es', label: 'Spain'},
	{ value: 'TH-th', label: 'Thailand', disabled: true },
	{ value: 'EN-en', label: 'USA'}
];
const LoginPage = ()=>(
		<div>
		<h1>Login Component </h1>
		<Dropdown
			auto
			source={countries}
			label='Select your favorite album'
			template={this.customItem}
			value={this.state.albumSelected}
		/>
	</div>
);
export default LoginPage;
