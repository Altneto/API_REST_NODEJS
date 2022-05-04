import dotenv from 'dotenv';
import { resolve } from 'path'

dotenv.config();

import './database';

import express from 'express';
import homeRoute from './routes/HomeRoute';
import userRoute from './routes/UserRoute';
import tokenRoute from './routes/TokenRoute';
import alunoRoute from './routes/AlunoRoute';
import fotoRoute from './routes/FotoRoute';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users', userRoute);
    this.app.use('/tokens', tokenRoute);
    this.app.use('/alunos', alunoRoute);
    this.app.use('/fotos', fotoRoute);
  }
}

export default new App().app;
