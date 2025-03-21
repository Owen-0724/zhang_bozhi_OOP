import { earbud } from "./earbud.js";

export class Taggedearbud extends earbud {
    constructor(company, imageUrl, tags) {
        super(company, imageUrl);
        this.tags = tags;
    }

    matchesTag(tag) {
        return this.tags.includes(tag);
    }
}
