import { NgModule } from "@angular/core";

import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';

@NgModule({
    imports:[SharedModule],
    declarations: [NavMenuComponent, HomeComponent],
    exports: [NavMenuComponent]
})
export class CoreModule {}