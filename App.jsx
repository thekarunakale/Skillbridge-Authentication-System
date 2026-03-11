import { useEffect, useState } from "react";

function App() {

const [courses, setCourses] = useState([]);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YjEyY2EyMjhlNGFjYWM0YzcyY2UxMyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzczMjE5NDAxLCJleHAiOjE3NzMzMDU4MDF9.yOeKKvwSuxOnfrq5irXnw8GpmfQgKrs9g4VH-rX4BSk";

useEffect(() => {

```
fetch("http://localhost:5000/api/enroll/mycourses", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setCourses(data);
  })
  .catch(err => {
    console.log(err);
  });
```

}, []);

return (
<div style={{ padding: "20px", fontFamily: "Arial" }}>

```
  <h1>SkillBridge Dashboard</h1>
  <h2>My Enrolled Courses</h2>

  {courses.length === 0 ? (
    <p>No courses enrolled</p>
  ) : (
    courses.map((item) => (
      <div
        key={item._id}
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          margin: "10px 0",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}
      >
        <h3>{item.course?.title}</h3>
        <p>{item.course?.description}</p>
        <p><b>Price:</b> ₹{item.course?.price}</p>
      </div>
    ))
  )}

</div>
```

);
}

export default App;
