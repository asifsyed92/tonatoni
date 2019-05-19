var canvas;
var c;
var timer;
var cirx = 300;
var ciry = 200;
var counter = 0;
var posx = 300;
var posy = 200;

//Background
function drawBackground() {
    //USA
    c.fillStyle = '#0b0';
    c.fillRect(0, 0, 100, canvas.height);
    c.fillStyle = '#3c3';
    c.fillRect(3, 10, 90, canvas.height-40);

    //Ocean
    drawOcean();

    //India
    c.fillStyle = '#D77F27';
    c.fillRect(500, 0, 100, canvas.height);
    c.fillStyle = '#EA8B2C';
    c.fillRect(503, 10, 90, canvas.height-40);
};

//Ocean
function drawOcean(){
    let inc = Math.sin(counter/50)*10;

    //Water
    c.fillStyle = '#00f';
    c.fillRect(100, 0, 400, canvas.height);
    
    //Waves
    c.fillStyle = '#fff';
    c.fillRect(130, 30, 30+inc, 1);

    c.fillStyle = '#00e';
    c.fillRect(150, 100, 60+inc, 2);

    c.fillStyle = '#fff';
    c.fillRect(250, 230, 30+inc, 1);

    c.fillStyle = '#00e';
    c.fillRect(200, 250, 200+inc, 2);

    c.fillStyle = '#00e';
    c.fillRect(300, 70, 100+inc, 2);

    c.fillStyle = '#00e';
    c.fillRect(370, 260, 50+inc, 2);

    c.fillStyle = '#00e';
    c.fillRect(250, 300, 50+inc, 2);

    c.fillStyle = '#fff';
    c.fillRect(400, 60, 20+inc, 1);
}



//Circle
function drawCircle(x, y, r) {
    c.fillStyle = 'pink';
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI, true);
    c.stroke();
    c.fill();
}


//Initialize
function init() {
     canvas = document.getElementById('canvas');
     c = canvas.getContext('2d');
     document.onmousemove = mousepos; //Mouse movement listner.
     requestAnimationFrame(draw);

}

//Track Mouse moments
function mousepos(event){
    posx = event.clientX;
    posy = event.clientY;
}

//Draw the canvas
function draw(){
    c.clearRect(0,0,canvas.width,canvas.height);
    drawBackground();

    drawCircle(cirx+10,ciry+10,10);
    cirx = posx;
    ciry = posy;
    counter= counter+1;

    requestAnimationFrame(draw);
    
}
