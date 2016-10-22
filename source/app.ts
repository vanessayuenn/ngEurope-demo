import {
  Component,
  NgModule,
  ViewEncapsulation
} from '@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FishGame } from './components/fish-game-app';
import { GameService } from './services/game.service';
import { Emojify } from './pipes/emojify.pipe';
import { FISH_GAME_DECLARATIONS, FISH_ROUTES } from './containers/fish.routes';


@NgModule({
  declarations: [
    FishGame,
    Emojify,
    FISH_GAME_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FISH_ROUTES
  ],
  providers: [
    GameService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [FishGame]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
