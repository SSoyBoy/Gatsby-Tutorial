import React from "react";
import setupTags from "../Utils/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

const TagsList = ({recipes}) => {
  const newTags =  setupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">`{newTags.map((tag,i)=>{
        const [text,value] =tag
        const slug = slugify(text,{lower:true})
        return  <Link to={`/tags/${slug}`} key={i}>{text} ({value})</Link>
      })}`</div>
    </div>
  )
};

export default TagsList;