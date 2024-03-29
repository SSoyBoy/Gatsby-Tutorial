import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  console.log(recipes);
  return (
    <div>
      <section className="recipes-container">
        <TagsList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </section>
    </div>
  );
};

export default AllRecipes;