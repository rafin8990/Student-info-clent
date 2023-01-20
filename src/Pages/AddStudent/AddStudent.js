import React from 'react';
import Slide from 'react-reveal/Slide';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

    const navigate=useNavigate()

    const handlePost = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const age = form.age.value;
        const address = form.address.value;
        const about = form.about.value;
        const gender = form.gender.value;
        const eyeColor = form.eyeColor.value;
        const data = {
            name,
            picture,
            email,
            phone,
            age,
            address,
            about,
            gender,
            eyeColor
        }
        fetch('https://student-info-server.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Post added successfully')
                    navigate('/')
                }
            })
    }

    return (
        <div className='mt-20'>
            <Slide bottom>
                <h1 className='text-4xl text-center text-teal-900'>Add Students</h1>
            </Slide>
            <div className='flex justify-center'>
                <Slide bottom>
                    <form onSubmit={handlePost} className='border border-gray-400 shadow-2xl rounded-3xl p-5 lg:m-20 lg:w-1/3'>
                        <input type="text" placeholder="Your photoUrl" name='picture' className="input input-bordered w-96 mt-5 " /> <br />
                        <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-96 mt-5 " /> <br />
                        <input type="text" placeholder="Your Email" name='email' className="input input-bordered w-96 mt-5" /> <br />
                        <input type="text" placeholder="Your Mobile no" name='phone' className="input input-bordered w-96 mt-5" /> <br />
                        <input type="text" placeholder="Your age" name='age' className="input input-bordered w-96 mt-5" /> <br />
                        <input type="text" placeholder="Your Address" name='address' className="input input-bordered w-96 mt-5" /> <br />
                        <input type="text" placeholder="Describe About you" name='about' className="input input-bordered w-96 mt-5" /> <br />
                        <div>
                            <p>Your Gender</p>
                            <select placeholder='your gender' name='gender' className="select select-bordered w-96 mt-5">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <p>Your Eye Color</p>
                            <select placeholder='your gender' name='eyeColor' className="select select-bordered w-96 mt-5">
                                <option>Brown</option>
                                <option>green</option>
                                <option>blue</option>
                            </select>
                        </div>

                        <div>
                            <button type='submit' className='btn btn-success mt-5 w-full'>Update</button>
                        </div>
                    </form>
                </Slide>
            </div>
        </div>
    );
};

export default AddStudent;