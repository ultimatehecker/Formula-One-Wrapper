export default class FinishingStatus {

    public statusId: number; // TODO: figure out why this is a number
    public count: number; // TODO: figure out why this is a number
    public status: string;

    constructor(finishingStatusParser: any) {
        this.statusId = parseInt(finishingStatusParser.statusId);
        this.count = parseInt(finishingStatusParser.count);
        this.status = finishingStatusParser.status
    }
}