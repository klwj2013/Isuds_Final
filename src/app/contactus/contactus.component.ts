import { fade } from './../animations';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [fade]
})
export class ContactusComponent implements OnInit {

  options: string[] = [
    'Request information',
    'Request a demo',
    'Contact us'
  ];

  selectedOption: string = this.options[0];

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:3000/send', JSON.stringify(form.value), {
      headers: headers
    }).subscribe();
    form.reset();
    this.toastr.success('Message has been sent');
  }

  changeOption(event) {
    this.selectedOption = event.value;
    console.log(event.value);
  }
}
