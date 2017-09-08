class Giphy{
	constructor(keyword){
		this.keyword = keyword;
		this.endpoint = "https://api.giphy.com/v1/gifs";
		this.api_key = "8fef90ae91ef4e1a99fe4880f9f12ca3";
	}

	getGifUrl(callback){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword); 
		xhr.responseType ="json";
		xhr.onload = function(){
			callback(this.response.data.images.original.mp4);
		}
		xhr.send();
	}

	static getUrlAsync(keyword, callback){  //devuelve la url del gif, se ejecuta de manera asincrona
		return new Giphy(keyword).getGifUrl(callback);
	}
}