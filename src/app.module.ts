import {Global, Module} from '@nestjs/common';
import {TodoModule} from './todo/todo.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Global()
@Module({
    imports: [TypeOrmModule.forRoot(),
        TodoModule,
    ],
})
export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}
