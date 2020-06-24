import React from 'react'

const Content = (props) => {
    return (
        <div>
            {props.part} - nombre d'exercices : 
            {props.exercise}
        </div>
    )
}

export default Content
