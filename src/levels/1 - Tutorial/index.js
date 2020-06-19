import Player from "../../actors/player.js";
import MouseTileMarker from "../../utils/MouseTileMarker.js";

export default class LevelOne extends Phaser.Scene {
	constructor() {
		super('Tutorial');
	}

	preload() {
		// Loading Game Music
		this.load.audio("background", "./src/assets/sounds/background.mp3");

		// Loading Tileset Used
		this.load.image("tiles", "./src/assets/tilesets/map.png");

		// Loading Tilemap Used
		this.load.tilemapTiledJSON("map", "./src/assets/tilemaps/lvl1.json");

		// Loading Player Spritesheet
    this.load.spritesheet(
      "player", "./src/assets/spritesheets/player.png",
      { frameWidth: 32, frameHeight: 32, margin: 1, spacing: 2 }
    );
  }

	create() {
		// Initial State
    this.isPlayerDead = false;
		this.lifeCount = 5;

		// Initiate Music
		this.backgroundMusic = this.sound.add("background");
		this.backgroundMusic.play({ volume: 0.4 });

		// Setting Map - Tilemap + Tileset
    const map = this.make.tilemap({ key: "map" });
    const tiles = map.addTilesetImage("codeit-lvl1", "tiles");

		// Objects Mapper
    this.spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
		this.exitPoint = map.findObject("Objects", obj => obj.name === "Exit Point");

		// Setting Layers to States
		this.backgroundLayer = map.createDynamicLayer("Background", tiles);
		this.groundLayer = map.createDynamicLayer("Ground", tiles);

		// Actors + Utils Instance
    this.player = new Player(this, this.spawnPoint.x, this.spawnPoint.y);
		this.marker = new MouseTileMarker(this, map);

		// Collision Definitions
    this.groundLayer.setCollisionByProperty({ collides: true });
		this.physics.world.addCollider(this.player.sprite, this.groundLayer);

		// Camera Definition
    this.cameras.main.startFollow(this.player.sprite);
		this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

		// Graphics
    this.lifeCountText = this.add.text(8, 8, `Life: ${this.lifeCount}`, {
			font: "14px monospace",
      fill: "#000000",
      padding: { x: 15, y: 10 },
      backgroundColor: "#f3f3f3"
		}).setScrollFactor(0);

		// Change Scene
		// this.input.on('pointerup', pointer => this.scene.restart());
  }

  update(time, delta) {
    if (this.isPlayerDead) return;

    this.marker.update();
		this.player.update();

    const pointer = this.input.activePointer;
		const worldPoint = pointer.positionToCamera(this.cameras.main);

    if (pointer.isDown) {
			// TODO: Create Mouse Interaction
    }
  }

  updateLifeCount(count) {
    this.lifeCount = count;

    if (this.lifeCount === 0)
      this.isPlayerDead = true;
    else
      this.lifeCountText.setText(`Life: ${this.lifeCount}`);
  }
}