import controller from './ai-solutions.controller';
import template from './ai-solutions.html';
import './ai-solutions.css';

export default {
  controller,
  template,
  bindings: {
    installLink: '<',
    jobInfoLink: '<',
    jobsLink: '<',
    registriesLink: '<',
    currentActiveLink: '<',
    allUsers: '<',
    regions: '<',
    refreshState: '<',
    trainingFeatures: '<',
    goToJobSubmit: '<',
    goToDashboard: '<',
    dashboardLink: '<',
    submitJobLink: '<',
    billingLink: '<',
    jobInfo: '<',
    jobKill: '<',
    userLink: '<',
    getPrice: '<',
    getTax: '<',
  },
};
