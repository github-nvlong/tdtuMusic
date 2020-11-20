import {Component, ViewChild} from '@angular/core';
import { Howl } from 'howler';
import {IonRange} from '@ionic/angular';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  playlist: Track[] = [
    {
      name: 'Em Của Quá Khứ',
      path: './assets/mp3/Em_Của_Quá_Khứ.mp3'
    },
  {
    name: 'Sóng Gió',
    path: './assets/mp3/Song_Gio_Beat_KICMJack.mp3'
  },
  {
    name: 'Em Của Ngày Hôm Qua',
    path: './assets/mp3/Em_Cua_Ngay_Hom_Qua_SonTungMTP.mp3'
  },
  {
    name: 'Anh Khác Em Khác',
    path: './assets/mp3/Anh_Khác_Hay_Em_Khác.mp3'
  },
  {
    name: 'BAAM MOMOLAND',
    path: './assets/mp3/BAAM_MOMOLAND_-1078159215.mp3'
  },
  {
    name: 'Chiếc khăn gió ấm',
    path: './assets/mp3/Chiếc Khăn Gió Ấm_Tiên Cookie_-1074758744.mp3'
  },
  {
    name: 'Chúc tết',
    path: './assets/mp3/Chúc Tết_Khởi My_-1074111041.mp3'
  },
  {
    name: 'Ghen',
    path: './assets/mp3/Ghen_Khắc Hưng, ERIK, MIN_-1076260759.mp3'
  },
  {
    name: 'Một nhà',
    path: './assets/mp3/Một Nhà_Da LAB_-1075033645.mp3'
  },
  {
    name: 'Ngốc',
    path: './assets/mp3/Ngốc_Hương Tràm_-1075468496.mp3'
  },
  {
    name: 'Ngồi Hát Đỡ Buồn',
    path: './assets/mp3/Ngồi Hát Đỡ Buồn (Cô Gái Đến Từ Hôm Qua OST)_Trúc Nhân_-1076304716.mp3'
  },
  {
    name: 'Radio Kì 64 – Những Bản Nhạc Nền Bất Hủ',
    path: './assets/mp3/Radio Kì 64 – Những Bản Nhạc Nền Bất Hủ_Radio MP3_-1078923194.mp3'
  },
  {
    name: 'Radio Kì 59 – Nhạc Hoa Ngữ',
    path: './assets/mp3/Radio Kì 59 – Nhạc Hoa Ngữ_Radio MP3_-1078844492.mp3'
  }
];

 activeTrack: Track = null;
 player: Howl = null;
 isPlaying = false;
 progress = 0;
 @ViewChild('range', {static: false}) range: IonRange;
  constructor() {
  }
  start(track: Track) {
    if (this.player) {
        this.player.stop();
    }
    this.player = new Howl({
        src: [track.path],
        html5: true,
        onplay: () => {
            console.log('onplay');
            this.isPlaying = true;
            this.activeTrack = track;
            // this.updateProgress();
        },
        onend: () => {
            console.log('onend');
        }
    });
    this.player.play();
}
togglePlayer(pause) {
  this.isPlaying = !pause;
  if (pause) {
      console.log('playback paused');
      this.player.pause();
  } else {
      console.log('playback resumed');
      this.player.play();
  }
}

next() {
  console.log('next track');
  const index = this.playlist.indexOf(this.activeTrack);
  if (index !== this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
  } else {
      this.start(this.playlist[0]);
  }
}
prev() {
  console.log('previous track');
  const index = this.playlist.indexOf(this.activeTrack);
  if (index > 0) {
      this.start(this.playlist[index - 1]);
  } else {
      this.start(this.playlist[this.playlist.length - 1]);
  }
}
/* 
seek() {
  const newValue = + this.range.value;
  const duration = this.player.duration();
  this.player.seek(duration * (newValue / 100));
}
updateProgress() {
  const seek = this.player.seek();
  this.progress = (seek / this.player.duration()) * 100 || 0;
  setTimeout(() => {
      this.updateProgress();
  }, 1000);
}
 */
}
