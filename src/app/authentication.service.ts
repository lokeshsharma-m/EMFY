import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';

declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { 
   
  }
  initGoogleOAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
        gapi.load('auth2', async () => {
            const gAuth = await gapi.auth2.init({
                client_id: environment.firebase.GAPI_CLIENT_ID,
                fetch_basic_profile: true,
                scope: 'profile email'
            });
            resolve(gAuth);
        }, reject);
    });
  }
}
