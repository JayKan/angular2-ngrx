import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// enable prod mode for faster render
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

// import shared styles
import './shared/styles/styles.scss';

// import app module
import { AppModule } from './app';

export function main() {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}

