import { GuildMember } from "discord.js";
import { SourceProviders } from "../utils/constants";
import { TrackInfoType, TrackRawInfo } from "../utils/typings";

export default class Track {
    public requestUser: GuildMember;
    public info: TrackInfoType;
    public rawInfo: TrackRawInfo;
    public source: SourceProviders;
    constructor(data: { requestUser: GuildMember, rawinfo: TrackRawInfo, type: number }) {
        this.requestUser = data.requestUser;
        this.info = this.transformInfo(data.rawinfo);
        this.rawInfo = data.rawinfo;
        this.source = this.getType(data.type);
    }
    /**
     * getType
     */

    /*
    Soundcloud,
    Twitch,
    LocalFile,
    Attachment
    */
    public getType(type: number) {
        return type
    }
    /**
     * transformInfo
     */
    public transformInfo(rawInfo: TrackRawInfo): TrackInfoType {
        if (this.source === 0) {
            return {
                title: rawInfo.title,
                description: rawInfo.description,
                url: rawInfo.permalink_url,
                thumbnail: rawInfo.artwork_url,
                raw_duration: rawInfo.duration,
                duration: rawInfo.full_duration,
                identifier: 'SoundCloud',
                author: rawInfo.user?.username,
                authorURL: rawInfo.user?.artwork_url,
                likes: rawInfo.likes_count,
                views: rawInfo.playback_count,
                createdTimestamp: rawInfo.created_at ? new Date(rawInfo.created_at).getTime() : null
            }
        }
        else if (this.source === 1) {
            return {
                title: rawInfo.title,
                description: 'A Local File',
                path: rawInfo.path,
                dir: rawInfo.dir,
                createdTimestamp: rawInfo.createdTimestamp,
                likes: 0,
                views: 0,
            }
        }
        else if (this.source === 2) {
            return {
                title: rawInfo.title,
                description: rawInfo.description,
                url: rawInfo.url,
                likes: 0,
                views: 0
            }
        }
    }
}