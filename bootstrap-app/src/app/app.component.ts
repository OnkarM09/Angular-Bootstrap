import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopoverComponent, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap-app';
}
