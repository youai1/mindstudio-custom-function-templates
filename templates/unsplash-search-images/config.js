config = {
  name: 'Image Search (Unsplash)',
  description: 'Perform an image search using the Unsplash API.',
  author: 'Victor',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'Image Search (Unsplash)',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Access Key',
          variable: 'unsplash_access_key',
          helpText: 'Your Unsplash access key.',
          type: 'secret',
        },
        {
          label: 'Search Query',
          variable: 'unsplash_query',
          helpText: 'Can be a string or a {{variable}}.',
          type: 'text',
        },
        {
          label: 'Image Count',
          variable: 'unsplash_image_count',
          helpText: 'How many images to return? (Default: 1)',
          type: 'text',
        },
        {
          label: 'Color Filter',
          variable: 'unsplash_color_filter',
          helpText: 'Optional. Filter results by color.',
          type: 'select',
          selectOptions: [
            {
              label: 'black_and_white',
              value: 'black_and_white',
            },
            {
              label: 'black',
              value: 'black',
            },
            {
              label: 'white',
              value: 'white',
            },
            {
              label: 'yellow',
              value: 'yellow',
            },
            {
              label: 'orange',
              value: 'orange',
            },
            {
              label: 'red',
              value: 'red',
            },
            {
              label: 'purple',
              value: 'purple',
            },
            {
              label: 'magenta',
              value: 'magenta',
            },
            {
              label: 'green',
              value: 'green',
            },
            {
              label: 'teal',
              value: 'teal',
            },
            {
              label: 'blue',
              value: 'blue',
            },
          ],
        },
        {
          label: 'Orientation Filter',
          variable: 'unsplash_orientation_filter',
          helpText: 'Optional. Filter by photo orientation.',
          type: 'select',
          selectOptions: [
            {
              label: 'landscape',
              value: 'landscape',
            },
            {
              label: 'portrait',
              value: 'portrait',
            },
            {
              label: 'squarish',
              value: 'squarish',
            },
          ],
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the output to.',
          type: 'text',
        },
      ],
    },
  ],
}
