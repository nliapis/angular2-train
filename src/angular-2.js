import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';

@Component({
  selector: 'angular-2'
})

@View({
  templateUrl: 'angular-2.html'
})

export class Angular2 {

  constructor() {
    console.info('Angular2 Component Mounted Successfully');
  }

}
