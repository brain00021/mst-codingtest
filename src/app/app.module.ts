import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, CarouselConfig } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// put yourself components.

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 12000, noPause: true, showIndicators: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
