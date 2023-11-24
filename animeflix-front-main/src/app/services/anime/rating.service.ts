import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';
import { Anime } from '@services/anime/anime';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllRating() {
  return this.HttpClient.get<Anime[]>('/Anime/get-rating-list');
  }

  getRatingdeById(animeId: string) {
    return this.HttpClient.get<any>('/Anime/get-rating-by-id', { animeId });
  }

  createRating(rating: any) {
    return this.HttpClient.post<any>('/Anime/create-rating', rating);
  }

  updateRating(rating: any) {
    return this.HttpClient.put<any>('/Anime/update-rating', rating);
  }

  deleteRating(id: number) {
    return this.HttpClient.delete<any>('/Anime/delete-rating', { id });
  }
}
