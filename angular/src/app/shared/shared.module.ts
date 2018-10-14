import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { RouterModule } from '@angular/router';
import { GroupViewerComponent } from "./group-viewer/group-viewer.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports:[
        MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatCardModule,
         MatTabsModule,
         RouterModule,
         ReactiveFormsModule],
    declarations:[GroupViewerComponent],
    exports: [
        CommonModule,
        MatToolbarModule, 
        MatButtonModule, 
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        RouterModule,
        ReactiveFormsModule,
        GroupViewerComponent
    ]
})
export class SharedModule {

}