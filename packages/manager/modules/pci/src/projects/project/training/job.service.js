import Job from './job.class';

export default class PciProjectTrainingJobService {
  /* @ngInject */
  constructor(OvhApiCloudProjectAi) {
    this.OvhApiCloudProjectAi = OvhApiCloudProjectAi;
  }

  submit(projectId, jobSpec) {
    return this.OvhApiCloudProjectAi.Training()
      .Job()
      .v6()
      .save({ serviceName: projectId }, jobSpec)
      .$promise.then(
        (job) =>
          new Job({
            ...job,
          }),
      );
  }

  resubmit(projectId, jobSpec) {
    let toSubmit = jobSpec;
    if (Object.prototype.hasOwnProperty.call(jobSpec, 'shutdown')) {
      // remove shutdown before submitting as it is forbidden server side and irrelevant when resubmitting
      toSubmit = (({ shutdown, ...j }) => j)(jobSpec);
    }
    return this.submit(projectId, toSubmit);
  }

  getAll(projectId) {
    return this.OvhApiCloudProjectAi.Training()
      .Job()
      .v6()
      .query({ serviceName: projectId })
      .$promise.then((jobs) => jobs.map((job) => new Job({ ...job })));
  }

  get(projectId, jobId) {
    return this.OvhApiCloudProjectAi.Training()
      .Job()
      .v6()
      .get({
        serviceName: projectId,
        jobId,
      })
      .$promise.then(
        (job) =>
          new Job({
            ...job,
          }),
      );
  }

  kill(projectId, jobId) {
    return this.OvhApiCloudProjectAi.Training()
      .Job()
      .v6()
      .kill(
        {
          serviceName: projectId,
          jobId,
        },
        null,
      ).$promise;
  }

  logs(projectId, jobId) {
    return this.OvhApiCloudProjectAi.Training()
      .Job()
      .v6()
      .log(
        {
          serviceName: projectId,
          jobId,
        },
        null,
      ).$promise;
  }
}
