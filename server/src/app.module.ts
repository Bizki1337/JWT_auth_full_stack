import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { TodoModule } from './todo/todo.module';

@Module({
	imports: [AuthModule, PrismaModule, TodoModule],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AtGuard,
		}
	]
})
export class AppModule {}
