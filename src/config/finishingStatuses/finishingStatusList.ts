import _ from 'underscore';
import FinishingStatus from './finishingStatus';

function FinishingStatusList(this: any, finishingStatusesParser: any) {
    let self = this;
    this.finishingStatuses = [];

    _.map(finishingStatusesParser, function(status) {
        self.finishingStatuses.push(new FinishingStatus(status));
    });
}

FinishingStatusList.prototype.getStatus = function(statusName: any) {
    return _.find(this.finishingStatuses, function(status) {
        return status.status == statusName;
    });
};

module.exports = FinishingStatusList;