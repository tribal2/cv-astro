export interface ICvData {
  info: IPersonalInfo;
  experience?: IExperience[];
  volunteering?: IVolunteer[];
  education?:  IEducation[];
  certifications?: ICertification[];
  skills?: ISkill[];
  projects?: IProject[];
  order?: ECvSection[];
}

export enum ECvSection {
  Info = 'info',
  Experience = 'experience',
  Volunteering = 'volunteering',
  Education = 'education',
  Certifications = 'certifications',
  Skills = 'skills',
  Projects = 'projects',
}

export interface IPersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  address: string;
  timezone?: string;
  addressUrl?: string;
  summary: string;
  image?: string;
}

export interface IExperience {
  company: IOrganization;
  current?: boolean;
  positions: IPosition[];
}

export interface IPosition {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
  tasks: ITask[];
  projects?: IProject[];
}

export interface IVolunteer {
  organization: IOrganization;
  description?: string;
  positions: IVolunteerPosition[];
  tasks: string[];
  isActiveMember: boolean;
  startDate?: string;
  endDate?: string;
}

export interface IVolunteerPosition {
  title: string;
  startDate: string;
  endDate?: string;
}

export interface ITask {
  description: string;
  output?: string;
}

export interface IProject {
  name: string;
  url?: string;
  description: string;
  output?: string;
  technologies: string[];
}

export interface IEducation {
  institution: IOrganization;
  degree: string;
  major?: string;
  startDate: string;
  endDate: string;
  projects?: IProject[];
  achievements?: string[];
}

export interface IOrganization {
  name: string;
  city?: string;
  country: string;
  url?: string;
  remarks?: string;
}

export interface ICertification {
  authority: string;
  name: string;
  code?: string;
  description?: string;
  license?: string;
  issueDate: string;
  expirationDate?: string;
  url?: string;
  image?: string;
}

export interface ILanguage {
  name: string;
  proficiency: string;
}

export interface ISkill {
  name: string;
  proficiency: number;
}
