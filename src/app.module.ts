import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesController } from './controllers/preferences.controller';
import { NotificationsController } from './controllers/notifications.controller';
import { PreferencesService } from './services/preferences.service';
import { NotificationsService } from './services/notifications.service';
import { UserPreferenceSchema } from './schemas/user-preference.schema';
import { NotificationLogSchema } from './schemas/notification-log.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'UserPreference', schema: UserPreferenceSchema },
      { name: 'NotificationLog', schema: NotificationLogSchema },
    ]),
  ],
  controllers: [PreferencesController, NotificationsController],
  providers: [PreferencesService, NotificationsService],
})
export class AppModule {}
