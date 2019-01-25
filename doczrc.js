export default {
  title: 'react components repository',
  description: '',
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: '#da032c',
    },
  },
  menu: [
    'Getting Started',
    'Button',
    'ButtonGroup',
    'Input',
    'SelectGroup',
    {
      name: 'Checkbox',
      menu: ['BasicCheckbox', 'FancyCheckbox'],
    },
    {
      name: 'Radio',
      menu: ['BasicRadio', 'FancyRadio'],
    },
  ],
  wrapper: 'src/components/Wrapper',
};
