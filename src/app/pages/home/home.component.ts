import { Component, OnInit, ViewChild } from '@angular/core';
// import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.interface';
import { NzCarouselComponent } from 'ng-zorro-antd';
// import { SingerService } from 'src/app/services/singer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  public banners: Banner[];
  public hotTags: HotTag[];
  public songSheetList: SongSheet[];
  public singers: Singer[];

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTags, songSheetList, singers]) => {
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetList = songSheetList;
      this.singers = singers;
    });
  }


  // constructor(
  //   private homeService: HomeService,
  //   private singerService: SingerService) {
  //   this.getBanners();
  //   this.getHotTags();
  //   this.getPersonalizedSheetList();
  //   this.getEnterSingers();
  // }

  // private getBanners() {
  //   this.homeService.getBanners().subscribe(banners => {
  //     this.banners = banners;

  //    });
  // }

  // private getHotTags() {
  //   this.homeService.getHotTags().subscribe(tags => {
  //     this.hotTags = tags;
  //   });
  // }

  // private getPersonalizedSheetList() {
  //   this.homeService.getPerosonalSheetList().subscribe(sheets => {
  //     this.songSheetList = sheets;
  //   });
  // }

  // private getEnterSingers() {
  //   this.singerService.getEnterSinger().subscribe(singers => {
  //     this.singers = singers;
  //   });
  // }

  ngOnInit() {
  }


  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

}
