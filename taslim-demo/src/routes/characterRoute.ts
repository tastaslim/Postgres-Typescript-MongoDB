import { Router } from 'express';
import { CharacterController } from '../controllers/characterController';
export const characterRoute = Router();
characterRoute.get(`/characters`, new CharacterController().listCharacters);
