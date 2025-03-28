import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UsersGalleryComponent } from "./components/users-gallery/users-gallery.component";
import { CardSelectionTrayComponent } from "./components/card-selection-tray/card-selection-tray.component";

@Component({
  selector: 'app-playground',
  imports: [HeaderComponent, UsersGalleryComponent, CardSelectionTrayComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

}
