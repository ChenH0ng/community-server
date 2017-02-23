import Script from './Script';

export default class Comment extends Script {
    constructor({inArticle = '', ...rest,}) {
        super(rest);
        this.inArticle = inArticle;
    }
}