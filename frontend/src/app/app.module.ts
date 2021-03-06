import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSliderModule,
  MatTreeModule,
  MatProgressBarModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { InputListComponent, NewInputDialog } from './input-list/input-list.component';
import { OutputListComponent, NewOutputDialog } from './output-list/output-list.component';
import { MixerListComponent } from './mixer-list/mixer-list.component';
import { MixerComponent } from './mixer/mixer.component';
import { BrowserPlaybackComponent } from './browser-playback/browser-playback.component';
import { DirectoryPickerComponent } from './directory-picker/directory-picker.component';
import { LibraryComponent, LibraryRootsDialog, NewPlaylistDialog, SongTimePipe } from './library/library.component';
import { DragulaModule } from 'ng2-dragula';
import { LivePlaylistComponent } from './live-playlist/live-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    InputListComponent,
    NewInputDialog,
    OutputListComponent,
    NewOutputDialog,
    MixerListComponent,
    MixerComponent,
    BrowserPlaybackComponent,
    DirectoryPickerComponent,
    LibraryComponent,
    LibraryRootsDialog,
    NewPlaylistDialog,
    SongTimePipe,
    LivePlaylistComponent
  ],
  entryComponents: [
    NewInputDialog,
    NewOutputDialog,
    LibraryRootsDialog,
    NewPlaylistDialog,
    DirectoryPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatSliderModule,
    MatTreeModule,
    MatProgressBarModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
