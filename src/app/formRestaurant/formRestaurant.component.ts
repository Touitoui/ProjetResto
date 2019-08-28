import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';


@Component({
  selector: 'app-formRestaurant',
  templateUrl: './formRestaurant.component.html',
  styleUrls: ['./formRestaurant.component.css']
})
export class FormRestaurantComponent implements OnInit {

  isEditing = false;
  model: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router,
    private route: ActivatedRoute) { }

  regImg = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z@\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  regPhone = new RegExp(
    '(0|(\\+33)|(0033))[1-9][0-9]{8}'
  );

  regWeb = new RegExp(
    '^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$'
  );

  ngOnInit() {
    const idResto = +this.route.snapshot.paramMap.get('id');

    if (idResto) {
      this.isEditing = true;
      this.restaurantService
        .getRestaurant(idResto)
        .subscribe( restaurant => this.model.reset(restaurant));

      this.model = this.formBuilder.group({
        id: [{value: '', disabled: true}, [Validators.required]],
        name: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        image: ['', [Validators.pattern(this.regImg)]],
        cookingStyle: ['', [Validators.required]],
        description: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.pattern(this.regPhone)]],
        website: ['', [Validators.pattern(this.regWeb)]],
        note: ['', [Validators.min(0), Validators.max(5)]]
      });
    }
    this.model = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      image: ['', [Validators.pattern(this.regImg)]],
      cookingStyle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.regPhone)]],
      website: ['', [Validators.pattern(this.regWeb)]],
      note: ['', [Validators.min(0), Validators.max(5)]]
    });
  }

  get name() {
    return this.model.get('name');
  }

  get address() {
    return this.model.get('address');
  }

  get city() {
    return this.model.get('city');
  }

  get image() {
    return this.model.get('image');
  }

  get cookingStyle() {
    return this.model.get('cookingStyle');
  }

  get description() {
    return this.model.get('description');
  }

  get phoneNumber() {
    return this.model.get('phoneNumber');
  }

  get website() {
    return this.model.get('website');
  }

  get note() {
    return this.model.get('note');
  }

  validationForm() {
    if (this.model.valid) {
      this.restaurantService
        .addRestaurant(this.model.value)
        .subscribe(result => this.router.navigateByUrl('/formRestaurant/'));
    }
  }
  validationEdit() {
    if (this.model.valid) {
      this.restaurantService
        .editRestaurant(this.model.value)
        .subscribe(result => this.router.navigateByUrl('/restaurant/' + this.model.value.id));
    }
  }

}
