
//Helper function to get a random color - but not too dark
function GetRandomColor() {
    var r = 0, g = 0, b = 0;
    while (r < 100 && g < 100 && b < 100)
    {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return "rgb(" + r + "," + g + ","  + b + ")";
}
//Particle object with random starting position, velocity and color
var Particle = function (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 4 * Math.random();
    this.lifetime = 100;
    this.Color = GetRandomColor();
}
//Ading two methods
Particle.prototype.Draw = function (context) {
    context.fillStyle = this.Color;
    context.fillRect(this.x, this.y, 2, 2);
}
Particle.prototype.Update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.lifetime -= 1;
}
//Create particles
for (var i = 0; i < num_particles; i++){
    particles.push(new Particle(100, 100));
}
    