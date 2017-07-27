import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

artistas:any []= []

urlSearch:string="https://api.spotify.com/v1/search"
urlArtist:string="https://api.spotify.com/v1/artists"


  constructor( private http:Http) { }




getArtistas(artist:string){

	let headers = new Headers()
	headers.append('authorization', 'Bearer BQBoZV3CjpzOnFbui4HKtXTo9GGmgWfug9Gsg5gUnRX3x-4kq_q8r-2fKn747WXY1GXNSBIobKDntVaDJ8p2Mg')

	let query = `?q=${ artist }&type=artist`
	let url = this.urlSearch + query

	return this.http.get(url, { headers})
		.map( res =>{
			this.artistas = res.json().artists.items
			console.log(this.artistas)
			return res.json().artists.items
		} )

}



getArtista(id:string){

	let headers = new Headers()
	headers.append('authorization', 'Bearer BQDraijgApzqMsO_Y41MUmRMyxVrKVBE9Xu2ke9hJnISouRo3S_mQHgyjfC9ESwau-1TCZnhzZVquGriUuvcag')

	let query = `/${ id }`
	let url = this.urlArtist + query

	return this.http.get(url, { headers})
		.map( res =>{
			//this.artistas = res.json().artists.items
			console.log(res.json())
			return res.json()
			
		} )

}

getTop(id:string){

	let headers = new Headers()
	headers.append('authorization', 'Bearer BQDraijgApzqMsO_Y41MUmRMyxVrKVBE9Xu2ke9hJnISouRo3S_mQHgyjfC9ESwau-1TCZnhzZVquGriUuvcag')

	let query = `/${ id }/top-tracks?country=US`
	let url = this.urlArtist + query

	return this.http.get(url, { headers})
		.map( res =>{
			//this.artistas = res.json().artists.items
			console.log(res.json().tracks)
			return res.json().tracks
			
		} )

}


}
