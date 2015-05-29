import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
import {Angular2} from 'angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2],
  template: `
    <angular-2></angular-2>
  `
})

class Main {

}

bootstrap(Main);
