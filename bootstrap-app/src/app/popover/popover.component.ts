import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css',
  host : {class: 'd-bock'}
})
export class PopoverComponent {

}
