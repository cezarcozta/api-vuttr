import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateToolsService from '../services/tools/CreateToolsService';
import DeleteToolsService from '../services/tools/DeleteToolsService';
import UpdateToolsService from '../services/tools/UpdateTooolsService';

import Tools from '../models/Tools';


const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const toolsRepository = getRepository(Tools);

  try {
    const tools = await toolsRepository.find();

    return response.status(200).json(tools);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
});

toolsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const toolsRepository = getRepository(Tools);

  try {
    const tool = await toolsRepository.findOne(id);

    return response.status(200).json(tool);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
})

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tagsIDs } = request.body;

  const createTool = new CreateToolsService();

  try {
    const tool = await createTool.execute({ title, link, description, tagsIDs });

    return response.status(201).json(tool);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
});

toolsRouter.put('/:id', async (request, response) => {
  const { title, link, description } = request.body;
  const { id } = request.params;

  const updateTool = new UpdateToolsService();

  try {
    const tool = await updateTool.execute({ id, title, link, description });

    return response.status(201).json(tool);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
});

toolsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTool = new DeleteToolsService();

  try {
    const tools = await deleteTool.execute(id);

    return response.status(204).json(tools);
  } catch (error) {

    return response.status(500).json({ error: error.message })
  }
});

export default toolsRouter;
