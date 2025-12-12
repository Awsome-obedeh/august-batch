import React from 'react'

const Students = () => {
    const students=[
        {id:1, name:"Ms Joy"},
        {id:2, name:"Mr Obinna"},
        {id:3, name:"Mr Victory"},
        { id:4, name:"Mr Dollakpo"},
        {id:5, name:"Mr Miracle"},
        {id:6, name:"Ms Alali"},
        {id:7, name:"Mr Obed"},
    ]
    return (
    <div>
        {students.map(student=>
            (
                <p key={student.id}>{student.name}</p>
            )
        )}
    </div>
  )
}

export default Students
