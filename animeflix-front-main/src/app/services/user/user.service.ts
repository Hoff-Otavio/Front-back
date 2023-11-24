import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllUsers() {
    return this.HttpClient.get<any>('/User/get-user-list');
  }

  getUserById(id: number) {
    return this.HttpClient.get<any>('/User/get-user-by-id', { id });
  }

  createUser(user: any) {
    return this.HttpClient.post<any>('/User/create-user', user);
  }

  updateUser(user: any) {
    return this.HttpClient.put<any>('/User/update-user', user);
  }

  deleteUser(id: number) {
    return this.HttpClient.delete<any>('/User/delete-user', { id });
  }
}
