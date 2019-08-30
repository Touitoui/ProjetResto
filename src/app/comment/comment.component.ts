import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Output()
  newComment = new EventEmitter<Comment>();

  commentModel: FormGroup;

  idResto = +this.route.snapshot.paramMap.get('id');

  constructor(private formBuilder: FormBuilder,
              private restaurantService: RestaurantService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initModel(this.idResto);
  }

  initModel(idResto) {
    this.commentModel = this.formBuilder.group({
      author: ['', [Validators.required]],
      content: ['', [Validators.required]],
      note: ['', [Validators.min(0), Validators.max(5)]]
    });
  }

  get author() {
    return this.commentModel.get('author');
  }

  get content() {
    return this.commentModel.get('content');
  }

  get note() {
    return this.commentModel.get('note');
  }

  validationForm() {
<<<<<<< HEAD
    const commentData = this.commentModel.value;
    if (this.commentModel.valid) {
      commentData.date = Date.now();
      commentData.restaurantId = this.idResto;
      this.restaurantService
        .addComment(commentData)
        .subscribe(
          () => {
            this.newComment.emit();
            this.commentModel.reset();
          }
        );
    }
=======
      const commentData = this.commentModel.value;
      if (this.commentModel.valid) {
	  this.restaurantService
              .addComment(commentData)
              .subscribe(result => this.router.navigateByUrl('/restaurant/' + commentData.restaurantId));
	  this.newComment.emit();
      }
      this.commentModel.reset();
      this.initModel(this.route.snapshot.paramMap.get('id'));
>>>>>>> c38c996f1aede72e9d5b15e8f5595f5dcc1b8050
  }

}
