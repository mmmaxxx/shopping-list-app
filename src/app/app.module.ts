import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducer';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { storageSyncMetaReducer } from 'ngrx-store-persist';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListItemComponent,
    ListComponent,
    SearchComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers, { metaReducers: [storageSyncMetaReducer] }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
