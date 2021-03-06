/*!
 * App Module
 *
 * Copyright(c) Exequiel Ceasar Navarrete <esnavarrete1@up.edu.ph>
 * Licensed under MIT
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { TranslateModule, TranslateLoader } from 'ng2-translate';
import { SaraiInteractiveMapsRoutingModule } from './app-routing.module';
import { StoreModule } from './store';
import { MapModule } from './map';

import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { AppLoggerService } from './app-logger.service';
import { TranslationFactoryLoader } from './app-translation-factory.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SaraiInteractiveMapsRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    StoreModule,
    MapModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslationFactoryLoader,
      deps: [Http]
    })
  ],
  providers: [
    AppLoggerService,
    CookieService,

    // must be present here when using AOT compilation for Angular 2.4.x or greater or else
    // the compiled code will throw error: `No provider for CookieOptions!`
    //
    // Reference: <https://github.com/salemdar/angular2-cookie/issues/37>
    { provide: CookieOptions, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


