export default abstract class Parser {

    public abstract parse(data: any, extraParams?: Parser): any;

}