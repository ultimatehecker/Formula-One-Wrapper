export default class FinishingStatus {

    public statusId: any;
    public count: any;
    public status: any;

    constructor(finishingStatusParser: any) {
        this.statusId = finishingStatusParser.statusId
        this.count = parseInt(finishingStatusParser.count);
        this.status = finishingStatusParser.status
    }
}