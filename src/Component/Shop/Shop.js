import React, { useEffect, useState } from 'react';
import courseData from '../../courseData/school.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css';

const Shop = () => {
    let [courses,setCourse] = useState([]);
    useEffect(()=>{
        setCourse([...courses,...courseData])
      },[])
    
    console.log(courses)
   

    let [cart,setCart] = useState([])

    const handleEnrolBtn =(course)=>{
        setCart([...cart,course]);

    }
    const handleRemoveFromCartBtn =(course)=>{
        let newCart = cart.filter(element => element.id !== course.id)
        setCart(newCart);
    }


    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className="courses-container">
                {courses.map(element => <Course course={element} key={element.id} handleEnrolBtn={handleEnrolBtn}></Course>)}
            </div>
            <div className="cart-container">
                <Cart handleRemoveFromCartBtn={handleRemoveFromCartBtn} cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;