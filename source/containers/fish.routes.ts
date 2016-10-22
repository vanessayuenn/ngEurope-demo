import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Home } from '../components/home';
import { GameComponent } from '../components/game';
import { ScoreBoard } from '../components/score-board';
import { GameBoard } from '../components/game-board';
import { Emoji } from '../components/emoji';
import { Result } from '../components/result';

export const FISH_GAME_DECLARATIONS = [
  Home,
  GameComponent,
  ScoreBoard,
  GameBoard,
  Emoji,
  Result
];

const routes: Routes = [
  { path: '', component: Home},
  { path: 'game', component: GameComponent},
  { path: 'result/:type', component: Result }
];

export const FISH_ROUTES = RouterModule.forRoot(routes);
