// set environment
import { Environment } from '@ovh-ux/manager-config';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter, { RejectType } from '@uirouter/angularjs';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/widgets/draggable';
import 'script-loader!moment/min/moment-with-locales.min.js';
import 'script-loader!angular-ui-validate/dist/validate.js';
import 'ovh-ui-angular';
import 'script-loader!jquery';
import 'script-loader!bootstrap-tour/build/js/bootstrap-tour-standalone.min';
/* eslint-enable import/no-webpack-loader-syntax, import/extensions */

import get from 'lodash/get';
import has from 'lodash/has';

import navbar from '@ovh-ux/manager-navbar';
import ovhManagerCore from '@ovh-ux/manager-core';
import ovhManagerMfaEnrollment from '@ovh-ux/mfa-enrollment';
import ovhManagerPci from '@ovh-ux/manager-pci';
import ngOvhApiWrappers from '@ovh-ux/ng-ovh-api-wrappers';
import ngOvhUserPref from '@ovh-ux/ng-ovh-user-pref';
import ngUiRouterBreadcrumb from '@ovh-ux/ng-ui-router-breadcrumb';
import ngUiRouterLineProgress from '@ovh-ux/ng-ui-router-line-progress';

import 'ovh-ui-kit/dist/oui.css';
import 'ovh-ui-kit-bs/dist/ovh-ui-kit-bs.css';

import atInternet from './components/at-internet';
import preload from './components/manager-preload';

import 'bootstrap-tour/build/css/bootstrap-tour.min.css';
import './assets/theme/index.less';
import './index.scss';

import controller from './index.controller';
import service from './index.service';
import routing from './index.routes';

Environment.setRegion(__WEBPACK_REGION__);
Environment.setVersion(__VERSION__);

angular
  .module('ovhPublicCloudApp', [
    __NG_APP_INJECTIONS__,
    uiRouter,
    atInternet,
    ngUiRouterBreadcrumb,
    ngUiRouterLineProgress,
    ovhManagerCore,
    ovhManagerMfaEnrollment,
    ovhManagerPci,
    ngOvhApiWrappers,
    ngOvhUserPref,
    navbar,
    preload,
    ngAnimate,
    'oui',
  ].filter(value => value !== null)) // Remove null because __NG_APP_INJECTIONS__ can be null
  .controller('PublicCloudController', controller)
  .service('publicCloud', service)
  .config(/* @ngInject */ $locationProvider => $locationProvider.hashPrefix(''))
  .config(routing)
  .config(/* @ngInject */(TranslateServiceProvider) => {
    const defaultLanguage = TranslateServiceProvider.getUserLocale();
    // set moment locale
    moment.locale(defaultLanguage.split('_')[0]);
  })
  .run(/* @ngTranslationsInject:json ./translations */);
