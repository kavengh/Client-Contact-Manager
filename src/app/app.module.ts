import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutModule } from './about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './clients/client.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    // This is the class that has our routing
    AppRoutingModule,
    BrowserAnimationsModule,
    // added reactive forms
    ReactiveFormsModule,
    // added these two new modules that will house client and company respectively
    ClientModule,
    CompanyModule,
    // here we can now add that searchformcomp back
    SharedModule,
    // all of the ui components
    CustomMaterialModule,
    AboutModule,
    // adding HttpClient module
    HttpClientModule,
    // installed in memory api
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  // adding client service here as a token
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
