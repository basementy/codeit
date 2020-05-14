import Player from "../sprites/player.js";
import MouseTileMarker from "../actions/MouseTileMaker.js";

export default class PlatformScene extends Phaser.Scene {
  preload() {
    this.load.spritesheet(
      "player", "./src/assets/spritesheets/player.png",
      { frameWidth: 32, frameHeight: 32, margin: 1, spacing: 2 }
    );

    this.load.image("spike", "./src/assets/images/spike.png");
    this.load.image("tiles", "./src/assets/tilesets/map.png");
    this.load.tilemapTiledJSON("map", "./src/assets/tilemaps/platform-scene.json");
  }

  create() {
    this.isPlayerDead = false;

    const map = this.make.tilemap({ key: "map" });
    const tiles = map.addTilesetImage("codeit-lvl1", "tiles");

    map.createDynamicLayer("Background", tiles);
    map.createDynamicLayer("Foreground", tiles);

    this.groundLayer = map.createDynamicLayer("Ground", tiles);

    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
    this.player = new Player(this, spawnPoint.x, spawnPoint.y);

    this.groundLayer.setCollisionByProperty({ collides: true });
    this.physics.world.addCollider(this.player.sprite, this.groundLayer);

    this.cameras.main.startFollow(this.player.sprite);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.marker = new MouseTileMarker(this, map);
    this.add
      .text(8, 8, "Setas/WASD para andar e pular", {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#f3f3f3"
      })
      .setScrollFactor(0);
  }

  update(time, delta) {
    this.marker.update();
    this.player.update();

    const pointer = this.input.activePointer;
    const worldPoint = pointer.positionToCamera(this.cameras.main);
  }
}