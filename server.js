const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const fs   = require( "node:fs" ),
    mime = require( "mime" ),
    port = 3000;

app.get("/", (req, res) => {
    const html = `
    <html lang="en">
        <head>
            <title>Creative Exercise</title>
            <script src="/app.js"></script>
        </head>
        <body>
            <h1>Multiple Canvases</h1>
            <div>
                <canvas id="canvas1" width="400" height="400"></canvas>
                <button onClick="drawPolygon1()">Create A</button>
            </div>
            <div>
                <canvas id="canvas2" width="400" height="200"></canvas>
                 <button onClick="drawPolygon2()">Create B</button>
            </div>
            <div>
                <canvas id="canvas3" width="400" height="200"></canvas>   
                 <button onClick="drawPolygon3()">Create C</button>             
            </div>
            <div>
                <canvas id="canvas4" width="400" height="200"></canvas>
                 <button onClick="drawPolygon4()">Create D</button>
            </div>
        </body>
    </html>
    `
    res.end(html);
});

app.listen(process.env.PORT || port);
