import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients}) =>{
    return (

        <div className={style.recipe}>
            <h1> {title}</h1>
            <h4>Calories: </h4><p>{calories}</p>
            <h4>Ingredients</h4>
            <ul className={style.list}>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                )
        )}
            </ul>
            <img className={style.image} src={image} alt=""></img>
            
        </div>
    );
}

export default Recipe;

