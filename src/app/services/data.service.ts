import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  API_URL = "https://aiwork.herokuapp.com/questions?question=";

  async getAnswer(question: string) {
    const f = await fetch(`${this.API_URL}${question}`);
    const data = await f.json();
    return data;
  }
}
