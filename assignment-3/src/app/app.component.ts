import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
        .white-content {
            color: white
        }
    `]
})
export class AppComponent {
    showText = true;
    logs = [];
    cont = 1;

    toggleShowText() {
        this.showText = !this.showText;
        this.logs.push(this.cont);
        this.cont++;
    }
}
