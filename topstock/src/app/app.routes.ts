import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';

export const routes: Routes = [
  { path: '', component: RankingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'stocks/:symbol', component: StockDetailComponent },
];

export const appRouter = provideRouter(routes);