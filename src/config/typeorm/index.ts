import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { getMetadataArgsStorage } from 'typeorm';
// import { TYPEORM } from '@environments';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const options: TypeOrmModuleOptions = {
      type: 'postgres',
      port: 5432,
      username: 'hbshop',
      password: 'my_db_password',
      database: 'hbshop',
      // entities: [],
      autoLoadEntities: true,

      synchronize: true, // FIXME: disable in production
      logging: true,
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   keepConnectionAlive: true,
    };
    return options;
  }
}
