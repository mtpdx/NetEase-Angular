import { Injectable } from '@angular/core';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.interface';
import { Resolve } from '@angular/router';
import { SingerService } from 'src/app/services/singer.service';
import { HomeService } from 'src/app/services/home.service';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/operators';


type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable()
export class HomeResolveService implements Resolve<HomeDataType> {
  constructor(private homeServe: HomeService, private singerServe: SingerService) {}
  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeServe.getBanners(),
      this.homeServe.getHotTags(),
      this.homeServe.getPerosonalSheetList(),
      this.singerServe.getEnterSinger()
    ]).pipe(first());
  }
}
