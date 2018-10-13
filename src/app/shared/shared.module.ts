import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

import { RouterModule } from '@angular/router';
import { GroupViewerComponent } from "./group-viewer/group-viewer.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports:[
        MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatSelectModule,
         MatCardModule,
         RouterModule,
         ReactiveFormsModule],
    declarations:[GroupViewerComponent],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule, 
        MatButtonModule, 
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        RouterModule,
        ReactiveFormsModule,
        GroupViewerComponent
    ]
})
export class SharedModule {

}