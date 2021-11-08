import { AttachmentInfoType, AttachmentStreamType, LocalInfoType, LocalStreamType, SoundcloudOptions } from '../typings';
export declare class SoundCloud {
    options: SoundcloudOptions;
    constructor(config?: SoundcloudOptions);
    /**
     * @method baseURLRegex
     * @description returns the regex for baseUrl
     * @readonly
     */
    get baseURLRegex(): RegExp;
    /**
     * @method baseURL
     * @description returns the supported base urls for soundcloud
     * @readonly
     */
    get baseURL(): string[];
    /**
     * @method parseURL
     * @description parses the souncloud urls to supported format
     * @param {string} query query that needs to be parsed
     */
    parseURL(query: string): string;
    /**
     * @method search
     * @description searchs for the query
     * @param {string} query query required for search
     * @param {SoundcloudOptions} scOptions options for soundcloud-downloader
     */
    search({ query }: {
        query: string;
        scOptions?: SoundcloudOptions;
    }): Promise<any[]>;
    /**
     * @method getInfo
     * @description gets the Data of the Url Provided
     * @param {string} url url of the track
     */
    getInfo(url: string): Promise<any>;
    /**
     * @method getStream
     * @description gets the stream data of the url provided
     * @param {string} url url of the track
     */
    getStream(url: string): Promise<any>;
}
export declare class LocalFile {
    /**
     * @method search
     * @description searchs for the file , if it exists, returns the path;
     * @param {string} query path to be searched
     */
    search(query: string): Promise<string[]>;
    /**
     * @method getInfo
     * @description gets info of the path
     * @param {string} query path
     */
    getInfo(query: string): Promise<LocalInfoType>;
    /**
     * @method getStream
     * @description gets the stream data of provided file
     * @param {string} query path of the file
     */
    getStream(query: string): LocalStreamType;
}
export declare class Attachments {
    /**
     * @method search
     * @description searchs for the url , if it exists, returns the url;
     * @param {string} query url to be searched
     */
    search(query: string): Promise<string[]>;
    /**
     * @method getInfo
     * @description gets info of the attachment
     * @param {string} query url
     */
    getInfo(query: string): Promise<AttachmentInfoType>;
    /**
     * @method getStream
     * @description gets the stream data of url
     * @param {string} url url
     */
    getStream(url: string): AttachmentStreamType;
}
export declare class Search {
    soundCloud: SoundCloud;
    localFile: LocalFile;
    attachment: Attachments;
    search({ query, type }: {
        query: string;
        type: number;
    }): Promise<any[]>;
}