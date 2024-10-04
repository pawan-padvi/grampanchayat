import { Component,ElementRef,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceholderserviceService } from '../../services/placeholderservice.service';
import { Postmodel } from '../../models/postmodel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
posts:Postmodel[] = [];
colors: string[] = [
  '#FF6F61',  // Coral
  '#6B5B95',  // Purple
  '#88B04B',  // Green
  '#F7CAC9',  // Pink
  '#92A8D1',  // Blue
  '#955251',  // Rose
  '#B565A7',  // Violet
  '#009B77',  // Teal
  '#DD4124',  // Red
  '#45B8AC'   // Mint
];

constructor(
  private apiService: PlaceholderserviceService,
  private elementRef:ElementRef
){}

ngOnInit(): void {
  this.fetchData();
  this.DomManipulation();
}

DomManipulation(){
 const element = this.elementRef.nativeElement.querySelector("#search");
 if(element){
  element.style.color="red";
 }
}
async fetchData() {
 await this.apiService.getPosts().subscribe((data)=>{
  this.posts = data;
  console.log(data);
 });

}
getColor(index: number): string {
  return this.colors[index % this.colors.length];
}
}
