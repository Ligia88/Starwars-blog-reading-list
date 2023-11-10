import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store,actions } = useContext(Context)
	return (
		<div className="container">
			{/* Contenedor de Characters */}
			<div className="my-carousel d-flex overflow-x-scroll">
				{store.Characters.map((item, i) => {
					return (
						<div className="my-card" key={i}>
							<h1 className="text-danger my-title">Characters</h1>
							<div>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="Characters" />
							</div>
							<div className="body-text">
								<p><strong>Name:</strong> {item.properties?.name}</p>
								<p><strong>Gender:</strong> {item.properties?.gender}</p>
								<p><strong>Hair Color:</strong> {item.properties?.hair_color}</p>
								<p><strong>Eye Color:</strong> {item.properties?.eye_color}</p>

							</div>
							<div className="button-footer">
								<Link to={`/characters/${item._id}`} className="btn btn-primary">Learn More</Link>
								<button className="favorite-button">
								<span className="heart-icon" 
								aria-label="Añadir a favoritos" 
								role="img"
									onClick = {()=>{
										if(store.favorites.find((favorite)=>favorite.name==item.properties?.name)){
                                         actions.eliminarFavoritos(item.properties.name)
										}else {
									     actions.guardarFavoritos(item.properties.name)
										}
										}} >{store.favorites.find((favorite)=> favorite.name==item.properties?.name) ? "❤️" : (<i className="far fa-heart" ></i>) }</span> 
								</button>

							</div>
						</div>
					);
				})}
				{/* Clones de la carta */}
			</div>

			{/* Contenedor de Planets */}
			<div className="my-carousel d-flex overflow-x-scroll">
				{store.Planets.map((item) => {
					return (
						<div className="my-card">
							<h1 className="text-danger my-title">Planets</h1>
							<div>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="Planets" />
							</div>
							<div className="body-text">
								<p>Population: {item.properties.population}</p>
								<p>Terraine: {item.properties.name}</p>
							</div>
							<div className="button-footer">
                    <Link to={`/planets/${item._id}`} className="btn btn-primary">Learn More</Link>
                    <button className="favorite-button">
                        <span className="heart-icon" 
                            aria-label="Añadir a favoritos" 
                            role="img"
                            onClick={() => {
                                if (store.favorites.find((favorite) => favorite.name === item.properties.name)) {
                                    actions.eliminarFavoritos(item.properties.name)
                                } else {
                                    actions.guardarFavoritos(item.properties.name)
                                }
                            }}>
                            {store.favorites.find((favorite) => favorite.name === item.properties.name) ? "❤️" : (<i className="far fa-heart"></i>)}
                        </span>
                    </button>
                </div>
            </div>
        )
    })}
    {/* Clones de la carta */}
				{/* Clones de la carta */}
			</div>
		</div>
	);
};
