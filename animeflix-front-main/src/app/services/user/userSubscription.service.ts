import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';
import { Anime } from '@services/anime/anime';

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionservice {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllUsersubscription() {
  return this.HttpClient.get<Anime[]>('/Anime/get-usersubscription-list');
  }

  getUsersubscriptionById(id: string) {
    return this.HttpClient.get<any>('/Anime/get-usersubscription-by-id', { id });
  }

  createUsersubscription(usersubscription: any) {
    return this.HttpClient.post<any>('/Anime/create-usersubscription', usersubscription);
  }

  updateUsersubscription(usersubscription: any) {
    return this.HttpClient.put<any>('/Anime/update-usersubscription', usersubscription);
  }

  deleteUsersubscription(id: number) {
    return this.HttpClient.delete<any>('/Anime/delete-usersubscription', { id });
  }
}
