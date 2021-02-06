import Entity from './entity';
import * as p5 from 'p5';

export default function Barrier(g, x, y, vx, vy, color) {

  var pos = g.createVector(x,y)
  const colorArray = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink']


  Entity.call(this, pos.x, pos.y, 30, g)

  this.vel = g.createVector(vx,vy) // SET VELOCITY
  // this.rotation = 1

  // Entity.prototype.setRotation.call(this, g.random(-0.03, 0.03));

  this.render = function() {
    g.push()
    g.noFill()
    g.stroke(`rgba(${color[0]},${color[1]},${color[2]},${1})`);
    g.translate(this.pos.x, this.pos.y)
    g.rotate(this.heading)
    g.rectMode(g.CENTER)
    g.strokeWeight(g.random(.5, 1.5));
    g.rect(0, 0, this.r, this.r)
    g.pop()
  }

  this.vertices = function () {
    var barrierVertices = [
      p5.Vector.add(g.createVector(-this.r/2, this.r/2), this.pos),
      p5.Vector.add(g.createVector(this.r/2, this.r/2), this.pos),
      p5.Vector.add(g.createVector(-this.r/2, -this.r/2), this.pos),
      p5.Vector.add(g.createVector(-this.r/2, -this.r/2), this.pos),
    ]
    return barrierVertices;
  }

  this.offscreen = function () {
    if (this.pos.x < 0) {
      return true;
    } else {      
      return false;
    }
  }

}

Barrier.prototype = Object.create(Entity.prototype)