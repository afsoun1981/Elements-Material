import { HTTP_PROVIDERS } from '@angular/http'; 
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ElProtoAppComponent } from './app/components/el-proto-app';
import { environment } from './app';


if (environment.production) {
  enableProdMode();
}

bootstrap(ElProtoAppComponent, [
    HTTP_PROVIDERS
]);

