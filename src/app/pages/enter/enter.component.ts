import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JoinAsComponent } from './components/join-as/join-as.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enter',
  imports: [RouterModule, JoinAsComponent, FormsModule],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css',
})
export class EnterComponent {
  displayName: string = '';
  joinAs: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  onContinue() {
    let roomId = this.route.snapshot.paramMap.get('roomId');
    this.http
      .post(`http://localhost:5100/rooms/${roomId}/join`, {
        displayName: 'Aditya',
        joinAs: 'estimator',
      })
      .subscribe();
  }
}
