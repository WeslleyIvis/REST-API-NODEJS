import React from 'react'
import Products from './Products';

export interface Product {
    _id: string;
    name: string;
    value: string;
    category: string;
    image: string;
  }

const CategoryProductNavSelection = (props: {category: string, name: string}) => {

  return (
    <section>      
        <div className='category-section'>
            <div>
                <a href="/">Home - </a>
                <span>{props.category}</span>
                <h1>{props.category.toUpperCase()}</h1>
            </div>
        </div>

        {props.category || props.name ? <Products category={props.category} name={props.name} display='products-content' /> : null}    
    </section>
  )
}

export default CategoryProductNavSelection
