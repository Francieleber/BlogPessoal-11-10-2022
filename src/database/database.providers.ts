import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql', //tipo do banco de dados
        host: 'localhost', //nome do meu holst
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'testetypeorm_2',// nome do banco de dados
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //tomar cuidado para nao deixar ativado como true em produçao ,sob risco de perda de dados
      });

      return dataSource.initialize();
    },
  },
];




