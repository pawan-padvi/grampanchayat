import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postmodel } from '../models/postmodel';
@Injectable({
  providedIn: 'root'
})
export class PlaceholderserviceService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Postmodel[]>{
   return this.http.get<Postmodel[]>("https://jsonplaceholder.typicode.com/posts");
  }
  getLocalPosts():Observable<any>{
    return this.http.get<any>("http://192.168.0.40:8080/api/posts");
   }
}
