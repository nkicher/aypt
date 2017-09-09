import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Auction } from "../pojos/auction.model";
import { Category } from '../pojos/category.model';


@Injectable()
export class AuctionService {

    private auctions: Auction[] = [];
    private categories: Category[] = [];
    private totalItems: number;
    
    // private messages: Message[] = [];
    // messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) {}

    getAuctions() {
        return this.http.get('http://localhost:3000/message/auc')
            .map((response: Response) => {
                const auctions = response.json().obj;
                let transformedAuctions: Auction[] = [];
                for (let auction of auctions) {
                    transformedAuctions.push(
                        new Auction(
                              auction.auctionId 
                            , auction.startDt
                            , auction.endDt
                            , auction.status
                            , auction.pickupDt 
                            , auction.itmLst[5].images[0]
                        )
                    );
                }
                this.auctions = transformedAuctions;
                return transformedAuctions;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getAuction(auctionId) {
        return this.http.get('http://localhost:3000/message/auc/' + auctionId)
            .map((response: Response) => {
                const auction = response.json().obj;
                let transformedAuction: Auction;

                transformedAuction = 
                    new Auction(
                          auction.auctionId 
                        , auction.startDt
                        , auction.endDt
                        , auction.status
                        , auction.pickupDt 
                    );

                return transformedAuction;    
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getCategories(auctionId) {
        return this.http.get('http://localhost:3000/message/cats/' + auctionId)
            .map((response: Response) => {
                const categories = response.json().obj;
                let transformedCategories: Category[] = [];
                for (let category of categories) {
                    transformedCategories.push(
                        new Category(
                              category._id 
                            , category.freq
                        )
                    );
                }
                this.categories = transformedCategories;
                return transformedCategories;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getTotalItems(auctionId) {
        return this.http.get('http://localhost:3000/message/total/' + auctionId)
            .map((response: Response) => {
                const category = response.json().obj[0];
                this.totalItems = category.freq;
                return category.freq;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
