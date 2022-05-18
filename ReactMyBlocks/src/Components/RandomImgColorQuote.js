import React, { useState } from "react";

const RandomImgColorQuote = () => {
    const [quotes, setQuotes] = useState("");

    const getImg = () => {
        const image = document.getElementById("image");
        fetch("http://random.dog/woof.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.url);
            });
    };

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuotes(data[randomNum]);
            });
    };

    return (
        <div>
            <div className="image__container _container">
                <img  className="quotes__title" />
                <button className="image__change-button _btn" onClick={getImg}>
                    image
                </button>
            </div>
            <div className="quotes__container">
                <div className="quotes__title">
                    {quotes.text}
                    <span>{quotes.author}</span>
                </div>
                <button className="quote__change-button _btn" onClick={getQuote}>
                    get quote
                </button>
            </div>
        </div>
    );
};

export default RandomImgColorQuote;
