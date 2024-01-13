import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensajeSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  public get mensaje$(): Observable<string | null> {
    return this.mensajeSubject.asObservable();
  }

  public mostrarMensaje(mensaje: string): void {
    this.mensajeSubject.next(mensaje);

    setTimeout(() => {
      this.ocultarMensaje();
    }, 9000);
  }

  private ocultarMensaje(): void {
    this.mensajeSubject.next(null);
  }
}
