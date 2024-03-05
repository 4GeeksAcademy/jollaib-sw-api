const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			charachters: [],
			planets: [],
			starships: [],
			favourites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharachters: () => {
					fetch("https://www.swapi.tech/api/people").
					then((response)=> {
						console.log('Response:' + response.toString())
						return response.json()
					}).
					then((data)=> {
						console.log('Data:' + data);
						setStore({charachters: data.results});
					}).
					catch((err)=>{return err})
			},
			getPlanets: ()=>{
				fetch("https://www.swapi.tech/api/planets").
				then((response)=>{
					return response.json()
				}).
				then((data)=> {
					setStore({planets: data.results});
				}).
				catch((err)=>{return err})
			},
			getStarShips: () => {
				fetch('https://swapi.dev/api/starships').
				then((response)=>{
					return response.json()
				}).
				then((data)=> {
					console.log('hola' + data.results.name)
					setStore({starships: data.results});
				}).
				catch((err)=> {return err})
			},
			addFav: (element) => {
				const store = getStore(); // Obtener el estado actual
				const updatedFavourites = [...store.favourites, element]; // Crear una nueva lista de favoritos con el nuevo elemento
				setStore({ favourites: updatedFavourites }); // Actualizar el estado con la nueva lista de favoritos
			},
			deleteFav: (element) => {
				const store = getStore();
				const updatedFavourites = store.favourites.filter(item => item !== element);
				setStore({favourites: updatedFavourites});
				console.log(updatedFavourites);
			}
		}
	};
};

export default getState;
