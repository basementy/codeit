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
    const tiles = map.addTilesetImage("0x72-industrial-tileset-32px-extruded", "tiles");

    map.createDynamicLayer("Background", tiles);
    this.groundLayer = map.createDynamicLayer("Ground", tiles);
    map.createDynamicLayer("Foreground", tiles);

    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
    this.player = new Player(this, spawnPoint.x, spawnPoint.y);

    this.groundLayer.setCollisionByProperty({ collides: true });
    this.physics.world.addCollider(this.player.sprite, this.groundLayer);

    this.spikeGroup = this.physics.add.staticGroup();
    this.groundLayer.forEachTile(tile => {
      if (tile.index === 77) {
        const spike = this.spikeGroup.create(tile.getCenterX(), tile.getCenterY(), "spike");
        spike.rotation = tile.rotation;

        if (spike.angle === 0) spike.body.setSize(32, 6).setOffset(0, 26);
        else if (spike.angle === -90) spike.body.setSize(6, 32).setOffset(26, 0);
        else if (spike.angle === 90) spike.body.setSize(6, 32).setOffset(0, 0);

        this.groundLayer.removeTileAt(tile.x, tile.y);
      }
    });

    this.cameras.main.startFollow(this.player.sprite);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.marker = new MouseTileMarker(this, map);
    this.add
      .text(16, 16, "Setas/WASD para andar e pular\nClick esquerdo para desenhar as plataformas", {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#ffffff"
      })
      .setScrollFactor(0);
  }

  update(time, delta) {
    if (this.isPlayerDead) return;

    this.marker.update();
    this.player.update();

    const pointer = this.input.activePointer;
    const worldPoint = pointer.positionToCamera(this.cameras.main);
    if (pointer.isDown) {
      const tile = this.groundLayer.putTileAtWorldXY(6, worldPoint.x, worldPoint.y);
      tile.setCollision(true);
    }

    if (
      this.player.sprite.y > this.groundLayer.height ||
      this.physics.world.overlap(this.player.sprite, this.spikeGroup)
    ) {
      this.isPlayerDead = true;

      const cam = this.cameras.main;
      cam.shake(100, 0.05);
      cam.fade(250, 0, 0, 0);

      this.player.freeze();
      this.marker.destroy();

      cam.once("camerafadeoutcomplete", () => {
        this.player.destroy();
        this.scene.restart();
      });
    }
  }
}
