import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(public authorList: AuthorService) {
   }

  ngOnInit(): void {
  }

  bookOffer:any;

  onKey(){

    let x = this.authorList.getAuthorList("Grisham","John").subscribe(response => {this.bookOffer = response;});
    console.log(x);
  }

}
