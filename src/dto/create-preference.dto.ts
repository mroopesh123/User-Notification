import { IsEmail, IsEnum, IsString, IsBoolean, IsObject } from 'class-validator';

export class CreatePreferenceDto {
  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsObject()
  preferences: {
    @IsBoolean() marketing: boolean;
    @IsBoolean() newsletter: boolean;
    @IsBoolean() updates: boolean;
    @IsEnum(['daily', 'weekly', 'monthly', 'never']) frequency: string;
    channels: {
      @IsBoolean() email: boolean;
      @IsBoolean() sms: boolean;
      @IsBoolean() push: boolean;
    };
  };

  @IsString()
  timezone: string;
}