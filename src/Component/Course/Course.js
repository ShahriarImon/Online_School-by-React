import React from 'react';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const { id, name, price, img } = props.course
    return (
        <div className='course'>
            <div className="course-img">
                <img src={img} alt="" />
            </div>
            <h3> <strong>{name}</strong></h3>
            {/* <br /> */}
            <div className="courseLower">
                <p><FontAwesomeIcon icon={faDollarSign} /> <strong>{price}</strong></p>
                <button onClick={()=>props.handleEnrolBtn(props.course)} className='addCartBtn'> <strong><FontAwesomeIcon icon={faCartShopping} /> Enrol Now</strong></button>
            </div>
        </div>
    );
};

export default Course;