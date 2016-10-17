import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'score-board',
  inputs: ['score'],
  template: `
  <div>score: {{score}}</div>
  <div>time: {{time}}</div>
  `
})
export class ScoreBoard {

  private time: number = 0;
  private maxTime: number = 4500;
  @Output() timesUp: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    let timer = Observable.timer(0,1000);
    timer.subscribe(t => {
      this.time = t;
      if (t >= this.maxTime) {
        this.timesUp.emit();
      }
    });
  }

}
