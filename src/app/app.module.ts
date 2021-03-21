import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { TestComponent } from './components/test/test.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PipesPipe } from './pipes.pipe';
import { TestpipePipe } from './pipes/testpipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GridbannersComponent } from './components/gridbanners/gridbanners.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RenderproductsComponent } from './components/renderproducts/renderproducts.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponent,
    PipesPipe,
    TestpipePipe,
    HighlightDirective,
    ContactComponent,
    ProductsComponent,
    HomeComponent,
    CarouselComponent,
    GridbannersComponent,
    CategoriasComponent,
    RenderproductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    SwiperModule,
    IvyCarouselModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
