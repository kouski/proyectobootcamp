import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent {
  audioSource = "../assets/audio/105_Quinoa_.mp3";
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit(): void {
    this.audioPlayer.nativeElement.oncanplaythrough = () => {
   
    };
  }

  play(): void {
    if (this.audioPlayer && this.audioPlayer.nativeElement.readyState >= 2) {
      this.audioPlayer.nativeElement.play();
    }
  }

  pause(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
    }
  }

  stop(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0;
    }
  }
}

