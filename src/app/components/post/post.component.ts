import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-post',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() title: string = 'Post Title';
  @Input() content: string = 'Here is some content for the post card. It could be a short description or snippet of the post.';
  @Input() tags: string[] = ['Angular', 'TailwindCSS', 'WebDev'];
}
