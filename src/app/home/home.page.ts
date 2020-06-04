import { Component } from '@angular/core';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) {}

  playStream() {

    let options: StreamingAudioOptions = {
        bgColor: 'red',
        successCallback: () => { console.log('Audio played') },
        errorCallback: (e) => { console.log('Error streaming') }
    };

    this.streamingMedia.playAudio('http://104.131.18.232/proxy/supernova?mp=/stream', options);

}

}
