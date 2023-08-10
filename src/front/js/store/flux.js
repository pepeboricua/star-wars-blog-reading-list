const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			people:[],
			starships:[],
			planets:[],
			favorites:[]
		},
		actions: {
			addFavorite: (name) => {
				let favorites = getStore().favorites
				favorites.push(name)
				setStore({favorites:favorites})	
			},

			removeFavorite: (index) => {
				let favorites = getStore().favorites
				let filterFavorites = favorites.filter((item,idx) => idx != index)
				setStore({favorites:filterFavorites})
			},

			getPeople: () => {
				fetch("https://swapi.dev/api/people")
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setStore({people: data.results})
				})
				.catch((error) => console.error(error))
			},

			getStarships: () => {
				fetch("https://swapi.dev/api/starships")
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setStore({starships: data.results})
				})
				.catch((error) => console.error(error))
			},

			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setStore({planets: data.results})
				})
				.catch((error) => console.error(error))
			},			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
			}
		}
	};
};

export default getState;
