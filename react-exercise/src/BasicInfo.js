import React from 'react'

const basicInfo = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Number: {props.number}</p>
            <p>DOB: {props.dob}</p>
        </div>
    )
}

export default basicInfo;