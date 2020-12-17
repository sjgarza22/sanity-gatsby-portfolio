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
                  buildHookId: '5fdb68a74a02db0cf45d90fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ivr88osj',
                  apiId: 'f3c57aa9-cbee-4eca-ab83-7603395623b7'
                },
                {
                  buildHookId: '5fdb68a7dbb0330046fd4804',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dwpfujrk',
                  apiId: '9752d04a-afec-46c7-a6fb-bcbdfbfffbe4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjgarza22/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dwpfujrk.netlify.app',
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
