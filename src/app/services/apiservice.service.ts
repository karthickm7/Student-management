import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  BaseUrl =environment.BaseUrl;
  constructor(private http: HttpClient) { }

  createRegisterForm(data:any):Observable<any>{
    return this.http.post(
      `${this.BaseUrl}`,{data});
  }
}
