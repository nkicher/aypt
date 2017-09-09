import { NgModule               } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';

import { SellWithUsComponent    } from './components/sell-with-us/sell-with-us.component';
import { HomeComponent          } from './components/home/home.component';
import { AboutComponent         } from './components/about/about.component';
import { ContactComponent       } from './components/contact/contact.component';
import { AuctionComponent } from './components/auction/auction.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'        },
    { path: 'home'          , component: HomeComponent        },
    { path: 'sell-with-us'  , component: SellWithUsComponent  },
    { path: 'about'         , component: AboutComponent       },
    { path: 'contact'       , component: ContactComponent     },
    { path: 'auction/:id'   , component: AuctionComponent     }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
