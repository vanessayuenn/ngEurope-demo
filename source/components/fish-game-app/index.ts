import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fish-app',
  encapsulation: ViewEncapsulation.None,
  template: `
  <router-outlet></router-outlet>`,
  styles: [ require('../../styles/main.less') ],
  host: { ['class']: 'flex flex-column justify-center items-center max-width-2 mx-auto px3' }
})
export class FishGame {}
