import { Component, OnInit } from '@angular/core';

import { AuctionService } from "../../services/auction.service";
import { Auction } from '../../pojos/auction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private auctions: Auction[];

  constructor(
    private auctionService: AuctionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auctionService.getAuctions()
      .subscribe(
        (auctions: Auction[]) => {
          this.auctions = auctions;
        }
      );
  }

  navigateToAuction(auctionId: string){
    this.router.navigate(['auction', auctionId]);
  }

}
