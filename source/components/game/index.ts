import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'game',
  template: `
  <score-board
    class="flex justify-between col-10"
    [score]="score"
    [targetNum]="targetNum"
    [rounds]="rounds"
    [isGameover]="isGameover"
    (timesUp)="onGameover('fail')"
  ></score-board>
  <game-board
    [rowNum]="rowNum"
    [colNum]="colNum"
    [rounds]="rounds"
    [isGameover]="isGameover"
    (isCorrect)="isCorrect($event)"
  ></game-board>
  <div
    class="px2 py1 rounded button"
    (click)="onRestart()"
  >RESTART</div>
  `
})

export class GameComponent {
  private rowNum: number;
  private colNum: number;
  private score: number;
  private rounds: number;
  private targetNum: number;
  private isGameover: boolean = false;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {
    this.rowNum = 10;
    this.colNum = 6;
    this.score = 0;
    this.rounds = 0;
    this.targetNum = this.gameService.getTargetNum(this.rowNum, this.colNum);
  }

  isCorrect($event) {
    if ($event) {
      this.score++;
    }
    if (this.score === this.targetNum) {
      this.onGameover('success');
    }
  }

  onRestart() {
    this.rounds++;
    this.score = 0;
    this.isGameover = false;
  }

  onGameover(type: string) {
    this.rounds = 0;
    this.isGameover = true;
    this.router.navigate(['/result', type, {
      'hit': this.score,
      'total': this.targetNum
    }]);
  }

}
