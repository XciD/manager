import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-cloud-universe-components';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';
import 'ovh-api-services';

import attach from './attach-registry';
import detach from './detach-registry';

import component from './dashboard.component';
import routing from './dashboard.routing';
import service from './dashboard.service';

const moduleName = 'ovhManagerPciTrainingDashboard';

angular
  .module(moduleName, [
    'ngOvhCloudUniverseComponents',
    'ngTranslateAsyncLoader',
    'oui',
    'ovh-api-services',
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    attach,
    detach,
  ])
  .config(routing)
  .component('pciProjectTrainingDashboardComponent', component)
  .service('PciProjectTrainingServiceDashboard', service)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
