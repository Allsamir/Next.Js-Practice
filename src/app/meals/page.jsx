import SearchMeals from "@/components/Meals";
import React from "react";
import styles from "./styles.module.css";
export const metadata = {
  title: "Meals",
  description: "All the meals that allsamir loves to share",
};
const MealsPage = () => {
  return (
    <>
      <div className="min-h-screen text-center">
        <h1 className={styles.text_big}>Search Your Favorite Meals</h1>
        <SearchMeals />
      </div>
    </>
  );
};

export default MealsPage;
