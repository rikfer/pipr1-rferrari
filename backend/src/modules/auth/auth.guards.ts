import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const req = context.switchToHttp().getRequest();
            if (!req.headers?.authorization)
                throw new UnauthorizedException('Unauthorized access!!!!!');

            const { authorization } = req.headers;
            const token = authorization;
            if (token.indexOf('Bearer') < 0)
                throw new UnauthorizedException('Unauthorized access!!!!!');
            return true;
        } catch (error) {
            console.error(error)
            throw new UnauthorizedException('Unauthorized access!!!!!');
        }

    }
}
