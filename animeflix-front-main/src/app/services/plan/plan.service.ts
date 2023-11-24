import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private HttpClient: CustomHttpClient) { }

  getAllPlans() {
    return this.HttpClient.get<any>('/Plan/get-plan-list');
  }

  getPlanById(id: string) {
    return this.HttpClient.get<any>('/Plan/get-plan-by-id', { id });
  }

  createPlan(plan: any) {
    return this.HttpClient.post<any>('/Plan/create-plan', plan);
  }

  updatePlan(plan: any) {
    return this.HttpClient.put<any>('/Plan/update-plan', plan);
  }

  deletePlan(id: string) {
    return this.HttpClient.delete<any>('/Plan/delete-plan', { id });
  }
}
