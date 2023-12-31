const express=require("express")

const path=require("path")

const app= express()

const views=path.join(__dirname,"/views")

const publicdir=path.join(__dirname,"public")

app.use(express.static(publicdir))

app.set("view engine","ejs")
app.set("views", views)


app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/certifications",(req,res)=>{
    res.render("certifications.ejs")
})
app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
















app.listen("80",()=>{
    console.log("App is up on port 80")
})