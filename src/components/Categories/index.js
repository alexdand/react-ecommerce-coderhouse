import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;
`;

const StyledCard = styled.div`
  width: 300px;
  height: 300px;
  > a {
    > img {
      width: 100%;
      height: 80%;
    }
  }
`;

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

const Categories = props => {
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
