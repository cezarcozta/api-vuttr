import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateToolsService from '../services/tools/CreateToolsService';

import Tools from '../models/Tools';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const toolsRepository = getRepository(Tools);

  const tools = await toolsRepository.find({ relations: ['tags'] });

  return response.status(200).json(tools);
})

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tagsIDs } = request.body;

  const createTool = new CreateToolsService();

  const tool = await createTool.execute({ title, link, description, tagsIDs });

  return response.status(201).json(tool);
});

export default toolsRouter;
