import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AttentiveComponent } from './attentive.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AttentiveRoutingModule } from './attentive-routing.module';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { ErrorsModule } from './shared/errors/errors.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AttentiveComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AttentiveRoutingModule,
    SharedModule,
    CatModule,
    ErrorsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AttentiveComponent]
})
export class AttentiveModule { }
