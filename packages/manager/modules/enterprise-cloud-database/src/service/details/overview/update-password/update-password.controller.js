import get from 'lodash/get';

import { STATUS } from '../../../../enterprise-cloud-database.constants';

export default class EnterpriseCloudDatabaseServiceDetailsOverviewUpdatePasswordCtrl {
  /* @ngInject */
  constructor(
    $state,
    $translate,
    enterpriseCloudDatabaseService,
  ) {
    this.$state = $state;
    this.$translate = $translate;
    this.service = enterpriseCloudDatabaseService;
  }

  goBack() {
    this.$state.go('^');
  }

  passwordChange(password) {
    this.passwordText = password;
  }

  changePassword() {
    this.isLoading = true;
    return this.service.setUserPassword(this.clusterId, this.passwordText)
      .then(res => this.goToOverview(
        this.$translate.instant('enterprise_cloud_database_password_change_success'),
        STATUS.SUCCESS,
        res.id,
      ))
      .catch(error => this.goToOverview(
        this.$translate.instant('enterprise_cloud_database_password_change_error', {
          message: get(error, 'data.message'),
        }),
        STATUS.ERROR,
      ))
      .finally(() => { this.isLoading = false; });
  }
}
