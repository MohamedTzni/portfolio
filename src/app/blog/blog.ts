import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent implements OnInit {

  posts: any[] = [];

  constructor(private wp: WordpressService) {}

  ngOnInit(): void {
    this.wp.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}