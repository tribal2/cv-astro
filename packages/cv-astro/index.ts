// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

import Cv from './src/Cv.astro';

export default Cv;

export type {
  ICvData,
  ICertification,
  IEducation,
  IExperience,
  ILanguage,
  IProject,
  ISkill,
  IOrganization,
  IPersonalInfo,
  IPosition,
  ITask,
  IVolunteer,
  IVolunteerPosition,
} from './src/cv';
