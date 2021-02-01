import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { MyServiceService } from 'src/app/services/myService.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit,OnDestroy{
  searchSub!: Subscription;
        videos:Video[]=[{
        id:1,
        link:"./assets/videomp4/Miyagi & Andy Panda - Не Жалея (Official Audio).mp4",
        discription:"Andy Panda - Rude Mantras / Грубые Мантры (Official Video)"
        },
        {
          id:2,
          link:"./assets/videomp4/Miyagi & Andy Panda - All The Time (Official Audio).mp4",
          discription:"Miyagi & Andy Panda - All The Time (Official Audio)"
          },
          {
            id:3,
            link:"./assets/videomp4/Miyagi & Andy Panda - Не Жалея (Official Audio).mp4",
            discription:"Miyagi & Эндшпиль feat. Amigo - Райзап (Official Video)"
            },
            {
              id:4,
              link:"./assets/videomp4/Miyagi & Andy Panda - All The Time (Official Audio).mp4",
              discription:"Miyagi & Andy Panda - YAMAKASI (Official Video)"
              },
              {
                id:5,
                link:"assets/videomp4/Miyagi & Andy Panda - Не Жалея (Official Audio).mp4",
                discription:"Miyagi & Andy Panda - Minor (Mood Video)"
                },
                {
                  id:6,
                  link:"./assets/videomp4/Miyagi & Andy Panda - All The Time (Official Audio).mp4",
                  discription:"Miyagi - Samurai (Official Video)"
                  },
                  {
                    id:7,
                    link:"assets/videomp4/Miyagi & Andy Panda - Не Жалея (Official Audio).mp4",
                    discription:"Miyagi - Captain (Live)"
                    },
                    {
                      id:8,
                      link:"./assets/videomp4/Miyagi & Andy Panda - All The Time (Official Audio).mp4",
                      discription:"MiyaGi - Небо (Премьера клипа 2018)"
                      },
        ]
  name:string = "";

  constructor(private myService:MyServiceService) { }
  ngOnInit() {
    this.searchSub=this.myService.getSearch().subscribe(
      res=>{
        this.name=res;
        this.searchMusic()
      }
    )

  }

  searchMusic(){
    if(!this.name){
      return this.videos;
    }
    else{
      return this.videos.filter(elem => elem.discription.toUpperCase().includes(this.name.toUpperCase()))
    }
  }
ngOnDestroy(){
  this.searchSub.unsubscribe();
}
}
