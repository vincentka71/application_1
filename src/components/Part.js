import React from 'react'

const Part = ({parts}) => {
    return (
    <li>"{parts.name}" - nb exercices = {parts.exercises} </li>
    )
}
          

export default Part
