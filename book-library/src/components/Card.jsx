import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function Card({ book, isLoading }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <>
      {isLoading ? ( 
        <p className="text-center text-black font-bold">Loading...</p>
      ) : book.length === 0 ? ( 
        <p className="text-center text-black font-bold">No books found</p>
      ) : (
        book.map((item, index) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <React.Fragment key={index}>
                <div
                  className="card"
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <img src={thumbnail} alt="" />
                  <div className="bottom">
                    <h3 className="title text-black font-bold">
                      {item.volumeInfo.title}
                    </h3>
                    <p className="amount text-black font-bold">
                      &#8377;{amount}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          }
          return null;
        })
      )}

      {/* Render Modal once */}
      {show && (
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
}

export default Card;
