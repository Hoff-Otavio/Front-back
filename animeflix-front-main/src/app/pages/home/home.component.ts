import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component'
import { Anime } from '@services/anime/anime';
import { AnimeService } from '@services/anime/anime.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatTableModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  animes:Anime[] = []
  displayedColumns: string[] = ['id', 'title', 'description', 'genre', 'releaseYear', 'actions'];

  constructor (private service: AnimeService) {}

  ngOnInit() {
    this.service.getAllAnime().subscribe(data => data ? this.animes = data : this.animes = [])
  }

  deleteAnime(id: number) {
    this.service.deleteAnime(id).subscribe(() => {
      this.service.getAllAnime().subscribe(data => data ? this.animes = data : this.animes = [])
    })
  }

}
