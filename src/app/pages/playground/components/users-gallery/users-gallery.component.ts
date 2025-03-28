import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-users-gallery',
  imports: [UserCardComponent],
  templateUrl: './users-gallery.component.html',
  styleUrl: './users-gallery.component.css'
})
export class UsersGalleryComponent {

}
