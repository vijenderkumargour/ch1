import React from 'react';
import { useParams,useSearchParams } from "react-router-dom";

const Product = () => {
    let { category, id } = useParams();
    let [searchPrm,setSearchPrm]=useSearchParams()
    console.log(searchPrm);
    console.log(searchPrm.get('qry'));
    console.log(searchPrm.get('price'));
    return (
        <>
            <h2>This is the {category} product page  </h2>
            <h2>With the id: {id}</h2>
        </>
    );
};

export default Product;
