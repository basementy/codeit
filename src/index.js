import PlatformScene from "./scenes/PlatformScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  pixelArt: true,
  backgroundColor: "#1d212d",
  scene: PlatformScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);