import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChamadaService } from './chamada.service';
import { CreateChamadaDto } from './dto/create-chamada.dto';
import { UpdateChamadaDto } from './dto/update-chamada.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Chamada")
@Controller('chamada')
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post()
  create(@Body() createChamadaDto: CreateChamadaDto) {
    return this.chamadaService.create(createChamadaDto);
  }

  @Get()
  async findAll() {
    return this.chamadaService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chamadaService.findOne(+id);
  }

  @Get('Aluno/:alunoId')
  async findByAlunoId(@Param('alunoId') alunoId: string) {
    return this.chamadaService.findOneByAlunoId(+alunoId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChamadaDto: UpdateChamadaDto) {
    return this.chamadaService.update(+id, updateChamadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chamadaService.remove(+id);
  }
}
