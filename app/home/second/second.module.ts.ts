import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SecondRoutingModule } from "./second-routing.module";
import { SecondComponent } from "./second.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		SecondRoutingModule,
		NativeScriptFormsModule
	],
	declarations: [
		SecondComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class SecondModule { }
