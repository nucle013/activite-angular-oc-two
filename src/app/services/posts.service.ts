import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database';

@Injectable()
export class PostsService {

  posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  lovePost(post: Post) {
    const postIndex = this.posts.findIndex(
      (postElement) => {
        if(postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndex].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  dontLovePost(post: Post) {
    const postIndex = this.posts.findIndex(
      (postElement) => {
        if(postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndex].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(postToRemove: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if(postElement === postToRemove) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
