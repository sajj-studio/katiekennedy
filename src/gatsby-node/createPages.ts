import { CreatePagesArgs } from 'gatsby'
import { ProjectPagesGeneratorQuery } from '../graphqlTypes'
import { ProjectPageContext } from '../templates/project'
import { resolve } from 'path'

export const createPages = async ({
  actions: { createPage },
  graphql,
}: CreatePagesArgs): Promise<void> => {
  const { data, errors } = await graphql<ProjectPagesGeneratorQuery>(`
    query ProjectPagesGenerator {
      allContentfulProject {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (errors) {
    throw new Error('Errors during project pages generation')
  }

  for (const project of data?.allContentfulProject.nodes ?? []) {
    createPage<ProjectPageContext>({
      path: `/project/${project.slug}`,
      component: resolve('src/templates/project.tsx'),
      context: { id: project.id },
    })
  }
}
