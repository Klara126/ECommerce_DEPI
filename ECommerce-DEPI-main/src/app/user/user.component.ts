import { Component } from '@angular/core';
import { Users } from '../user/users';
import { CommonModule } from '@angular/common';

const index = Math.floor(Math.random() * Users.length);

@Component({
  selector: 'user-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  selectedUser = Users[index];
  isActive = false;

  get img() {
    const imgPath = 'assets/' + this.selectedUser.img;
    console.log('Image path:', imgPath); // Log the generated image path
    return imgPath;
  }

  isShow = false;

  onSelectUser() {
    const index = Math.floor(Math.random() * Users.length);
    this.selectedUser = Users[index];
    this.isShow = !this.isShow;
  }
}
