import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Update from '../Update/Update';
import Slide from 'react-reveal/Slide';

const StudentDetails = () => {
    const details = useLoaderData()
    const navigate = useNavigate()


    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure to delete this')
        if (proceed) {
            fetch(`https://student-info-server.vercel.app/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully!")
                        navigate('/')
                    }
                })
        }
    }
    return (

        <div>
            <div className="card bg-base-100 ">
                <Slide bottom>
                    <figure><img className='' src={details.picture} alt="Movie" /></figure>
                </Slide>
                <Slide bottom>
                    <div className='m-5 lg:text-center'>
                        <div >
                            <h1 className='lg:text-4xl'> Name: {details.name}</h1>
                            <p className='text-xl'>Email: {details.email}</p>
                        </div>
                        <div >
                            <h1 className='text-xl'> Eye Color: {details.eyeColor}</h1>
                            <p className='text-xl'>Gender: {details.gender}</p>
                        </div>
                        <div >
                            <h1 className='text-xl'> Address: {details.address}</h1>
                            <p className='text-xl'>Phone: {details.phone}</p>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(details._id)} className='btn btn-warning ml-5 mt-5'><Link>Delete</Link></button>
                        </div>
                    </div>
                </Slide>
            </div>
            <Update id={details._id}

            ></Update>
        </div>
    );
};

export default StudentDetails;