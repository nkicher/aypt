import { CdkTableModule } from '@angular/cdk/table';
import { BrowserModule  } from '@angular/platform-browser';
import { NgModule       } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule     } from '@angular/http';
import { BrowserAnimationsModule     } from '@angular/platform-browser/animations';
import {
   MdButtonModule 		
  ,MdButtonToggleModule 	
  ,MdCardModule 			
  ,MdCheckboxModule 		
  ,MdGridListModule 		
  ,MdIconModule 					
  ,MdInputModule 		
  ,MdListModule 			
  ,MdMenuModule 			
  ,MdProgressBarModule 	
  ,MdRadioModule 		
  ,MdSidenavModule 		
  ,MdSliderModule 		
  ,MdSlideToggleModule 	
  ,MdTableModule 			
  ,MdTabsModule 			
  ,MdToolbarModule 		
  ,MdTooltipModule
  ,MdChipList
  ,MdChip
  ,MdDatepickerModule
  ,MdNativeDateModule
  ,MdIconRegistry
} from '@angular/material';
import { DomSanitizer         } from '@angular/platform-browser';

import { AppRoutingModule     } from './app-routing.module';
import { HighlightDirective   } from './directives/highlight.directive';
import { AuctionService       } from './services/auction.service';
import { AppComponent         } from './app.component';
import { HeaderComponent      } from './components/header/header.component';
import { FooterComponent      } from './components/footer/footer.component';
import { HomeComponent        } from './components/home/home.component';
import { SellWithUsComponent  } from './components/sell-with-us/sell-with-us.component';
import { AboutComponent       } from './components/about/about.component';
import { ContactComponent     } from './components/contact/contact.component';
import { AuctionCardComponent } from './components/home/auction-card/auction-card.component';
import { HiResPipe            } from './pipes/hi-res.pipe';
import { AuctionComponent     } from './components/auction/auction.component';


@NgModule({
  declarations: [
      AppComponent
    , HeaderComponent
    , FooterComponent
    , HighlightDirective
    , HomeComponent
    , SellWithUsComponent
    , AboutComponent
    , ContactComponent
    , HiResPipe
    , AuctionCardComponent
    , MdChipList
    , MdChip
    , AuctionComponent
  ],
  imports: [
     CdkTableModule
    ,BrowserModule
    ,FormsModule
    ,HttpModule
    ,ReactiveFormsModule
    ,AppRoutingModule
    ,BrowserAnimationsModule
    ,MdButtonModule 		
    ,MdButtonToggleModule 	
    ,MdCardModule 			
    ,MdCheckboxModule 		
    ,MdGridListModule 		
    ,MdIconModule 			
    ,MdInputModule 		
    ,MdListModule 			
    ,MdMenuModule 			
    ,MdProgressBarModule 	
    ,MdRadioModule 		
    ,MdSidenavModule 		
    ,MdSliderModule 		
    ,MdSlideToggleModule 	
    ,MdTableModule
    ,MdTabsModule 			
    ,MdToolbarModule 		
    ,MdTooltipModule
    ,MdDatepickerModule
    ,MdNativeDateModule 
    //,MdIconRegistry
    //,DomSanitizer
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
