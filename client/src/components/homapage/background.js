import React from 'react';

export default class Background extends React.Component {
    componentDidMount() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        

        var W = canvas.width=window.innerWidth;
        var H = canvas.height=window.innerHeight;

        var raf = requestAnimationFrame;
        var running = false;

        var TAU = Math.PI * 2;


        function randint(n) { return Math.floor(n * Math.random()); }
        function choose() { return arguments[randint(arguments.length)]; }



        var Cos = Math.cos(Math.PI / 77);
        var Sin = Math.sin(Math.PI / 77);

        /*---------------------------------------------------------------------------*/

        function loop(t) {
            if (running) raf(loop);
            update();
            draw();
        }

        document.onclick = function () {
            if ((running = !running)) raf(loop);
        };

        document.onkeydown = function (e) {
            if (e.which !== 27) return;
            running = false;
            setTimeout(reset, 50);
        };

        /*---------------------------------------------------------------------------*/

        function Bot(x, y, vx, vy) {
            this.x0 = this.x = x;
            this.y0 = this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.age = 1;
            this.color = grey(Math.random());
            this.radius = Math.random() * 5;
            this.decay = choose(0.99, 0.98, 0.97, 0.96, 0.95);
        }


        function grey(nn) {
            var n = Math.floor((1 - nn) * 255);
            return 'rgba(' + n + ',' + n + ',' + n + ',' + 0.3 + ')';
        }


        Bot.prototype.update = function () {
            this.x += this.vx;
            this.y += this.vy;

            var sign = Math.random() > 0.5 ? 1 : -1;
            var vx = this.vx, vy = this.vy;
            var c = Cos, s = sign * Sin;
            this.vx = vx * c - vy * s;
            this.vy = vx * s + vy * c;

            this.radius *= this.decay;
            if (this.radius < 0.3) {
                this.x = this.x0;
                this.y = this.y0;
                this.radius = 3;
                this.color = grey(Math.random());
            }
        };

        Bot.prototype.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, TAU);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        };

        /*---------------------------------------------------------------------------*/

        var B = 500;
        var bots;

        function reset() {
            ctx.clearRect(0, 0, W, H);
            bots = new Array(B);
            for (var i = 0; i < B; i++) {
                var v = Math.random() * 4 - 2;
                var t = Math.random() * TAU;
                bots[i] = new Bot(W / 2, H /3, v * Math.cos(t), v * Math.sin(t));
            }
        }

        function update() {
            for (var i = 0; i < B; i++) bots[i].update();
        }

        function draw() {
            for (var i = 0; i < B; i++) bots[i].draw(ctx);
        }

        /*---------------------------------------------------------------------------*/


        running = true;
        reset();
        raf(loop);
        /**/



    };
    render() {


        return (
            <canvas id="canvas"></canvas>
        )
    }
}


