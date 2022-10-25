import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	HttpStatus,
	HttpCode,
	DefaultValuePipe,
	ParseIntPipe,
	Query,
	UseGuards,
	Put,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { ConfigService } from '@nestjs/config';
import GlobalConfig from 'src/config/global';
import { JwtAuthGuard } from 'src/common/security/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Category')
@ApiBearerAuth()
@Controller('category')
@UseGuards(JwtAuthGuard)
export class CategoryController {
	constructor(private readonly categoryService: CategoryService, private readonly configService: ConfigService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiBody({
		type: CreateCategoryDto,
	})
	@ApiCreatedResponse({
		type: CreateCategoryDto,
	})
	async create(@Body() createCategoryDto: CreateCategoryDto) {
		return await this.categoryService.create(createCategoryDto);
	}

	@Get('all')
	@HttpCode(HttpStatus.OK)
	@ApiCreatedResponse({
		type: CreateCategoryDto,
		isArray: true,
	})
	async findAll() {
		return await this.categoryService.findAll();
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	@ApiCreatedResponse({
		type: CreateCategoryDto,
	})
	async findOne(@Param('id') id: string) {
		return await this.categoryService.findOne(id);
	}

	@Put(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
		await this.categoryService.update(id, updateCategoryDto);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param('id') id: string) {
		await this.categoryService.remove(id);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	@ApiCreatedResponse({
		type: CreateCategoryDto,
		isArray: true,
	})
	@ApiQuery({ name: 'page', type: 'number' })
	@ApiQuery({ name: 'limit', type: 'number' })
	async index(
		@Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
		@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
	): Promise<Pagination<CategoryEntity>> {
		limit = limit > 100 ? 100 : limit;
		return this.categoryService.paginate({
			page,
			limit,
			route: `${this.configService.get<GlobalConfig>('global').host}/v1/category`,
		});
	}
}
