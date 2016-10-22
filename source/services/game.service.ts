import {Inject, Injectable} from '@angular/core';

const DIFFICULTY = {
  HARD: 0.05,
  MODERATE: 0.1,
  EASY: 0.3
};

@Injectable()
export class GameService {

  private difficulty: number = DIFFICULTY.MODERATE;
  private emojiArr: Array<string> = [
    'rat', 'mouse2', 'ox', 'water_buffalo', 'cow2', 'tiger2', 'leopard', 'rabbit2', 'cat2', 'dragon', 'crocodile', 'whale2', 'snail', 'snake', 'racehorse', 'ram', 'goat', 'sheep', 'monkey', 'rooster', 'chicken', 'dog2', 'pig2', 'boar', 'elephant', 'octopus', 'shell', 'bug', 'ant', 'bee', 'honeybee', 'beetle', 'turtle', 'hatching_chick', 'baby_chick', 'hatched_chick', 'bird', 'penguin', 'koala', 'poodle', 'dromedary_camel', 'camel', 'dolphin', 'flipper', 'mouse', 'cow', 'tiger', 'rabbit', 'cat', 'dragon_face', 'whale', 'horse', 'monkey_face', 'dog', 'pig', 'frog', 'hamster', 'wolf', 'bear', 'panda_face', 'pig_nose', 'feet', 'paw_prints', 'chipmunk', 'hotdog', 'taco', 'burrito', 'chestnut', 'seedling', 'evergreen_tree', 'deciduous_tree', 'palm_tree', 'cactus', 'hot_pepper', 'tulip', 'cherry_blossom', 'rose', 'hibiscus', 'sunflower', 'blossom', 'corn', 'ear_of_rice', 'herb', 'four_leaf_clover', 'maple_leaf', 'fallen_leaf', 'leaves', 'mushroom', 'tomato', 'eggplant', 'grapes', 'melon', 'watermelon', 'tangerine', 'lemon', 'banana', 'pineapple', 'apple', 'green_apple', 'pear', 'peach', 'cherries', 'strawberry', 'hamburger', 'pizza', 'meat_on_bone', 'poultry_leg', 'rice_cracker', 'rice_ball', 'rice', 'curry', 'ramen', 'spaghetti', 'bread', 'fries', 'sweet_potato', 'dango', 'oden', 'sushi', 'fried_shrimp', 'fish_cake', 'icecream', 'shaved_ice', 'ice_cream', 'doughnut', 'cookie', 'chocolate_bar', 'candy', 'lollipop', 'custard', 'honey_pot', 'cake', 'bento', 'stew', 'egg'
  ];
  private emojiTargets: Array<string> = [
    'fish', 'tropical_fish', 'blowfish', 'fishing_pole_and_fish'
  ];

  constructor() { }

  generateGameBoard(rowNum: number, colNum: number): string[][] {
    let targetCount = 0;
    let gameboard = new Array(rowNum).fill('').map(() => {
      return new Array(colNum).fill('').map(() =>
        this.emojiArr[this.getRandomInt(this.emojiArr.length)]
      );
    });
    while (targetCount < this.getTargetNum(rowNum, colNum)) {
      let randRow = this.getRandomInt(rowNum);
      let randCol = this.getRandomInt(colNum);
      // make sure there are no two targets side by side
      if (!this.isTarget(gameboard[randRow][randCol])
       && !this.isTarget(gameboard[randRow][randCol === colNum - 1 ? randCol : randCol + 1])
       && !this.isTarget(gameboard[randRow][randCol === 0 ? randCol : randCol - 1])
       && !this.isTarget(gameboard[randRow === rowNum - 1 ? randRow : randRow + 1][randCol])
       && !this.isTarget(gameboard[randRow === 0 ? randRow : randRow - 1][randCol])
      ) {
        gameboard[randRow][randCol] = this.emojiTargets[this.getRandomInt(this.emojiTargets.length)];
        targetCount++;
      }
    }

    return gameboard;
  }

  get targets(): Array<string> {
    return this.emojiTargets;
  }

  getTargetNum(rowNum: number, colNum: number): number {
    return Math.floor(rowNum * colNum * this.difficulty);
  }

  isTarget(val: string): boolean {
    return this.emojiTargets.indexOf(val) >= 0;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
