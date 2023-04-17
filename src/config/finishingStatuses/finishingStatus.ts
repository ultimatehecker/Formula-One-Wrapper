export default class FinishingStatus {

    public statusId: string;
    public count: number;
    public status: string;

    constructor(finishingStatusParser: any) {
        this.statusId = finishingStatusParser.statusId
        this.count = parseInt(finishingStatusParser.count);
        this.status = finishingStatusParser.status
    }
}