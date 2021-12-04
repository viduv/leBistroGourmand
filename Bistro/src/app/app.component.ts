import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<pdf-viewer [src]="pdfSrc"
  [render-text]="true"
  [original-size]="false"
  style="style="width: 400px; height: 500px"
></pdf-viewer>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bistro';
}
