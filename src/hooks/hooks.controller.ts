import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('hooks')
export class HooksController {
  @Post()
  getHooks(@Body() req: Request): string {
    console.log(req);
    return `Waiting for hooks`;
  }
}
