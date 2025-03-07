import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-jspractice',
  standalone: true,
  imports: [],
  templateUrl: './jspractice.component.html',
  styleUrl: './jspractice.component.scss'
})
export class JSPracticeComponent implements OnInit {

  ngOnInit(): void {
    console.log("Js Challenge");
    // console.log("Two sum", this.twoSum(this.nums, this.target))
    // console.log("most Frequent",this.mostFrequent(this.arr));

    this.arrayMethods();
    this.smallestMissingPositiveInterger();
  }

  //   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  // You may assume that each input would have exactly one solution, and you may not use the same element twice.

  // You can return the answer in any order.

  nums = [2, 7, 11, 15]
  target = 9
  indices: any = [];


  twoSum = (nums: any, target: number) => {

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          return [i, j]
        }
      }
    }
    return []; // Return an empty array if no solution is found
  }

  //Find the most frequent element in an array
  arr = [40, 50, 30, 40, 50, 30, 30];
  findSmallest = [1, 3, 6, 4, 1, 2,9];

  arrayMethods=()=>{
    console.log("Slice",this.arr.slice(0,4))
    console.log("Every",this.arr.every(item => item > 13))
    console.log("find",this.arr.find(item => item > 48))
  }


smallestMissingPositiveInterger=()=>{
  const sortedPositive=this.findSmallest.filter(n=>n >0).sort((a,b)=>a-b);
  console.log("Sorted Number",sortedPositive);
  let smallestMissing =1;
  for(let i=0;i<sortedPositive.length;i++){
    if(sortedPositive[i]===smallestMissing){
      smallestMissing++

    }
    else{

    }
  }
console.log("Smallest Missing",smallestMissing)
}

}
