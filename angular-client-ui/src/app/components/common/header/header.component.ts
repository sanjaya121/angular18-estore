import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../../services/shared/shared.service';
import { FormsModule } from '@angular/forms';
import { AccountHeaderComponent } from "./account-header/account-header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterModule, AccountHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  /**
   *
   */
  constructor(private sharedService :SharedService) {
   
    
  }
  searchInput="";
  @Output() searchText = new EventEmitter<string>();

  ngOnInit(): void {

  }


  sendSearchText = (text:string) => {
    this.sharedService.shareSearchText(text);
    // this.searchText.emit("Wonderful")
  }

}
