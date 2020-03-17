import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SamplePostsModule } from './sample-posts/sample-posts.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';

@Module({
  imports: [SamplePostsModule, MongooseModule.forRoot('mongodb://localhost/sample-posts', {
    useNewUrlParser: true, useUnifiedTopology: true
  })],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpErrorFilter,
  },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }],
})
export class AppModule { }
