const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors=require("cors");
app.use(cors());
app.use(express.static("site"));
const port=8000;
const server=app.listen(port,listening);
function listening() {
	console.log("Server Running on Port:"+port);
}
