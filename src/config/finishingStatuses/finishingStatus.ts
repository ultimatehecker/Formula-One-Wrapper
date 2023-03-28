export default class FinishingStatus {
    constructor(finishingStatusParser: any) {
        this.statusId = finishingStatusParser.statusId
        this.count = parseInt(finishingStatusParser.count);
        this.status = finishingStatusParser.status
    }

    statusId: string
    count: any
    status: any
}