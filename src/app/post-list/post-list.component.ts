import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  postList: any[];


  constructor( private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.postList = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


}
