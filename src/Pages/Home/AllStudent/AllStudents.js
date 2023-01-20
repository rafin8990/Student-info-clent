import React, { useEffect } from 'react';
import { useState } from 'react';
import Slide from 'react-reveal/Slide';
import AllStudentCard from '../AllStudentCard/AllStudentCard';

const AllStudents = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://student-info-server.vercel.app/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <div>
            <Slide bottom>
                <h1 className=' text-4xl font-semibold text-teal-900 text-center m-10 underline'>
                    Our all student here
                </h1>
            </Slide>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-5'>
                {
                    students.map(student => <AllStudentCard
                        key={student?._id}
                        student={student}
                    ></AllStudentCard>)
                }
            </div>

        </div>
    );
};

export default AllStudents;