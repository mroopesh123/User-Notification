import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PreferencesService } from '../services/preferences.service';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  create(@Body() createDto: any) {
    return this.preferencesService.create(createDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateDto: any) {
    return this.preferencesService.update(userId, updateDto);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.preferencesService.delete(userId);
  }
}
