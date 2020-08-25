import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateTagsService from '../services/tags/CreateTagsService';
import UpdateTagsService from '../services/tags/UpdateTagsService';
import DeleteTagsService from '../services/tags/DeleteTagsService';

import Tags from '../models/Tags';

const tagsRouter = Router();

tagsRouter.get('/', async (request, response) => {
  const tagsRepository = getRepository(Tags);

  try {
    const tags = await tagsRepository.find();

    return response.status(200).json(tags);
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
});

tagsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const tagsRepository = getRepository(Tags);

  try {
    const tag = await tagsRepository.findOne(id);

    return response.status(200).json(tag);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

tagsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createtag = new CreateTagsService();

  try {
    const tag = await createtag.execute(name);

    return response.status(201).json(tag);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
});

tagsRouter.put('/:id', async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  const updateTag = new UpdateTagsService();

  try {
    const tag = await updateTag.execute({ id, name });

    return response.status(201).json(tag);
  } catch (error) {

    return response.status(500).json({ error: error.message });
  }
});

tagsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTag = new DeleteTagsService();

  try {
    const tag = await deleteTag.execute(id);

    return response.status(204).json(tag);
  } catch (error) {

    return response.status(500).json({ error: error.message })
  }
});

export default tagsRouter;
