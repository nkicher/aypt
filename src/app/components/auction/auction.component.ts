import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Auction } from '../../pojos/auction.model';
import { AuctionService } from '../../services/auction.service';
import { Category } from '../../pojos/category.model';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {

  auctionId:  string;
  auction:    Auction;
  categories: Category[];
  totalItems: number;

  constructor(
    private auctionService: AuctionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.auctionId = params['id'];
          
            this.auctionService.getAuction(this.auctionId)
              .subscribe(
                (retAuction: Auction) => {
                  this.auction = retAuction;
                }
            );

            this.auctionService.getCategories(this.auctionId)
            .subscribe(
              (retCategories: Category[]) => {
                this.categories = retCategories;
              }
            );

            this.auctionService.getTotalItems(this.auctionId)
            .subscribe(
              (totalItems: number) => {
                this.totalItems = totalItems;
              }
            );
        }
      );
  }

  viewMap() {
    //this.router.navigate(['ww.google.com']);
    window.location.href = 'https://www.google.com/maps/dir//430+E+Warrington+Ave,+Pittsburgh,+PA+15210/@40.4207503,-80.0012642,17z/data=!4m16!1m7!3m6!1s0x8834f13712e99295:0xeb73c97b630eec38!2s430+E+Warrington+Ave,+Pittsburgh,+PA+15210!3b1!8m2!3d40.4207503!4d-79.9990755!4m7!1m0!1m5!1m1!1s0x8834f13712e99295:0xeb73c97b630eec38!2m2!1d-79.9990755!2d40.4207503';
  }
  
}
