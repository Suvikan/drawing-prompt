import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'drawing-prompt';
  faQuestion = faQuestion;
  showRandomIdea = false;
  showColorPalet = false;
  showMysteryPrompt = false;


  constructor(private service: DataService) {
    this.showRandomIdea = false;
    this.showColorPalet = false;
    this.showMysteryPrompt = false;
  }

  ngOnInit(): void {}

  onShowRandomIdea() {
    this.showRandomIdea = !this.showRandomIdea;
  }

  onShowColorPalet() {
    this.showColorPalet = !this.showColorPalet;
  }

  onShowMysteryPrompt() {
    this.showMysteryPrompt = !this.showMysteryPrompt;
  }
}

