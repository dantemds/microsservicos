import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-34-233-115-14.compute-1.amazonaws.com",
    port: 5432,
    username: "uivhvboziajrqs",
    password: "c0e858abe3b199a7d42b2eb2f0491f2c8bcb39a246e7066f661f131d9e6c3aa4",
    database: "dflqistj6vof6s",
    migrations:["./src/database/migrations/*ts"],
    entities:["./src/database/entities/*ts"],
    ssl: true,
    synchronize: false,
    logging: true,
    extra:{
        "ssl": {
            "rejectUnauthorized": false
          }
    }
    
    
})

// AppDataSource.initialize();
   

