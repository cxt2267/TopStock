import { Component } from '@angular/core';
import { StockDataService } from '../../services/stockdata.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css'],
})
export class StockDetailComponent {
  stockSymbol: string = '';
  stockDetails: any = {};

  constructor(
    private stockDataService: StockDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.stockSymbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.stockDataService.getStockDetails(this.stockSymbol).subscribe((data) => {
      this.stockDetails = data;
    });
  }
}
