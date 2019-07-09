import React from 'react'

export default function Card({cat, catPage}) {
    const {acf} = cat;
    const {name, color, bio, age, breed, image} = acf;
    // console.log(acf)
    return (
        <div className="card">
            <h3 className="card__name">Name: {name}</h3>
            {/* {image.url !== undefined ? <img className="card__img" src={image.url} alt={image.title} /> : null} */}
            <section className="card__bio">Bio: {bio}</section>
            <section className="card__breed">Breed: {breed}</section>
            <section className="card__age">Age: {age}</section>
            <section className="card__color">Color: {color}</section>
            <section className="btn_container">
                <button className="btn" onClick={() => catPage(cat.id)}>Read More..</button>
            </section>
            
        </div>
    )
}
