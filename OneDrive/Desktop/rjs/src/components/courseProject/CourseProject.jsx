import React, { useState } from 'react'

function CourseProject() {
  const buttonFilter = ["All", "Free", "Paid"];
  const courseData = [
    {
      id: 1,
      title: "kowaad",
      price: 2,
      isNew: true,
    },
    {
      id: 2,
      title: "labaad",
      price: 20,
      isNew: false,
    },
    {
      id: 3,
      title: "seddexaad",
      price: 28,
      isNew: true,
    },
    {
      id: 4,
      title: "Afaraad",
      price: 0,
      isNew: false,
    },
    {
      id: 5,
      title: "Shanaad",
      price: 2,
      isNew: true,
    },
    {
      id: 6,
      title: "lixaad",
      price: 0,
      isNew: false,
    },
  ];

   const [allCourses, setAllCourses] = useState(courseData);
   const [AllFilteredCourses, setAllFilteredCourses] = useState(courseData);
  
     const handleClick = (e) =>{
      const filtereCourses = (e.target.innerHTML);
 
      if(filtereCourses === "Free"){
        const filtered = allCourses.filter((course)=> course.price === 0)
        setAllFilteredCourses(filtered)
      }
      else if(filtereCourses === "Paid"){
        const filtered = allCourses.filter((course)=> course.price > 0)
        setAllFilteredCourses(filtered)
      }
      else{
        setAllFilteredCourses(allCourses)
      }
   }
  return (
    <div className='courses'>
      {buttonFilter.map((p)=> <button onClick={handleClick}>{p}</button>)}
      {AllFilteredCourses.map((c)=>(
        <div className='course'>
          <p>{c.title}</p>
          <p>{c.price}</p>
          <p>{c.isNew && "New"}</p>
          </div>
      ))}
    </div>
  )
}

export default CourseProject