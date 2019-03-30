import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "Second",
	moduleId: module.id,
	templateUrl: "./second.component.html",
	styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

	constructor(private router: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	onNavigate(): void {
		this.router.back();
	}
}