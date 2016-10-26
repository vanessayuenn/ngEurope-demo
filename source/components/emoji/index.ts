import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'emoji',
  template: `
    <div
      [class.wrong]="clicked && !targetHit"
      [class.clicked]="clicked"
      class="flex justify-center items-center"
      (click)="onClick()"
    >{{emoji | emojify}}
    </div>
  `
})
export class Emoji {

  @Input() emoji: string;
  @Output() isCorrect: EventEmitter<boolean> = new EventEmitter<boolean>();
  private clicked: boolean = false;
  private targetHit: boolean = false;

  constructor(private gameService: GameService) {}

  onClick() {
    if (!this.clicked) {
      this.targetHit = this.gameService.isTarget(this.emoji);
      this.isCorrect.emit(this.targetHit);
    }
    this.clicked = true;
  }
}
