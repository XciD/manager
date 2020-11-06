import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ovh-cloud-universe-components';
import '@ovh-ux/ng-translate-async-loader';
import '@uirouter/angularjs';
import 'angular-translate';
import 'ovh-api-services';

import labs from '../../../components/project/labs';

import component from './ai-solutions.component';
import routing from './ai-solutions.routing';

const moduleName = 'ovhManagerPciAISolution';

angular
  .module(moduleName, [
    'ngOvhCloudUniverseComponents',
    'ngTranslateAsyncLoader',
    'oui',
    'ovh-api-services',
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    labs,
  ])
  .config(routing)
  .component('pciProjectAISolution', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
