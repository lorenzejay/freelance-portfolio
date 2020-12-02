export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc796fa3bd97f7ee8278ee4',
                  title: 'Sanity Studio',
                  name: 'freelance-portfolio-studio',
                  apiId: '56aeb0b9-6a08-42c1-9fe9-ae03ce43c758'
                },
                {
                  buildHookId: '5fc796fa6c3c56b90a10f4be',
                  title: 'Portfolio Website',
                  name: 'freelance-portfolio',
                  apiId: 'aa67fb24-70c4-4d10-b9d7-19c36d1252c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lorenzejay/freelance-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://freelance-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
