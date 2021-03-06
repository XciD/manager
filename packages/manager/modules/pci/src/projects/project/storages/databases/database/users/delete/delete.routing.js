import find from 'lodash/find';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'pci.projects.project.storages.databases.dashboard.users.delete',
    {
      url: '/delete?userId',
      views: {
        modal: {
          component: 'pciProjectUsersDelete',
        },
      },
      layout: 'modal',
      resolve: {
        breadcrumb: () => null, // Hide breadcrumb
        userId: /* @ngInject */ ($transition$) => $transition$.params().userId,
        user: /* @ngInject */ (users, userId) => find(users, { id: userId }),
        goBack: /* @ngInject */ (goToUsers, trackDatabases) => (
          message,
          type,
        ) => {
          if (!message && !type) {
            trackDatabases(
              'dashboard::users::options_menu::delete_user_cancel',
            );
          }
          return goToUsers(message, type);
        },
        removeUser: /* @ngInject */ (
          DatabaseService,
          database,
          projectId,
          trackDatabases,
        ) => (user) => {
          trackDatabases(
            'dashboard::users::options_menu::delete_user_validate',
          );
          return DatabaseService.deleteUser(
            projectId,
            database.engine,
            database.id,
            user.id,
          );
        },
      },
    },
  );
};
