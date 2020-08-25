import { Router } from 'express'
import { getRepository } from 'typeorm';

import CreateTagsService from '../services/tags/CreateTagsService';
import UpdateTagsService from '../services/tags/UpdateTagsService';
import DeleteTagsService from '../services/tags/DeleteTagsService';

import Tags from '../models/Tags';

const tagsRouter = Router();

tagsRouter.get('/', async (request, response) => {
  const tagsRepository = getRepository(Tags);

  const tags = await tagsRepository.find();

  return response.status(200).json(tags);
});

tagsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const tagsRepository = getRepository(Tags);

  const tag = await tagsRepository.findOne(id);

  return response.status(200).json(tag);
});

tagsRouter.post('/', async (request, response) => {
  const { name } = request.body;

  const createtag = new CreateTagsService();

  const tag = await createtag.execute({ name });

  return response.status(201).json(tag);
});

tagsRouter.put('/:id', async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  const updateTag = new UpdateTagsService();

  const tag = await updateTag.execute({ id, name });

  return response.status(201).json(tag);
});

tagsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTag = new DeleteTagsService();

  await deleteTag.execute(id);

  return response.status(204);
});

export default tagsRouter;
