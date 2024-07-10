import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root'
})
export class KnnService {
  
  private apiListAlojamientoCelula = 'http://127.0.0.1:8000/api/skybnb/list-alojamiento-celula';

  constructor(private http: HttpClient,
    private profilesesion: ProfileService
  ) {}

  
  getKnnPrediction(instance: number[]): Observable<any> {

    return this.http.post<any>(this.apiListAlojamientoCelula, { instance });
  }


  CargarAlojamientosCelula(): Observable<any> {
    return new Observable(observer => {
      if (this.profilesesion.IsDataPref()) {
        const instance = this.profilesesion.obtenerPreferenciasNumericas();
        this.getKnnPrediction(instance).subscribe(
          (response) => {
            console.log('Predicción exitosa:', response);
            const alojamientos = response.alojamientos;
            const alojamientosRecomendados = this.getRandomAlojamientos(alojamientos, 6);
            observer.next(alojamientosRecomendados);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('No data preferences available');
      }
    });
  }

  private getRandomAlojamientos(alojamientos: any[], count: number): any[] {
    const shuffled = alojamientos.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
