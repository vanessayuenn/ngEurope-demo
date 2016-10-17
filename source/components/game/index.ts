import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game',
  template: `
  <score-board
    [score]="score"
    (timesUp)="timesUp()"
  >
  </score-board>
  <game-board
    [rowNum]="rowNum"
    [colNum]="colNum"
    [rounds]="rounds"
    (isCorrect)="isCorrect($event)"
  ></game-board>
  <div
    (click)="onRestart()"
    class="px2 py1 rounded restart"
  >RESTART</div>
  `
})

export class GameComponent {
  private rowNum: number;
  private colNum: number;
  private score: number;
  private rounds: number;
  private gameover: boolean = false;

  constructor() {
    this.rowNum = 10;
    this.colNum = 6;
    this.score = 0;
    this.rounds = 0;
  }

  isCorrect($event) {
    if ($event) {
      this.score++;
    }
  }

  onRestart() {
    this.rounds++;
    this.score = 0;
    this.gameover = false;
  }

  timesUp() {
    console.log('times up!')
    this.rounds = 0;
    this.gameover = true;
  }

}
