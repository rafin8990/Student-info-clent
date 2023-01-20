import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const AllStudentCard = ({ student }) => {

    const { _id, picture, name, gender, email, age } = student;

    return (
        <div>
            <Slide bottom>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <h2>Age: {age}</h2>
                        <h2>Gender: {gender}</h2>
                        <p>Email: {email}</p>
                    </div>
                    <div>
                        <button className='btn btn-success w-full'><Link to={`/students/${_id}`}>View Details</Link></button>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default AllStudentCard;