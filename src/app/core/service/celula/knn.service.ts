import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KnnService {
  private knnUrl = 'http://127.0.0.1:5000/knn-predict';
  private alojamientosUrl = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento';

  constructor(private http: HttpClient) {}

  getKnnPrediction(instance: number[]): Observable<any> {
    return this.http.post<any>(this.knnUrl, { instance });
  }

  getAlojamientosByIds(ids: number[]): Observable<any> {
    const params = { ids: ids.join(',') };
    return this.http.get<any>(this.alojamientosUrl, { params });
  }
}
