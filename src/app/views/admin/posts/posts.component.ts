import {Component, OnInit} from '@angular/core';
import {PostComponent} from "../../../components/post/post.component";
import {NgForOf} from "@angular/common";
import {Apollo} from "apollo-angular";
import {GET_POSTS} from "../../../graphql/posts.graphql";

@Component({
  selector: 'app-posts',
  standalone: true,
    imports: [
        PostComponent,
        NgForOf
    ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
    data :any= []
    posts:any;
    constructor(private apollo: Apollo) {
    }

    ngOnInit(): void {
        this.postDataGethering();
    }

    private postDataGethering() {
        this.apollo.watchQuery({
            query: GET_POSTS,
        }).valueChanges.subscribe(({ data, error }: any) => {
            if (error) {
                console.error('Error fetching data:', error);
                return;
            }

            console.log('posts data:', data);

            this.data = data.guides.map((guide: {
                id: string;
                title: string;
                content: string;
                author: { username: string };
                image:string;
            }) => ({
                id: guide.id,
                title: guide.title,
                content: guide.content,
                image: guide.image,
                author: guide.author?.username || 'Unknown',  // Default to 'Unknown' if no author is provided
            }));
            console.log('Transformed data:', this.data);
            // this.dataSource = new MatTableDataSource<Profile>(this.data);
        });
    }

}
