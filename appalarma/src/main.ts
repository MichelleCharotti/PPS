import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment.prod';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { Flashlight } from '@ionic-native/flashlight/ngx';
// import { Vibration } from '@ionic-native/vibration/ngx';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
     provideFirebaseApp(() => initializeApp(environment.firebase)), 
     provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore(),
      provideStorage(() => getStorage()), 
      ScreenOrientation,
      // Flashlight,
      // Vibration,
      provideAnimationsAsync(),

    importProvidersFrom(IonicModule.forRoot({})),
    provideHttpClient(),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    ),
  ],
});
