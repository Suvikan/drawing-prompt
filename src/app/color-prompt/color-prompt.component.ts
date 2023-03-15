import { Component } from '@angular/core';


@Component({
  selector: 'app-color-prompt',
  templateUrl: './color-prompt.component.html',
  styleUrls: ['./color-prompt.component.css']
})
export class ColorPromptComponent {
  letters = '0123456789ABCDEF';
  primary = '#' + Math.floor(Math.random()*16777215).toString(16);
  second = '#' + Math.floor(Math.random()*16777215).toString(16);
  accent = '#' + Math.floor(Math.random()*16777215).toString(16);



}

