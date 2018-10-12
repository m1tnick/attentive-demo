import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GroupViewerComponent } from "./group-viewer/group-viewer.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[
        MatToolbarModule,
         MatButtonModule, 
         RouterModule,
         ReactiveFormsModule],
    declarations:[GroupViewerComponent],
    exports: [
        CommonModule,
        MatToolbarModule, 
        MatButtonModule, 
        RouterModule,
        ReactiveFormsModule,
        GroupViewerComponent
    ]
})
export class SharedModule {

}