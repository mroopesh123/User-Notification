import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { NotificationsService } from '../services/notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  sendNotification(@Body() sendDto: any) {
    return this.notificationsService.send(sendDto);
  }

  @Get(':userId/logs')
  getLogs(@Param('userId') userId: string) {
    return this.notificationsService.getLogs(userId);
  }

  @Get('stats')
  getStats() {
    return this.notificationsService.getStats();
  }
}
