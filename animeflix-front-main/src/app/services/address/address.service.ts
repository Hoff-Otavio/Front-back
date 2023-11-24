import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAddressList() {
    return this.HttpClient.get<any>('/Address/get-address-list');
  }

  getAddressById(id: number) {
    return this.HttpClient.get<any>('/Address/get-address-by-id', { id });
  }

  createAddress(address: any) {
    return this.HttpClient.post<any>('/Address/create-address', address);
  }

  updateAddress(address: any) {
    return this.HttpClient.put<any>('/Address/update-address', address);
  }

  deleteAddress(id: number) {
    return this.HttpClient.delete<any>('/Address/delete-address', { id });
  }
}
