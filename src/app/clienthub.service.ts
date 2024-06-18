import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ListClent {
  id: number,
  name: string,
  post: string
}

@Injectable({
  providedIn: 'root'
})
export class ClienthubService {
  private apiUrl = 'url'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ListClent[]> {
    return this.http.get<ListClent[]>(this.apiUrl)
  }

//   getListClent(id:number): Observable<ListClent>{
//     return this.http.get<ListClent>(´${this.apiUrl}/${id}´)
//   }
 }
