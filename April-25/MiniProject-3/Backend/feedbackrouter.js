import express from 'express';
import { authenticateUser } from 'authenticate.js';

import { getAllFeedbacks , createFeedback ,deleteFeedback} from 'feedbackController.js';

export const feedbackRouter = express.Router();

feedbackRouter.get('/',authenticateUser,getAllFeedbacks);

feedbackRouter.post("/",createFeedback);

feedbackRouter.delete('/:feedbackId',deleteFeedback);

