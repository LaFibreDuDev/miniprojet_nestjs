import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Post as PostEntity } from './entities/post.entity';

@ApiTags('posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un post' })
  @ApiCreatedResponse({
    description: 'Le post a été créé avec succès.',
    type: PostEntity,
  })
  @ApiInternalServerErrorResponse({ description: 'Erreur interne du serveur.' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtenir tous les posts' })
  @ApiOkResponse({
    description: 'Liste de tous les posts.',
    type: [PostEntity],
  })
  @ApiInternalServerErrorResponse({ description: 'Erreur interne du serveur.' })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un post par ID' })
  @ApiParam({ name: 'id', description: 'ID du post' })
  @ApiOkResponse({
    description: 'Le post trouvé.',
    type: PostEntity,
  })
  @ApiNotFoundResponse({ description: 'Post non trouvé.' })
  @ApiInternalServerErrorResponse({ description: 'Erreur interne du serveur.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un post par ID' })
  @ApiParam({ name: 'id', description: 'ID du post' })
  @ApiOkResponse({
    description: 'Le post a été mis à jour.',
    type: PostEntity,
  })
  @ApiNotFoundResponse({ description: 'Post non trouvé.' })
  @ApiInternalServerErrorResponse({ description: 'Erreur interne du serveur.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    console.log(`Variable id : ${typeof id}`);
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un post par ID' })
  @ApiParam({ name: 'id', description: 'ID du post' })
  @ApiOkResponse({ description: 'Le post a été supprimé.' })
  @ApiNotFoundResponse({ description: 'Post non trouvé.' })
  @ApiInternalServerErrorResponse({ description: 'Erreur interne du serveur.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postService.remove(id);
  }
}
