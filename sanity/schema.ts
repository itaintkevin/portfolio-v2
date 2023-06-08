import { type SchemaTypeDefinition } from 'sanity'

import about from './schemas/about'
import projects from './schemas/projects'
import experiences from './schemas/experiences'
import skills from './schemas/skills'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, about, projects, experiences],
}
