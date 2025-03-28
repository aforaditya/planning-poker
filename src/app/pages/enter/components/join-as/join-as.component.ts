import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-join-as',
  imports: [],
  templateUrl: './join-as.component.html',
  styleUrl: './join-as.component.css'
})
export class JoinAsComponent {

    selection: string = 'estimator'

    onClick(){
        this.selection = (this.selection == 'estimator') ? 'spectator' : 'estimator'
    }
}
