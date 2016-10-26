import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  template: `
  <div class="flex flex-column items-center center">
    <h3>Hello, human.</h3>
    <img src={{img}} class="fit" />
    <h4>Cat iz very hungry! <br />Can you find me all the fish pleazzzee?</h4>
    <h4>These are fish: <br />
    <span class="emoji" *ngFor="let target of targets">{{ target | emojify }}</span>
    </h4>
    <div
    class="px2 py1 rounded button center"
    (click)="startGame()"
    >GET FISHIN'</div>
  </div>
  `
})
export class Home {

  private img: string = require('../../assets/please.gif');
  private imgStart: string = require('../../assets/hello.gif');
  private targets: Array<string>;

  constructor(
    private router: Router,
    private gameService: GameService
  ) {
    this.targets = this.gameService.targets;
  }

  startGame() {
    this.router.navigateByUrl('/game');
  }

}
