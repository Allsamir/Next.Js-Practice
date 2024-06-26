"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SearchMeals = () => {
  const [searchBox, setSearchBox] = useState("");
  const [meals, setMeals] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchBox(e.target.searchBox.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`,
        );
        const result = await res.json();
        console.log(result);
        setMeals(result?.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchBox]);
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchBox"
          className="border border-black py-2 px-4 mt-4"
          id=""
          onChange={(event) => setSearchBox(event.target.value)}
        />
        <button className="btn btn-secondary ml-4">Search</button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="border p-12 space-y-4">
            <Image
              alt={meal.strMeal}
              src={meal.strMealThumb}
              width={400}
              height={400}
            />
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
          </div>
        ))}
      </div>
      {meals === null && <div>Noting Found</div>}
    </>
  );
};

export default SearchMeals;
