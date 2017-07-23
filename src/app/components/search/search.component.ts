import { Component, OnInit } from '@angular/core';

import  { SpotifyService } from '../../services/spotify.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

search:string = ""

  constructor( private _spotyfyService:SpotifyService) { }

  ngOnInit() {




}

searchArtist(){

console.log(this.search)
this._spotyfyService.getArtistas(this.search)
	.subscribe() 
}
}
