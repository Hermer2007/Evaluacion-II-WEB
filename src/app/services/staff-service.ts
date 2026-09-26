import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {

  private http = inject(HttpClient);

  private API = 'https://futuramaapi.com/api/characters';

  getPersonajes(): Observable<any> {
    return this.http.get<any>(this.API);
  }
}