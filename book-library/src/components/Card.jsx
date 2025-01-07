import React from "react";

function Card({ book }) {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title text-black font-bold">
                    {item.volumeInfo.title}
                  </h3>
                  <p className="amount text-black font-bold">&#8377;{amount}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
