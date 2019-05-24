import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector : '[app-highlight]'
})
export class HighlightDirective {

    // private ref : string;
    // constructor(ref : string){
    //     this.ref = ref;
    // }

    constructor(private elRef : ElementRef){
        // console.log(this.elRef);
        this.elRef.nativeElement.style.backgroundColor = "aqua";
    }

}