import Phaser from "phaser";
import LevelOne from "./levels/1 - Tutorial";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  parent: "game",
  pixelArt: true,
  scene: [LevelOne],
  backgroundColor: "#1d212d",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);