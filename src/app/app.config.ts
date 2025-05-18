import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "webker-projekt", appId: "1:22636998561:web:bc7698d10c0c7922dd65e0", storageBucket: "webker-projekt.firebasestorage.app", apiKey: "AIzaSyD_b2RlmfqC7_A9e5RoHVcKgW3Y3LrF9ms", authDomain: "webker-projekt.firebaseapp.com", messagingSenderId: "22636998561" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
