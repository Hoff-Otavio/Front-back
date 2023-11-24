import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';
import { Anime } from '@services/anime/anime';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllEpisode() {
    return this.HttpClient.get<Anime[]>('/Anime/get-episode-list');
  }

  getEpisodeById(id: string) {
    return this.HttpClient.get<any>('/Anime/get-episode-by-id', { id });
  }

  createEpisode(episode: any) {
    return this.HttpClient.post<any>('/Anime/create-episode', episode);
  }

  updateEpisode(episode: any) {
    return this.HttpClient.put<any>('/Anime/update-episode', episode);
  }

  deleteEpisode(id: number) {
    return this.HttpClient.delete<any>('/Anime/delete-episode', { id });
  }
}
