import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private api = 'https://wp.mohamed-touzani.de/wp-json/wp/v2/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.api + 'posts');
  }

  getPages(): Observable<any[]> {
    return this.http.get<any[]>(this.api + 'pages');
  }
}