// cors-proxy.service.ts
import { Injectable } from '@nestjs/common';
import * as corsProxy from 'cors-anywhere';

@Injectable()
export class AppService {
  startProxyServer() {
    const host = process.env.HOST || '0.0.0.0';
    const port = process.env.PORT || 3000;

    corsProxy
      .createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2'],
      })
      .listen(port, host, () => {
        console.log(`Running CORS Anywhere on ${host}:${port}`);
      });
  }
}
