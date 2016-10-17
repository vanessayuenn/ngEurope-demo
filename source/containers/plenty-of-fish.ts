import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fish-app',
  template: `<game></game>`,
  styles: [ require('../styles/main.less') ]
})
export class PlentyOfFishGame {
  constructor() { }
}
