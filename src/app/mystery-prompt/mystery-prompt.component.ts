import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mystery-prompt',
  templateUrl: './mystery-prompt.component.html',
  styleUrls: ['./mystery-prompt.component.css']
})
export class MysteryPromptComponent implements OnInit {
  mysteryList: any = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getMystery();
  }

  getMystery(): void {
    this.service.getAllMysteries().subscribe((data) => {
      this.mysteryList = data;
    });
  }
}