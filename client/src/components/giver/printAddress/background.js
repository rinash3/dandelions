import React, { Component } from "react";
import "./style.css"

class Background extends Component {

    componentDidMount() {
        var  r_canvas,
            r_ctx,
            r_height,
            b,
            b_seed = {
                maxSeedCount: 500,
                seedCount: 0,
                seedFreq: 1,
                seeds: []
            },
            r_seed = {
                maxSeedCount: 500,
                seedCount: 0,
                seedFreq: 5,
                seeds: []
            },
            r_width,
            r_originx,
            r_originy,
            s_height,
            s_width,
            i,
            SeedType = {
                BLOW: 0,
                RANDOM: 1,
                STATIC: 2
            },
            pi = Math.PI,
            twoPi = pi * 2,
            mouseMove = false,
            b_velocity = 1;

        function clear(ctx, width, height) {
            ctx.clearRect(0, 0, width, height);
        }

        function rand(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function randInt(min, max) {
            return Math.random() * (max - min) + min;
        }

       

        function spawnSeed(type, seed) {
            if (seed.seedCount < seed.maxSeedCount) {
                seed.seeds.push(new Seed(type));
                seed.seedCount++;
            } else {
                console.log("hi");
            }
        }

        function main() {
            r_width = 1800;
            r_height = 1800;
            r_canvas = document.getElementById("r");
            r_ctx = r_canvas.getContext("2d");
            r_canvas.width = r_width;
            r_canvas.height = r_height;
            r_originx = r_width / 2;
            r_originy = r_height / 2;

            /*s_width = 300;
            s_height = 300;= document.getElementById( 'c' ); 
          s_ctgetContext( '2d' );width = s_width ;height = s_height ;*/
            document.querySelector("#r").addEventListener("mousemove", function (e) {
                mouseMove = true;
                var cRect = document.querySelector("#r").getBoundingClientRect();
                r_originx = e.clientX - cRect.left;
                r_originy = e.clientY - cRect.top;
            });
            document.querySelector("#r").addEventListener("mousedown", function (e) {
                b_velocity = 0.1;
            });
            document.querySelector("#r").addEventListener("mouseup", function (e) {
                b_velocity = 1;
            });
            loop();
        }

        var Seed = function (type) {
            this.const(type);
        };

        Seed.prototype.const = function (type) {
            if (type === SeedType.BLOW) {
                this.alpha = 0;
                this.ox = r_originx + rand(-1, 1);
                this.oy = r_originy + rand(-1, 1);
                this.mx = r_width - 100 || 0;
                this.my = r_height - 100 || 0;
                this.coord = {
                    x: this.ox,
                    y: this.oy
                };
                this.radius = randInt(0, 0.5);
                this.radiusGrow = 0.05;
                this.maxRadius = 20;
                this.fadeIn = true;
                this.fadeFreqIn = 0.05;
                this.fadeFreqOut = 0.0035;
                this.vx = randInt(-1, 1);
                this.vy = randInt(-1, 1);
                this.velocity = {
                    x: this.vx / b_velocity,
                    y: this.vy / b_velocity
                };
            } else if (type === SeedType.RANDOM) {
                this.alpha = 0;
                this.ox = r_width / 2 + rand(-1, 1);
                this.oy = r_height / 2 + rand(-1, 1);
                this.mx = r_width - 100 || 0;
                this.my = r_height - 100 || 0;
                this.coord = {
                    x: this.ox,
                    y: this.oy
                };
                this.radius = rand(1, 15);
                this.maxRadius = 20;
                this.fadeIn = true;
                this.fadeFreqIn = 0.05;
                this.fadeFreqOut = 0.0035;
                this.vx = randInt(-1, 1);
                this.vy = randInt(-1, 1);
                this.velocity = {
                    x: this.vx,
                    y: this.vy
                };
            } else if (type === SeedType.STATIC) {
                this.ox = s_width / 2 + rand(-20, 40) + 50;
                this.oy = s_height / 2 + rand(50, -200) + 50;
                this.coord = {
                    x: s_width / 2,
                    y: s_height / 2
                };
                this.radius = 50;
                this.vx = 0.5;
                this.vy = 0.5;
                this.velocity = {
                    x: this.ox + Math.cos(twoPi) * this.radius,
                    y: this.oy + Math.sin(twoPi) * this.radius
                };
            }
        };

        Seed.prototype.render = function (ctx, s) {
            ctx.beginPath();
            ctx.arc(this.coord.x, this.coord.y, this.radius, 0, twoPi);
            ctx.shadowBlur = 10;
            ctx.shadowColor = "hsla(60, 96%, 81%, 1.0)";
            ctx.fillStyle = "hsla(360, 100%, 100%," + this.alpha + " )";
            ctx.fill();
            /*
            ctx.strokeStyle = 'hsla(360, 100%, 100%,' + this.alpha + ')';
            ctx.stroke();
            */
            // if (seeds.indexOf(s) % seedFreq == 1) {
            // 		ctx.filter = 'brightness(200%)';
            // 	}
            //
        };

        Seed.prototype.update = function (type, s, seed, b) {
            if (type === SeedType.BLOW || type === SeedType.RANDOM) {
                this.coord.x += this.velocity.x;
                this.coord.y += this.velocity.y;
                //this.velocity.x = this.velocity.x * 0.05;
                //this.velocity.y = this.velocity.y * 0.05;
            } else if (type === SeedType.STATIC) {
                this.coord.x += Math.cos(this.coord.x + twoPi) * this.radius * 0.9 / 1;
                this.coord.y += Math.sin(this.coord.y + twoPi) * this.radius * 0.9 / 1;
            }
            if (type === SeedType.BLOW) {
                this.radius += this.radiusGrow;
            }
            if (this.fadeIn) {
                this.alpha += this.fadeFreqIn;
            } else {
                this.alpha -= this.fadeFreqOut;
            }
            if (this.alpha >= 1) {
                this.fadeIn = false;
            } else if (this.alpha <= 0) {
                seed.seeds.splice(b, 1);
                seed.seedCount--;
            }
        };

        Seed.prototype.c_update = function (s) { };

        function loop() {
            requestAnimationFrame(loop);
            constantSeeds();
            /*document.querySelector(".seed").addEventListener("click", function() {
                r_makeSeed = true;
                console.log('clicked');
                blowSeeds();
                
            });*/
        }

        function constantSeeds() {
            spawnSeed(SeedType.RANDOM, r_seed);
            if (mouseMove) {
                spawnSeed(SeedType.BLOW, b_seed);
            }
            clear(r_ctx, r_width, r_height);
            r_ctx.globalCompositeOperation = "lighter";
            i = r_seed.seeds.length;
            while (i--) {
                var s = r_seed.seeds[i];
                s.update(SeedType.RANDOM, s, r_seed);
                s.render(r_ctx, s);
            }
            if (mouseMove) {
                b = b_seed.seeds.length;
                while (b--) {
                    var b_s = b_seed.seeds[b];
                    b_s.update(SeedType.BLOW, b_s, b_seed, b);
                    b_s.render(r_ctx, b_s);
                }
            }
        }

        main();
    }


    render() {
        return (
            <div>
                <div className="final-background"></div>
                <div className="center">
                    <div className="seed-wrapper">
                        <canvas id="c" className="seed"></canvas>
                        <canvas id="r"></canvas>
                    </div>

                    <div className="dandelion"></div>

                </div>
            </div>
        )

    };
}

export default Background;