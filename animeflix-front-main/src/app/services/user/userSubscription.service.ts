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

  getUsersubscriptionById(userId: string) {
    return this.HttpClient.get<any>('/Anime/get-usersubscription-by-id', { userId });
  }

  createUsersubscription(usersubscription: any) {
    return this.HttpClient.post<any>('/Anime/create-usersubscription', usersubscription);
  }

  updateUsersubscription(usersubscription: any) {
    return this.HttpClient.put<any>('/Anime/update-usersubscription', usersubscription);
  }

  deleteUsersubscription(userId: number) {
    return this.HttpClient.delete<any>('/Anime/delete-usersubscription', { userId });
  }
}
