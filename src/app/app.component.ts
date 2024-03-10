import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   *
   */
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get("http://localhost:5000/api/user").subscribe(
      {
        next: response => console.log(response),
        error: error => console.log('getting error on fetch users', error),
        complete: () => console.log('http_request_completed')
      }

    )
  }
  title = 'client';
}
