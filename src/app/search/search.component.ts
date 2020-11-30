import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  authorBool:boolean=false;
  worksBool:boolean=false;
  titleBool:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }


  authorToggle():void{
    this.authorBool = !this.authorBool;
  }

  titleToggle():void{
    this.titleBool = !this.titleBool;
  }

  worksToggle():void{
    this.worksBool = !this.worksBool;
  }
}
