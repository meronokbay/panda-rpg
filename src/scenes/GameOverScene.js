import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Game Over', { fontSize: 48, color: '#ade6ff' }).setOrigin();
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.1, `Final score: ${this.finalScore}`, { fontSize: 24 }).setOrigin();
    this.add.text(this.scale.width * 0.5, this.scale.height * 0.9, 'Press SPACE to try again.', { fontSize: 24 }).setOrigin();

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game');
    });
  }
}