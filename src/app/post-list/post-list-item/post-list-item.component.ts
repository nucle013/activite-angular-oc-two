import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }

  onLoveIt() {
    this.postsService.lovePost(this.post);
  }

  onDontLoveIt() {
    this.postsService.dontLovePost(this.post);
  }

  getColor() {
    if(this.post.loveIts > 0) {
      return 'green';
    } else if(this.post.loveIts < 0) {
      return 'red';
    }
  }

  onRemovePost() {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) {
      this.postsService.removePost(this.post);
    } else {
      return null;
    }
  }
}