import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateToolsService from '../services/tools/CreateToolsService';
import DeleteToolsService from '../services/tools/DeleteToolsService';

import Tools from '../models/Tools';
import UpdateToolsService from 'services/tools/UpdateTooolsService';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const toolsRepository = getRepository(Tools);

  const tools = await toolsRepository.find();

  return response.status(200).json(tools);
});

toolsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const toolsRepository = getRepository(Tools);

  const tool = await toolsRepository.findOne(id);

  return response.status(200).json(tool);
})

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tagsIDs } = request.body;

  const createTool = new CreateToolsService();

  const tool = await createTool.execute({ title, link, description, tagsIDs });

  return response.status(201).json(tool);
});

toolsRouter.put('/:id', async (request, response) => {
  const { title, link, description } = request.body;
  const { id } = request.params;

  const updateTool = new UpdateToolsService();

  const tool = await updateTool.execute({ id, title, link, description });

  return response.status(201).json(tool);
});

toolsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTool = new DeleteToolsService();

  await deleteTool.execute(id);

  return response.status(204);
});

export default toolsRouter;
