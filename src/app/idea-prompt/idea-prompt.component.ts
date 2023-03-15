import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-idea-prompt',
  templateUrl: './idea-prompt.component.html',
  styleUrls: ['./idea-prompt.component.css']
})

export class IdeaPromptComponent implements OnInit {
  ideasList: any = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getIdeas();
  }

  getIdeas(): void {
    this.service.getAllIdeas().subscribe((data) => {
      this.ideasList = data;
    });
  }
}
