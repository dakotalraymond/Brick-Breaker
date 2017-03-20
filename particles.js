var Particle = function (x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 4 * Math.random();
    this.lifetime = 20 * Math.random();
    this.Color = color;
}

Particle.prototype.Draw = function (context) {
    context.fillStyle = this.Color;
    context.fillRect(this.x, this.y, 2, 2);
}

Particle.prototype.Update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.lifetime -= 1;
}

function createParticles(x, y, color) {
    for (let i = x; i < brickWidth + x; i+=2){
        for (let j = y; j < brickHeight + y; j+=2) {
            particles.push(new Particle(i, j, color));
        }
    }
}

function drawParticles() {
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].lifetime > 0) {
            particles[i].Draw(context);
        } 
    }
}

    