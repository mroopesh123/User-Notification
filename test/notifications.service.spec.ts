import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from '../src/services/notifications.service';
import { getModelToken } from '@nestjs/mongoose';
import { NotificationLog } from '../src/schemas/notification-log.schema';

describe('NotificationsService', () => {
  let service: NotificationsService;

  const mockNotificationLogModel = {
    create: jest.fn(),
    find: jest.fn(),
    aggregate: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        {
          provide: getModelToken('NotificationLog'),
          useValue: mockNotificationLogModel,
        },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('send', () => {
    it('should create a new notification log with "pending" status', async () => {
      const notificationData = {
        userId: 'user123',
        type: 'marketing',
        channel: 'email',
        content: {
          subject: 'Special Offer',
          body: 'Check out our latest deals!',
        },
      };

      mockNotificationLogModel.create.mockResolvedValue({
        ...notificationData,
        status: 'pending',
        createdAt: new Date(),
      });

      const result = await service.send(notificationData);

      expect(mockNotificationLogModel.create).toHaveBeenCalledWith({
        userId: 'user123',
        type: 'marketing',
        channel: 'email',
        status: 'pending',
        metadata: {
          subject: 'Special Offer',
          body: 'Check out our latest deals!',
        },
      });

      expect(result.status).toEqual('pending');
    });
  });

  describe('getLogs', () => {
    it('should return notification logs for a user', async () => {
      const userId = 'user123';
      const mockLogs = [
        {
          userId,
          type: 'marketing',
          channel: 'email',
          status: 'sent',
          sentAt: new Date(),
        },
        {
          userId,
          type: 'updates',
          channel: 'push',
          status: 'failed',
          failureReason: 'Device not reachable',
        },
      ];

      mockNotificationLogModel.find.mockResolvedValue(mockLogs);

      const result = await service.getLogs(userId);

      expect(mockNotificationLogModel.find).toHaveBeenCalledWith({ userId });
      expect(result).toEqual(mockLogs);
    });
  });

  describe('getStats', () => {
    it('should return notification statistics', async () => {
      const mockStats = [
        { type: 'marketing', count: 10 },
        { type: 'updates', count: 5 },
      ];

      mockNotificationLogModel.aggregate.mockResolvedValue(mockStats);

      const result = await service.getStats();

      expect(mockNotificationLogModel.aggregate).toHaveBeenCalledWith([
        { $group: { _id: '$type', count: { $sum: 1 } } },
        { $project: { type: '$_id', count: 1, _id: 0 } },
      ]);

      expect(result).toEqual(mockStats);
    });
  });
});
