

function drawPolygon1() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    const grad= ctx.createLinearGradient(0,0, 185,0);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(0.2, "darkblue");
    grad.addColorStop(0.6, "green");
    grad.addColorStop(1, "purple");

    ctx.lineWidth = 30;
    ctx.strokeStyle = grad;
    ctx.strokeRect(30,80,340,70);

    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = "blue";
    ctx.rect(180, 20, 90, 220);
    ctx.stroke();
}

function drawPolygon2() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    ctx.rotate(20 * Math.PI / 135);


    ctx.strokeStyle = "pink";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(200, 20, 30, 0,  (2 * Math.PI) / 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250, 40, 30, (2 * Math.PI) / 5, (2 * Math.PI) / 5 * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250, 80, 30, (2 * Math.PI) / 5 * 3, (2 * Math.PI) / 5 * 4);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(200, 100, 30, (2 * Math.PI) / 5 * 4, 0);
    ctx.stroke();
}

function drawPolygon3() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();

// Set start-point
    ctx.moveTo(20,20);

// Set sub-points
    ctx.lineTo(100,20);
    ctx.lineTo(175,100);
    ctx.lineTo(20,100);

// Set end-point
    ctx.lineTo(20,20);

// Stroke it (do the drawing)
    ctx.stroke();
}

function drawPolygon4() {
    const canvas = document.getElementById("canvas4");
    const ctx = canvas.getContext("2d");


    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 75, 75);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "yellow";
    ctx.fillRect(50, 50, 75, 75);
    ctx.stroke();

    ctx.arc(50 + 75/2, 50 + 75/2, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
}
