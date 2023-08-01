window.addEventListener('load', function(){
    // ตั้งค่า canvas
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    class InputHandler {

    }

    class Projecttile {

    }
    
    class Particle {

    }

    class Player {
        // ค่าเริ่มต้นของผู้เล่น
        constructor(game) {
            this.game = game
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
        }
        update() {
            this.y += this.speedY;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Enemy {

    }

    class Layer {

    }

    class Background {

    }

    // แสดงบางอย่างให้ผู้เล่นเห็น
    class UI {

    }

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update() {
            this.player.update();
        }
        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    // ทำ loop animate
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});