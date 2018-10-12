import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AttentiveComponent } from './attentive.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AttentiveRoutingModule } from './attentive-routing.module';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';

@NgModule({
  declarations: [
    AttentiveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AttentiveRoutingModule,
    SharedModule,
    DogModule,
    CatModule
  ],
  providers: [],
  bootstrap: [AttentiveComponent]
})
export class AttentiveModule { }
