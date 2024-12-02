import { AoiClient, AoiExtension } from "aoi.js";
import { GuildNodeCreateOptions, GuildQueueEvent, Player, type PlayerInitOptions } from "discord-player";
import { MusicCommandManager } from "../managers/MusicCommandManager";
/**
 * Unexported type from `discord-player`.
 */
declare const knownExtractorKeys: readonly ["SpotifyExtractor", "AppleMusicExtractor", "SoundCloudExtractor", "YouTubeExtractor", "VimeoExtractor", "ReverbnationExtractor", "AttachmentExtractor"];
/**
 * Constructor options of the music extension.
 */
interface AoiMusicInitOptions extends PlayerInitOptions {
    /**
     * Options that are used when a guild node is created.
     */
    connectOptions?: Omit<GuildNodeCreateOptions<unknown>, "metadata">;
    /**
     * Array of event names the extension must listen to.
     */
    events?: GuildQueueEvent[];
    /**
     * Predicate to load certain extractors.
     * @returns {boolean | null}
     */
    extractorsLoadFilter?: (ext: (typeof knownExtractorKeys)[number]) => boolean | null;
}
/**
 * The entrypoint of the aoi music system.
 */
export declare class AoiMusic extends AoiExtension {
    #private;
    private options?;
    /** Cock my beloved. <3 */
    name: string;
    description: string;
    version: string;
    /**
     * The entrypoint of the player application.
     */
    player: Player;
    /**
     * The music command manager.
     */
    commands: MusicCommandManager;
    /**
     * The required intents for this extension to work.
     */
    private requiredIntents;
    /**
     * Creates an instance of the music extension.
     * @returns {AoiMusic}
     */
    constructor(options?: AoiInitOptions);
    /**
     * Starts the music extension.
     * @param client - The discord client instance.
     * @returns {void}
     */
    init(client: AoiClient): void;
    /**
     * Returns the events location.
     */
    get eventsLocation(): string;
    /**
     * Returns the native functions location.
     */
    get nativesLocation(): string;
    /**
     * Returns the user-defined `on connect` options.
     */
    get connectOptions(): Omit<GuildNodeCreateOptions<unknown>, "metadata">;
}
export {};