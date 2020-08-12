import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({courses}) => {
    return (
        <div>
            {courses.map((course, i) => (
                <Header course = {course.name} />
                {course.map((course,i) => 
                <Content parts = {course.part}>)}
               
            )
            )} 
                
    
                                
        </div>
    )
}

export default Course
