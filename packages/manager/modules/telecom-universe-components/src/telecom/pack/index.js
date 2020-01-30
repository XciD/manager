import angular from 'angular';
import '@ovh-ux/ng-ovh-swimming-poll';
import 'ovh-api-services';

import TucPackMediator from './pack-mediator.service';
import TucPackMigrationProcess from './migration/pack-migration-process.service';
import TucPackXdslModemMediator from './xdsl/modem/pack-xdsl-modem-mediator.service';

const moduleName = 'tucTelecomPack';

angular
  .module(moduleName, ['ngOvhSwimmingPoll', 'ovh-api-services'])
  .service('TucPackMediator', TucPackMediator)
  .service('TucPackMigrationProcess', TucPackMigrationProcess)
  .service('TucPackXdslModemMediator', TucPackXdslModemMediator);

export default moduleName;
