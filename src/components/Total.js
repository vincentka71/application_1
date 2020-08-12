import React from 'react'

const Total = ({parts}) => {
    let total = 0
    return (
        <div>
            <p>Number of exercises :</p>
            {/* {parts.forEach((part, i) => {
                total = total + part.exercises
            }
            )}
            {total} */}
        </div>
    )
}

export default Total
