import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FISH_GAME_DECLARATIONS, AMI_SUPERHERO_ROUTES, AMI_SUPERHERO_DECLARATIONS } from './containers/superhero.routes';
import { GameService } from './services/game.service';
import { Emojify } from './pipes/emojify.pipe';

@Component({
  selector: 'fish-app',
  encapsulation: ViewEncapsulation.None,
  template: `<game class="flex flex-column justify-center items-center"></game>`,
  styles: [ require('./styles/main.less') ]
})
export class PlentyOfFishGame {}

@NgModule({
  declarations: [
    PlentyOfFishGame,
    Emojify,
    FISH_GAME_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [PlentyOfFishGame]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
