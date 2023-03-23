import React from "react";

export default function Item({ product }) {
  return (
    <div className="card-body pb-4">
      <div className="item row flex-row rounded bg-light border border-danger">
        <div className="thumbnail col-4">
          <img src={product.thumbnail} alt="" className="w-100" />
        </div>
        <div className="detail col-8">
          <h4 className="text-danger fw-bold">{product.title}</h4>
          <h5 className="text-success fw-bold">
            {product.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}{" "}
            /Tháng
          </h5>
          <p className="text-dark fw-bold">Diện tích: {product.area} m2</p>
          <p>{product.content}</p>
        </div>
      </div>
    </div>
  );
}
