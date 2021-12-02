import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  VERSION,
} from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  exportpdf = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2],
    });

    doc.text('Hello world!', 1, 1);
    doc.save('two-by-four.pdf');
  };
}
