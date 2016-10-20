import {
  Component
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'result',
  template: `
  <div class="flex flex-column items-center center">
    <div *ngIf="result === 'success'">
      <img src={{successImg}} class="fit" />
      <h3>Thank you, human.</h3>
      <h4>You have fed my family. <br />Now you can have my first born.</h4>
    </div>
    <div *ngIf="result === 'fail'">
      <img src={{failImg}} class="fit" />
      <h3>You have failed me, human.</h3>
      <h4>You only got me {{hit}}/{{total}} fish. <br />You are dead to me.</h4>
    </div>
    <div
      class="px2 py1 rounded button center"
      (click)="onRestart()"
    >RESTART</div>
  </div>
  `
})
export class Result {

  private routeParams: Subscription;
  private params: Observable<any>;

  private type: Observable<string>;
  private hit: any;
  private total: any;
  private resultMsgs: any;
  private result: string;
  private successImg: string = require('../../assets/thankyou.gif');
  private failImg: string = require('../../assets/fail.gif');

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeParams = this.route.params.subscribe(params => {
      [this.result, this.hit, this.total] = [params['type'], params['hit'], params['total']];
    });
  }

  onRestart() {
    this.router.navigateByUrl('');
  }

}
