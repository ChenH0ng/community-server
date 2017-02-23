import Script from './Script';

export default class Article extends Script {
    constructor({title = '', inCommunity = '', ...rest,}) {
        super(rest);
        this.title = title;
        this.inCommunity = inCommunity;
    }
}