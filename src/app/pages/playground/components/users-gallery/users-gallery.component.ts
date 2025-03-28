import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../../../../../models/user';



@Component({
  selector: 'app-users-gallery',
  imports: [UserCardComponent],
  templateUrl: './users-gallery.component.html',
  styleUrl: './users-gallery.component.css',
})
export class UsersGalleryComponent {
  users: User[] = [
    { userId: '1', displayName: 'User 1' },
    { userId: '2', displayName: 'User 2' },
  ];
}
