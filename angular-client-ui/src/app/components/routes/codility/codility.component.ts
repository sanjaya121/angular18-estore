import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codility',
  standalone: true,
  imports: [],
  templateUrl: './codility.component.html',
  styleUrl: './codility.component.scss'
})
export class CodilityComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.minGlasses(4, 10))
  }
  minGlasses(N:any, K:any) {
    let glasses = [];
    for (let i = N; i >= 1; i--) {
      glasses.push(i);
    }
  
    let result = [];
    let remaining = K;
  
    for (let i = 0; i < glasses.length; i++) {
      if (glasses[i] <= remaining) {
        result.push(glasses[i]);
        remaining -= glasses[i];
      }
      if (remaining === 0) {
        break;
      }
    }
  
    return remaining === 0 ? result.length : -1;
  }

}
