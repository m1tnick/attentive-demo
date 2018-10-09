import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[MatToolbarModule, MatButtonModule, RouterModule],
    exports: [
        CommonModule,
        MatToolbarModule, 
        MatButtonModule, 
        RouterModule
    ]
})
export class SharedModule {

}