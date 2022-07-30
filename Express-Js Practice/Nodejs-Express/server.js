

const express = require("express");
const app = express();
const router = require('./src/components/courses/CoursesRoutes');



const port = process.env.PORT || 3000;

// course DATA BAse

// Middle ware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/courses', router)

// Environment practice

if (app.get('env') === 'development'){
  console.log("something enabled....")
}





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




