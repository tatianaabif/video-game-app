import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  gameRating = 0;
  gameId!: string;
  game!: Game ;
  routeSub: Subscription | undefined;
  gameSub:Subscription | undefined;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp: Game) => {
      this.game = gameResp;

      setTimeout(() => {
        this.gameRating = this.game.metacritic;
      } , 1000);
      
    });
  }

  //Gauge color change 
  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432' //green
    } else if (value > 50) {
      return '#fffa50'; //orange
    } else if (value > 30) {
      return '#f7aa38'; //yellow
    } else {
      return '#ef4655'; //red not good game
    }
  }

}
