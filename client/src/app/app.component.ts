import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //interfsce inplemint
  title = 'Dating App';
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Users').subscribe({//http request in angular

      next: response => this.users = response,//بيسند الرسبونس حقت القيت لليوزر
      error: error => console.log(error),
      complete: () => { console.log("request has comleted") }



    })
    //throw new Error("method not implements ");

  }
}
