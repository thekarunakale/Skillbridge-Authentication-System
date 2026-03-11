import { useEffect, useState } from "react";

function Admin(){

const [stats,setStats] = useState({});

useEffect(()=>{

fetch("http://localhost:5000/api/admin/stats")
.then(res=>res.json())
.then(data=>{
setStats(data);
});

},[]);

return(

<div style={{padding:"20px"}}>

<h1>Admin Dashboard</h1>

<h2>Total Courses : {stats.totalCourses}</h2>
<h2>Total Students : {stats.totalStudents}</h2>
<h2>Total Enrollments : {stats.totalEnrollments}</h2>

</div>

);

}

export default Admin;