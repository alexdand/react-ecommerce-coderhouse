import React from "react";
import { Link } from "react-router-dom";
import { StyledCard, StyledCategories } from "./styles.css";

const CategoryCard = ({ name, route, img }) => {
  return (
    <StyledCard>
      <Link to={route}>
        <img src={img} alt={name} />
        <span>{name}</span>
      </Link>
    </StyledCard>
  );
};

const Categories = () => {
  const categories = [
    { name: "Sandwiches", img: "sandwiches.jpg" },
    { name: "Salads", img: "salads.jpg" },
    { name: "Seafood", img: "seafood.jpg" },
    { name: "Pasta", img: "pasta.jpg" },
    { name: "Meat", img: "meat.jpg" },
  ];
  return (
    <StyledCategories>
      {categories.map(cat => (
        <CategoryCard
          key={cat.name}
          name={cat.name}
          route={`categories/${cat.name.toLowerCase()}`}
          img={`/imgs/${cat.img}`}
        />
      ))}
    </StyledCategories>
  );
};

export default Categories;
