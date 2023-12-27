config = {
  name: 'Google Cloud Vision',
  description: 'Analyze an image with Google Cloud Vision.',
  author: 'Marko',
  blockStyle: {
    backgroundColor: '#007aff',
    foregroundColor: '#ffffff',
    label: 'Google Cloud Vision',
  },
  configurationSections: [
    {
      title: 'Google Vision Image Analysis',
      items: [
        {
          label: 'Google Cloud Vision API Key',
          type: 'text',
          variable: 'apiKey',
          helpText: '',
        },
        {
          label: 'Image URL',
          type: 'text',
          variable: 'imageUrl',
          helpText: 'URL of the image to analyze.',
        },
        {
          label: 'Detection Type',
          variable: 'detectionType',
          type: 'select',
          selectOptions: [
            {
              label: 'Document Text',
              value: 'DOCUMENT_TEXT_DETECTION',
            },
            {
              label: 'Text Detection',
              value: 'TEXT_DETECTION',
            },
            {
              label: 'Image Labels',
              value: 'LABEL_DETECTION',
            },
            {
              label: 'Dominant Colors',
              value: 'IMAGE_PROPERTIES',
            },
            {
              label: 'Object Detection',
              value: 'OBJECT_LOCALIZATION',
            },
            {
              label: 'Face Detection',
              value: 'FACE_DETECTION',
            },
            {
              label: 'Logo Detection',
              value: 'LOGO_DETECTION',
            },
            {
              label: 'Landmark Detection',
              value: 'LANDMARK_DETECTION',
            },
          ],
        },
        {
          label: 'Output Variable',
          type: 'text',
          variable: 'outputVar',
          helpText: 'Save the response to this variable.',
        },
      ],
    },
  ],
}
