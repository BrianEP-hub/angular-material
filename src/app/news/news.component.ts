import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  data: any = [];
  constructor(private user: UsersService) {
    this.user.getPosts().subscribe((data) => {
      console.warn(data);
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
