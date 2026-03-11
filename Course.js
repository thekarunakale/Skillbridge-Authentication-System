//instructor login token= eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTZhMzNkMjI5YzgxNjhhNzU0NmViNiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNzcyNTI4Njk4LCJleHAiOjE3NzI2MTUwOTh9.f6A7T2h1jsc9LeJMvLI2SDl9_Y8YOIZlwKCe_JFj7L8

//student login token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTZhNjQ5MjI5YzgxNjhhNzU0NmViYyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzcyNTI5MjU5LCJleHAiOjE3NzI2MTU2NTl9.D1hk6Ht5IovEhWBstKbfBGQS7G8fX48jt60qCN3ePzQ

//user login token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTZhMzNkMjI5YzgxNjhhNzU0NmViNiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNzcyNTM1MTUzLCJleHAiOjE3NzI2MjE1NTN9.uvkh6d9VJ0g12hjPjn0Z0GrmdI1fmAJMnxPk6ZI2NFM"

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });



module.exports = mongoose.model("Course", courseSchema);