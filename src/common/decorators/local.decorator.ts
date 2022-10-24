import { createParamDecorator } from '@nestjs/common';

export interface LocalData {
	id: string;
	email: string;
}

export const Local = createParamDecorator((data, req): LocalData => req.switchToHttp().getRequest().user);
