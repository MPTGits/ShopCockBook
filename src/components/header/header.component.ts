import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    selector: 'header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    text = "This is a header";
    @Output() tabClick = new EventEmitter<any>();


    onHeaderClick(clickedTab: string){
        this.tabClick.emit(clickedTab);
    }
}