import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  api = "http://localhost:8080/api/records";

  role = localStorage.getItem("role");

  records: any;

  updateId = 0;
  updateName = "";
  deleteId = 0;

  constructor(private http: HttpClient) {}

  headers() {

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    const token = btoa(username + ":" + password);

    return new HttpHeaders({
      Authorization: "Basic " + token
    });
  }

  viewRecords() {
    this.http.get(this.api, { headers: this.headers() })
      .subscribe(data => this.records = data);
  }

  updateRecord() {
    this.http.put(`${this.api}/${this.updateId}`,
      { name: this.updateName },
      { headers: this.headers() })
      .subscribe(() => alert("Updated"));
  }

  deleteRecord() {
    this.http.delete(`${this.api}/delete/${this.deleteId}`,
      { headers: this.headers() })
      .subscribe(() => alert("Deleted"));
  }

}