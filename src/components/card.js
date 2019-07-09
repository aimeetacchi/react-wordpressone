import React from 'react'

export default function Card({cat}) {
    const {acf} = cat;
    const {name, color, bio, age, breed, image} = acf;
    // console.log(image.url)
    return (
        <div className="card">
            <h3 className="card__name">Name: {name}</h3>
            {/* {image.url !== undefined ? <img className="card__img" src={image.url} alt={image.title} /> : null} */}
            <section className="card__bio">Bio: {bio}</section>
            <section className="card__breed">Breed: {breed}</section>
            <section className="card__age">Age: {age}</section>
            <section className="card__color">Color: {color}</section>
            <button>Read More..</button>
        </div>
    )
}
