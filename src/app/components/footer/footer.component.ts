import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public accredidations = [
     { svg: 'auth.svg', link: 'https://verify.authorize.net/anetseal/?pid=574d2c34-db20-42c2-a354-a6c0147ff16d&rurl=http%3A//www.ayptoday.com/cgi-bin/mncal.cgi%3Faypt'                           }
    ,{ svg: 'asel.svg', link: 'http://www.aselonline.com/'                                                                                                                                        }
    ,{ svg: 'acna.svg', link: 'http://www.acna.us/'                                                                                                                                               }
    ,{ svg: 'bbb.svg' , link: 'http://www.bbb.org/pittsburgh/business-reviews/estates-appraisals-sales-and-auctions/auction-your-possessions-today-llc-in-pittsburgh-pa-71016463/#bbbonlineclick' }
    ,{ svg: 'apic.svg', link: 'http://www.apic.us/'                                                                                                                                               }
  ];

  public contacts = [
     { name: 'map-pin' , blurb: '430 East Warrington Avenue, Pittsburgh, PA 15210'  , link: 'https://www.google.com/maps/place/430+E+Warrington+Ave,+Pittsburgh,+PA+15210/@40.4207077,-79.99923,19.5z/data=!4m13!1m7!3m6!1s0x8834f13712e99295:0xeb73c97b630eec38!2s430+E+Warrington+Ave,+Pittsburgh,+PA+15210!3b1!8m2!3d40.4207503!4d-79.9990755!3m4!1s0x8834f13712e99295:0xeb73c97b630eec38!8m2!3d40.4207503!4d-79.9990755' }
    ,{ name: 'phone'   , blurb: 'Phone: 412-204-7493'                               , link: 'tel:+4122047493'                              }
    ,{ name: 'envelope', blurb: 'Email: info@aypToday.com'                          , link: 'mailto:info@aypToday.com'                     }
  ]

  public socialMedia = [
     { name: 'facebook', blurb: 'Find us on Facebook'                               , link: 'https://www.facebook.com/AypToday'            }
    ,{ name: 'twitter' , blurb: 'Follow us on Twitter'                              , link: 'https://twitter.com/AYPToday'                 }
    //,{ name: 'youtube' , blurb: 'Watch us on Youtube'                               , link: 'https://www.youtube.com/watch?v=k0uXTymfR40'  }
    ,{ name: 'blogger' , blurb: 'Read our Blog'                                     , link: 'http://ayptoday.blogspot.com/'                }
  ];

  constructor() { }

  ngOnInit() {
  }

}
