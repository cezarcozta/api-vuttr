import { Router } from 'express';

import toolsRouter from './tools.routes';
import tagsRouter from './tags.routes';

const routes = Router();

routes.use('/tools', toolsRouter);
routes.use('/tags', tagsRouter);

export default routes;
