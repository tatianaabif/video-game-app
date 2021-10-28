import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private _url: string = "http://localhost:3000";

  constructor(private http :HttpClient ) { }
  
  postComment(
    comment: any) {
      return this.http.post(this._url+"/api",comment);
    }
}

