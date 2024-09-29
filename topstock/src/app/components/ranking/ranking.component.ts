import { Component } from '@angular/core';
import { StockDataService } from '../../services/stockdata.service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    CommonModule, 
    MatTabsModule], 
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  shortTermRankings: any[] = [];
  longTermRankings: any[] = [];

  constructor(private stockDataService: StockDataService) {}

  ngOnInit() {
    this.stockDataService.getStockRankings().subscribe((data) => {
      this.shortTermRankings = data.shortTerm;
      this.longTermRankings = data.longTerm;
    });
  }
}