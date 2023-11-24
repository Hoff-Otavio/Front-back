import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllCharacters() {
    return this.HttpClient.get<any>('/Character/get-character-list');
  }

  getCharacterById(id: string) {
    return this.HttpClient.get<any>('/Character/get-character-by-id', { id });
  }

  createCharacter(character: any) {
    return this.HttpClient.post<any>('/Character/create-character', character);
  }

  updateCharacter(character: any) {
    return this.HttpClient.put<any>('/Character/update-character', character);
  }

  deleteCharacter(id: string) {
    return this.HttpClient.delete<any>('/Character/delete-character', { id });
  }
}
