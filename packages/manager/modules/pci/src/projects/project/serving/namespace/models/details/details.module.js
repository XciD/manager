import angular from 'angular';

import routing from './details.routing';

import component from './details.component';
import service from '../service/models.module';

const moduleName = 'ovhManagerPciProjectServingNamespaceModelsDetails';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'oui',
    'ovh-api-services',
    'pascalprecht.translate',
    'ui.router',
    service,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */)
  .component(
    'ovhManagerPciProjectServingNamespaceModelsDetailsComponent',
    component,
  );

export default moduleName;
