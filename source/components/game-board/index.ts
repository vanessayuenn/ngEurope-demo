import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'game-board',
  template: `
    <ul class="list-reset">
      <li *ngFor="let row of gameboardArr" class="flex justify-center">
        <emoji
          *ngFor="let emoji of row"
          [emoji]="emoji"
          (isCorrect)="emojiClicked($event)"
          class="flex justify-center items-center"
        >
        </emoji>
      </li>
    </ul>
  `
})
export class GameBoard {

  @Input() rowNum: number;
  @Input() colNum: number;
  @Input() rounds: number;
  @Input() isGameover: boolean;
  @Output() isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();
  private gameboardArr: String[][];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.start();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rounds'] && this.rounds > 0) {
      this.start();
    }
  }

  start() {
    this.gameboardArr = this.gameService.generateGameBoard(this.rowNum, this.colNum);
  }

  emojiClicked($event) {
    if (!this.isGameover) {
      this.isCorrect.emit($event);
    }
  }

}
