import {UPLOAD_NEW_IDEA} from './types';

export const uploadNewIdea = data => {
  return {
    type: UPLOAD_NEW_IDEA,
    payload: data,
  };
};
