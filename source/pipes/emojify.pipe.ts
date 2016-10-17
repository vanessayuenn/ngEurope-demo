import { Pipe, PipeTransform } from '@angular/core';
import { emojify, get } from 'node-emoji';

@Pipe({name: 'emojify'})
export class Emojify implements PipeTransform {
  transform(val: string): any {
    return emojify(`:${val}:`) || '';
  }
}
