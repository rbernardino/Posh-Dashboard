import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) { }

  title = "Title";
  directoryUsage: any;
  private url = 'http://localhost:8080/getDirectoryUsage.psjson';

  getDirectoryUsage() {
    this.http.get(this.url).
      subscribe(response => {
        console.log(response.json());
        this.directoryUsage = response.json();
      });
  }
}
