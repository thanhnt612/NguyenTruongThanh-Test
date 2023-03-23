import React, { useEffect, useState } from "react";
import room from "../data/data.json";
import districtJson from "../data/quan_huyen.json";
import cityJson from "../data/tinh_tp.json";
import Item from "./Item";

export default function Search() {
  const city = [];
  const district = [];
  for (let key in cityJson) {
    city.push(cityJson[key]);
  }
  for (let key in districtJson) {
    district.push(districtJson[key]);
  }
  const [province, setProvince] = useState();
  const [arrDistrict, setArrDistrict] = useState([]);
  const [districtId, setDistrictId] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [itemBooking, setItemBooking] = useState([]);
  useEffect(() => {
    setArrDistrict(district.filter((item) => item.parent_code === province));
    setItemBooking(
      room.filter(
        (item) =>
          item.city === province &&
          item.district === districtId &&
          setRangePrice(item.price) &&
          setRangeArea(item.area)
      )
    );
  }, [province, districtId, price, area]);
  const setRangePrice = (e) => {
    const value = e;
    if (price === "A") {
      return value < 1000000;
    } else if (price === "B") {
      return value >= 1000000 && value <= 2000000;
    } else if (price === "C") {
      return value >= 2000000 && value <= 3000000;
    } else if (price === "D") {
      return value >= 3000000 && value <= 5000000;
    } else if (price === "E") {
      return value >= 5000000 && value <= 7000000;
    } else if (price === "F") {
      return value >= 7000000 && value <= 10000000;
    }
  };
  const setRangeArea = (e) => {
    const value = e;
    if (area === "G") {
      return value < 20;
    } else if (area === "H") {
      return value >= 20 && value <= 30;
    } else if (area === "I") {
      return value >= 30 && value <= 50;
    } else if (area === "K") {
      return value >= 50 && value <= 60;
    } else if (area === "L") {
      return value >= 60 && value <= 70;
    } else if (area === "M") {
      return value >= 70 && value <= 80;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="home bg-primary bg-opacity-75">
      <div className="search-filter container pt-4">
        <form onSubmit={handleSubmit} className="bg-warning p-4 rounded">
          <div className="row">
            <div className="form-group col-3">
              <p>Tỉnh, thành phố</p>
              <select
                className="form-control"
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value={""}>- Chọn thành phố -</option>
                {city.map((item, index) => {
                  return (
                    <option value={item.code} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-3">
              <p>Quận, huyện</p>
              <select
                className="form-control"
                id="districtId"
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
              >
                <option value={""}>- Chọn quận, huyện -</option>
                {arrDistrict.map((item, index) => {
                  return (
                    <option value={item.code} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-3">
              <p>Khoảng giá</p>
              <select
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>- Chọn mức giá -</option>
                <option value="A">Dưới 1 triệu</option>
                <option value="B">1 triệu - 2 triệu</option>
                <option value="C">2 triệu - 3 triệu</option>
                <option value="D">3 triệu - 5 triệu</option>
                <option value="E">5 triệu - 7 triệu</option>
                <option value="F">7 triệu - 10 triệu</option>
              </select>
            </div>
            <div className="form-group col-3">
              <p>Diện tích</p>
              <select
                className="form-control"
                id="price"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option>- Chọn diện tích -</option>
                <option value="G">Dưới 20 m2</option>
                <option value="H">20 m2 - 30 m2</option>
                <option value="I">30 m2 - 50 m2</option>
                <option value="K">50 - 60 m2</option>
                <option value="L">60 - 70 m2</option>
                <option value="M">70 - 80 m2</option>
              </select>
            </div>
          </div>
        </form>
        <div className="room">
          {province === undefined
            ? room.map((item, index) => {
                return (
                  <div key={index}>
                    <Item product={item} />
                  </div>
                );
              })
            : itemBooking.map((item, index) => {
                return (
                  <div key={index}>
                    <Item product={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
