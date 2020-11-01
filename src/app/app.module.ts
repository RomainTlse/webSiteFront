import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { ErrorsModule } from './core/errors/errors.module';
import { UiModule } from './core/ui/ui.module';
import { UtilsModule } from './core/utils/utils.module';
import { FrontofficeModule } from './module/frontoffice/frontoffice.module';
import { BackofficeModule } from './module/backoffice/backoffice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ErrorsModule,
    UiModule,
    UtilsModule,
    FrontofficeModule,
    BackofficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
