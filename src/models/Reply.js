import Script from './Script';

export default class Comment extends Script {
    constructor({inComment = '', ...rest,}) {
        super(rest);
        this.inComment = inComment;
    }
}
