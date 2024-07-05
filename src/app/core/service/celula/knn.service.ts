import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KnnService {
  
  private apiListAlojamientoCelula = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento-celula';

  constructor(private http: HttpClient) {}

  
  getKnnPrediction(instance: number[]): Observable<any> {

    return this.http.post<any>(this.apiListAlojamientoCelula, { instance });
  }

}
