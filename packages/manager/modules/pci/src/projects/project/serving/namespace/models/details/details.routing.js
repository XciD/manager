export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'pci.projects.project.serving.namespace.models.details',
    {
      url: '/:modelId',
      component: 'ovhManagerPciProjectServingNamespaceModelsDetailsComponent',
      params: {
        modelId: null,
      },
      resolve: {
        goBack: /* @ngInject */ (goToNamespaceModels) => goToNamespaceModels,
        modelId: /* @ngInject */ ($stateParams) => $stateParams.modelId,
        breadcrumb: () => null,
      },
    },
  );
};
