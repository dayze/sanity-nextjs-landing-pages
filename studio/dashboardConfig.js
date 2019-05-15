export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cdc254d24c861e7d81b48d1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cuwhyqia',
                  apiId: '146fae81-581e-479e-b26d-008962daaed4'
                },
                {
                  buildHookId: '5cdc254e4884055e05aa5f5f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kkfy3v4i',
                  apiId: 'e8e60645-32a7-4b3d-a69f-108e50b30047'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dayze/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kkfy3v4i.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
