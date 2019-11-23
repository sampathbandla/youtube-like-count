const express = require("express")
const app = express()
var fetchVideoInfo = require('youtube-info');

app.use(express.static('public'))

app.listen(process.env.PORT || 3000,(err) =>
{
    if(err)
    throw err
    console.log("Started!")
})

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/likes",(req,res) => {
    
    fetchVideoInfo(req.query.a, function (err, videoInfo) {
        if (err) res.redirect("/");
        res.send("<p style=\"font-size:40vw\" id='id' dataid=\"" + req.query.a +"\">"+videoInfo.likeCount+"</p><script src='/jquery.js'></script><script src='/app.js'></script>")
    });
    
});
app.get("/likess",(req,res) => {
    fetchVideoInfo(req.query.a, function (err, videoInfo) {
        res.send(videoInfo.likeCount.toString())
    });
});