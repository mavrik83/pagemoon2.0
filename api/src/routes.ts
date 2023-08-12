import { Router } from 'express';
import * as userControllers from '@/modules/user/controllers';
import * as articleControllers from '@/modules/article/controllers';

export const routes = Router();

// User routes
routes.get('/user/:id', userControllers.getUser);
routes.get('/user', userControllers.getUsers);
routes.post('/user', userControllers.addUser);
routes.put('/user/:id', userControllers.updateUser);
routes.delete('/user/:id', userControllers.deleteUser);

// Article routes
routes.get('/article/:id', articleControllers.getArticle);
routes.get('/article', articleControllers.getArticles);
routes.post('/article', articleControllers.addArticle);
routes.put('/article/:id', articleControllers.updateArticle);
routes.delete('/article/:id', articleControllers.deleteArticle);

