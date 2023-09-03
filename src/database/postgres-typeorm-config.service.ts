import { Injectable } from '@nestjs/common';
import { TypeOrmModule, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModule {
    return {
      type: 'postgres',
      url: this.configService.get<string>('database.url'),
      entities: this.configService.get<string[]>('orm.entities'),
      synchronize: this.configService.get<boolean>('orm.synchronize'),
    };
  }
}
