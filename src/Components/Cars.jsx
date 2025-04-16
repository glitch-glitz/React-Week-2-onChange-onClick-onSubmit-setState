import { Fragment, useEffect, useState } from "react";

function Cars() {
  const [cars, setCars] = useState([]);
  // fetching from json
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <ol>
        {cars.map((car) => (
          <Fragment key={car.id}>
            <li>
              <h3>{car.make}</h3>
              <p>Model: {car.model}</p>
              <p>Year:{car.year}</p>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

export default Cars;
