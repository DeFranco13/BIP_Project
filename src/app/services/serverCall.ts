import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get('http://49.13.215.13:8080/file.json');
  }
}