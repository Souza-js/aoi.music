import { BaseCommandManager } from "aoi.js";
import { GuildQueueEvent } from "discord-player";
/**
 * Common music handler name.
 */
export declare const handlerName = "AoiMusic";
/**
 * The music command manager.
 */
export declare class MusicCommandManager extends BaseCommandManager<`${GuildQueueEvent}`> {
    handlerName: string;
}