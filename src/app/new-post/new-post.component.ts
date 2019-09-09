import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../model/post.model';
import { Router } from '@angular/router';
import { PostsService } from '../service/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {


  postForm: FormGroup;
  post: Post;
  
  createdAt: Date;
  index: number;
  loveIts: number;

  posts: any[];
  postSubscription: Subscription;

  constructor( private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router ) { }

    ngOnInit() {
      this.initForm();
      this.postSubscription = this.postService.postsSubject.subscribe(
        (posts: any[]) => {
          this.posts = posts;
        }
      );
      this.postService.emitPosts();
    }

    ngOnDestroy() {
      this.postSubscription.unsubscribe();
    }

    initForm() {
      this.postForm = this.formBuilder.group({
        title:['', Validators.required],
        content:['', Validators.required],
      });
    }

    onSavePost() {
        const title = this.postForm.get('title').value;
        const content = this.postForm.get('content').value;
        this.createdAt = new Date();
        this.loveIts = 0;
        const index = this.posts.length;

        const newPost = new Post(
          index,
          title, 
          content,
          this.createdAt,
          this.loveIts
          );
        this.postService.createNewPost(newPost);
        this.router.navigate(['/posts'])
  }

}


