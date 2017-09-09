export class Auction 
{
    constructor
    (
          public auctionId:  number
        , public startDt:    Date
        , public endDt:      Date
        , public status:     string
        , public pickupDt:   Date
        , public img?:       string

        //, public pickupDt?:     string optional
    ) 
    { }
}
