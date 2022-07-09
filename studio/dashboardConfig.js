export default {
  widgets: [
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
                  buildHookId: '62c956fed203bd4d3bb2035b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dnfgqr9n',
                  apiId: 'da77b716-a936-4388-bb72-122e5c2649fa'
                },
                {
                  buildHookId: '62c956fe07746f51fa5549b3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ektjdkx3',
                  apiId: '8d4e473c-3da4-44cf-b663-4a1cf8b39287'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Matthew-Burfield/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ektjdkx3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
