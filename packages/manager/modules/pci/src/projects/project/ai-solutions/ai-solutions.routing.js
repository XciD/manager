export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('pci.projects.project.ai-solutions', {
    url: '/ai-solutions',
    component: 'pciProjectAISolution',
    resolve: {},
  });
};
