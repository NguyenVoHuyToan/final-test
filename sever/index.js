import express from 'express';
import userRoute from './routes/Route.js';
import {config} from 'dotenv'

config()
const app = express();
const port = 5000

app.use(express.json());
app.use("/user",userRoute);
app.use("/product",userRoute)
app.use("/update",userRoute);

app.post('/', (req, res)=> {
    res.json({
        message: "hello world"
    })
})

app.listen(port,(err) => {
    if (err) {
        console.log(err);
      } else {
        console.log(`Your app is starting at ${port}`);
      }
})