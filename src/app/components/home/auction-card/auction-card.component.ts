import { Component, OnInit, Input } from '@angular/core';
import { Auction } from '../../../pojos/auction.model';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent implements OnInit {

  @Input() auction: Auction;

  constructor() { }

  ngOnInit() {
  }

}
