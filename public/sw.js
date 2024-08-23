// src/sw-template.js
import { precacheAndRoute } from 'workbox-precaching';

// This will be replaced by Workbox during the build process
precacheAndRoute(self.__WB_MANIFEST);
