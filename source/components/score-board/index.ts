import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'score-board',
  template: `
  <div>score: {{score}}/{{targetNum}}</div>
  <div>time: {{time}}</div>
  `
})
export class ScoreBoard {

  private time: number;
  private maxTime: number = 45;
  private timer: Subscription;
  @Input() score: number;
  @Input() targetNum: number;
  @Input() rounds: number;
  @Input() isGameover: boolean;
  @Output() timesUp: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rounds'] && this.rounds > 0 && this.timer) {
      this.timer.unsubscribe();
      this.startTimer();
    }
    if (changes['isGameover'] && this.isGameover && this.timer) {
      // console.log(this.time);
      this.timer.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }

  startTimer() {
    this.time = this.maxTime;
    this.timer = Observable.timer(0, 1000).subscribe(t => {
      this.time = this.maxTime - t;
      if (this.time <= 0) {
        this.timesUp.emit();
        this.timer.unsubscribe();
      }
    });
  }

}
