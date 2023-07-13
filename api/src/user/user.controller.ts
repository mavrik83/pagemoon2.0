import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from '@user/user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUser(@Param('id') id: Prisma.UserWhereUniqueInput) {
        return this.userService.user({ id: String(id) });
    }

    @Get()
    getUsers() {
        return this.userService.users({
            where: { updatedAt: { not: null } },
        });
    }

    @Post()
    createUser(@Body() data: Prisma.UserCreateInput) {
        return this.userService.createUser(data);
    }

    @Patch(':id')
    updateUser(
        @Param('id') id: Prisma.UserWhereUniqueInput,
        @Body() data: Prisma.UserUpdateInput,
    ) {
        return this.userService.updateUser({
            where: { id: String(id) },
            data,
        });
    }

    @Delete(':id')
    deleteUser(@Param('id') id: Prisma.UserWhereUniqueInput) {
        return this.userService.deleteUser({ id: String(id) });
    }
}
