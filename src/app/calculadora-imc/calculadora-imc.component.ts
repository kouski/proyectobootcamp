import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrl: './calculadora-imc.component.css'
})
export class CalculadoraImcComponent {
  sexo: string = '1';
  peso: number = 3;
  altura: number = 0.4; // Convertir altura a metros
  edad: number = 0;
  resultadoMasaCorporal: string = '';
  resultadoPorcentajeGrasa: string = '';
  resultadoTablaOms: string = '';

  calcularMasaCorporal() {
    var masaCorporal = this.peso / (this.altura * this.altura);
    this.resultadoMasaCorporal = "Índice de Quetelet. Su masa corporal es: " + masaCorporal.toFixed(2);

    var porcentajeGrasa = masaCorporal * 1.2 + 0.23 * this.edad - 10.8 * parseFloat(this.sexo) - 5.4;
    this.resultadoPorcentajeGrasa = "El porcentaje de grasa es: " + porcentajeGrasa.toFixed(2);

    // Puedes actualizar la lógica para la tablaOms si es necesario

    // Implementar la lógica de cálculo aquí
    // Utilizar this.sexo, this.peso, this.altura, this.edad para obtener los valores
    // Actualizar this.resultadoMasaCorporal, this.resultadoPorcentajeGrasa, this.resultadoTablaOms
  }
}
