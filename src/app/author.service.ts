import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthorService {

  //let options: {responseType?: 'json'};

  constructor(private http: HttpClient){

   }

  
  public getAuthorList(fname:string, lname:string){
    let url = "https://reststop.randomhouse.com/resources/authors?lastName=" + lname +"&firstName=" + fname;  

    return this.http.get(url);

  }

}
