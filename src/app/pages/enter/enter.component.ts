import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoinAsComponent } from "./components/join-as/join-as.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-enter',
  imports: [RouterModule, JoinAsComponent, FormsModule],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css'
})
export class EnterComponent {
      displayName: string = ''
      joinAs: string = ''
}
