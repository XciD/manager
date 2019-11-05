import routing from './hosting.routes';

import cdn from './cdn/hosting-cdn.modules';
import generalInformations from './general-informations/general-informations.module';
import sqlDatabase from './sql-database/hosting-sql-database.module';
import websiteCoach from './website-coach/website-coach.module';

const moduleName = 'ovhManagerHosting';

angular
  .module(moduleName, [
    cdn,
    generalInformations,
    sqlDatabase,
    websiteCoach,
  ])
  .config(routing);

export default moduleName;
