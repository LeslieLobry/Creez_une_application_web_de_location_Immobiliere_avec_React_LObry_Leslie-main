import products from "../../data/logement.json"
import React from "react";
import { useParams } from "react-router-dom"

function Tags () {
     const { id } = useParams();
const product = products.find((item) => item.id === id)
return(
       <div className="logement-tags">
    {product.tags.map((tags, item) => (
      <div key={item}>
        <div className="tags">{tags}</div>
      </div>
    ))}</div>
)
}
export default Tags