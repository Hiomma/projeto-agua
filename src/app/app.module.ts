import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderService } from './services/loader/loader.service';
import { AlertService } from './services/alert/alert.service';
import { ToastService } from './services/toast/toast.service';
import { AuthService } from './services/auth/auth.service';
import { StorageService } from './services/storage/storage.service';
import { QueryService } from './services/query/query.service';
import { GraphQlService } from './services/graphql/graph-ql.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [   
        BrowserModule,
        HttpClientModule,
        ComponentsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot({
            name: 'projeto-agua',
            driverOrder: ['websql', 'indexeddb']
        })],
    providers: [
        GraphQlService,
        QueryService,
        StorageService,
        AuthService,
        ToastService,
        AlertService,
        LoaderService,
        StatusBar,
        SplashScreen,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
