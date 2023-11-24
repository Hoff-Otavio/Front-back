import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeService } from '@services/anime/anime.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Anime } from '@services/anime/anime';

@Component({
  selector: 'app-anime-edit',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './anime-edit.component.html',
  styleUrl: './anime-edit.component.scss'
})
export class AnimeEditComponent implements OnInit {

  animeId: string = '';
  anime: Anime | null = null

  constructor (private service: AnimeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        this.animeId = params.get('id') ?? '';
        this.service.getAnimeById(this.animeId).subscribe(data => {

      })
    });
  }
}
