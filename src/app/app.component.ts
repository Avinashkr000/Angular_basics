import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello-world-app';
  message: string = 'The BridgeLabz logo : a Bridge to Employment through lab works';
  logoUrl: string = 'BL_logo_square_png.jpg';
  openBridgeLabzSite(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }
  userName: string = '';
}