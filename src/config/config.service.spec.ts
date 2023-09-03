import { resolve } from 'path';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    service = new ConfigService();
  });

  it('should indicate view location', () => {
    const templatePath = resolve(__dirname, '../..', 'views');
    expect(service.get<string>('templates.path')).toEqual(templatePath);
  });
});
