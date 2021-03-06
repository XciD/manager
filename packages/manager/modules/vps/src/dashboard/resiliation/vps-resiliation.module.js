import angular from 'angular';
import '@uirouter/angularjs';
import atInternet from '@ovh-ux/ng-at-internet';
import ngUiRouterLayout from '@ovh-ux/ng-ui-router-layout';
import ovhManagerBilling from '@ovh-ux/manager-billing';

import routing from './vps-resiliation.routing';

const moduleName = 'ovhManagerVpsResiliation';

angular
  .module(moduleName, [
    'ui.router',
    atInternet,
    ngUiRouterLayout,
    ovhManagerBilling,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
