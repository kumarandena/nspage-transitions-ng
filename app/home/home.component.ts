import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ios } from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    transitions;

    constructor(private router: RouterExtensions) {
    }

    ngOnInit(): void {
        if (ios) {
            this.transitions = ["curl", "curlDown", "fade", "flip", "flipLeft", "slide", "slideRight", "slideTop", "slideBottom"];
        } else {
            this.transitions = ["explode", "fade", "flip", "flipLeft", "slide", "slideRight", "slideTop", "slideBottom"];
        }
    }

    onNavigate(): void {
        this.router.navigate(['second-page'],
            {
                animated: true,
                transition: {
                    name: this.transitions[Math.floor(Math.random() * this.transitions.length)],
                    duration: 380,
                    curve: "easeIn"
                }
            });
    }
    /*
    Available transitions
    
    curl (same as curlUp) (iOS only)
    curlUp (iOS only)
    curlDown (iOS only)
    explode (Android Lollipop and later)
    fade
    flip (same as flipRight)
    flipRight
    flipLeft
    slide (same as slideLeft)
    slideLeft
    slideRight
    slideTop
    slideBottom
    */
}
