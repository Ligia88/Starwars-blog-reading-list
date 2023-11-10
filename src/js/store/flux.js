const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Planets: [],
			favorites: [],
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			getCharacters: async () => {
				let response = await fetch(`${getStore().urlBase}/people`)
				let data = await response.json()
				console.log("characters")
				for (let item of data.results) {
					let response2 = await fetch(item.url)
					let data2 = await response2.json()
					setStore({
						Characters: [...getStore().Characters, data2.result]
					})
				}
			},
			getPlanets: async () => {
				let response = await fetch(`${getStore().urlBase}/planets`)
				let data = await response.json()
				console.log("planets")
				for (let item of data.results) {
					let response2 = await fetch(item.url)
					let data2 = await response2.json()
					setStore({
						Planets: [...getStore().Planets, data2.result]
					});
				}
			},

			guardarFavoritos:(nombre) => {
				const store = getStore();
				const fav = store.favorites;
				const newFavoritos = [...fav, { name: nombre, id: fav.length }];
				setStore({ favorites: newFavoritos })
				
			},
			
			eliminarFavoritos: (nombre) => { 
				const store = getStore();
				const newFavoritos = store.favorites.filter((favorite)=> favorite.name != nombre)
				setStore({ favorites: newFavoritos })
			}


		}
	};
};

export default getState;
