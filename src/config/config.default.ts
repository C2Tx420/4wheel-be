const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'c2tx420',
    password: 'Abcd1234',
    database: '4wheel',
    synchronize: false,
    migrationsRun: false,
    logging: false,
    cache: false,
    extra: {
      trustServerCertificate: true,
    },
    ssl: false,
  },
};

export default config;
