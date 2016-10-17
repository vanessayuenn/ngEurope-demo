import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { GameComponent } from '../components/game';
import { ScoreBoard } from '../components/score-board';
import { GameBoard } from '../components/game-board';
import { Emoji } from '../components/emoji';

export const AMI_SUPERHERO_DECLARATIONS = [
  // AboutComponent,
  // GameComponent,
  // GameButtonComponent,
  // GameTitleComponent,
  // HomeComponent,
  // MatchesSummaryComponent,
  // ScoresButtonComponent,
  // StartButtonComponent,
  // SubTitleComponent,
  // SwipeComponent
];

export const FISH_GAME_DECLARATIONS = [
  GameComponent,
  ScoreBoard,
  GameBoard,
  Emoji
];

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'game/:count', component: GameComponent},
  // { path: 'about', component: AboutComponent },
  // { path: 'scores/:type', component: MatchesSummaryComponent },
];

export const AMI_SUPERHERO_ROUTES = RouterModule.forRoot(routes);
