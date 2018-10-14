import { NgModule } from "@angular/core";

import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { SubMenuComponent } from "./sub-menu/sub-menu.component";

@NgModule({
    imports:[SharedModule],
    declarations: [NavMenuComponent, HomeComponent, SubMenuComponent],
    exports: [NavMenuComponent, SubMenuComponent]
})
export class CoreModule {}