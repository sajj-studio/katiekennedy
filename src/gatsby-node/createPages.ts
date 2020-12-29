import { CreatePagesArgs } from 'gatsby'
import { PageGeneratorQuery } from '../graphqlTypes'
import { ProjectPageContext } from '../templates/project'
import { resolve } from 'path'
import { ThemePageContext } from '../templates/theme'
import { ProjectSliderPageContext } from '../templates/project-slider'

export const createPages = async ({
  actions: { createPage },
  graphql,
}: CreatePagesArgs): Promise<void> => {
  const { data, errors } = await graphql<PageGeneratorQuery>(`
    query PageGenerator {
      allContentfulProject {
        nodes {
          id
          slug
        }
      }
      allContentfulTheme {
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
    createPage<ProjectSliderPageContext>({
      path: `/project/${project.slug}/gallery`,
      component: resolve('src/templates/project-slider.tsx'),
      context: { id: project.id },
    })
  }

  for (const theme of data?.allContentfulTheme.nodes ?? []) {
    createPage<ThemePageContext>({
      path: `/theme/${theme.slug}`,
      component: resolve('src/templates/theme.tsx'),
      context: { id: theme.id },
    })
  }
}
