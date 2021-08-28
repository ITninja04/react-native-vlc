declare module 'react-native-vlc-media-player' {
    import {ViewStyle, ImageSourcePropType} from 'react-native';
    import {Component} from 'react';
    export type VLCFunctionType = () => void;
    export type VLCFunctionTypeWithCallback<T> = (cbProps: T) => void;

    type onPlayingCBType = {target: number; duration: number; seekable: boolean};

    type onProgressCBType = {
        duration: number;
        position: number;
        currentTime: number;
        remainingTime: number;
    };

    export type VLCPlayerSourceType = {
        uri: string;
        initType?: number;
        initOptions?: string[];
        hwDecoderEnabled?: number;
        hwDecoderForced?: number;
    };
    export interface VLCPlayerProps {
        style?: ViewStyle | undefined;
        rate?: number | undefined;
        seek?: number | undefined;
        resume?: boolean | undefined;
        snapshotPath?: string | undefined;
        paused?: boolean | undefined;
        autoAspectRatio?: boolean | undefined;
        videoAspectRatio?: string | undefined;
        volume?: number | undefined;
        disableFocus?: boolean | undefined;
        src?: string | undefined;
        playInBackground?: boolean | undefined;
        playWhenInactive?: boolean | undefined;
        resizeMode?: string | undefined;
        poster?: string | undefined;
        repeat?: boolean | undefined;
        muted?: boolean | undefined;
        onVideoLoadStart?: VLCFunctionType | undefined;
        onVideoError?: VLCFunctionType | undefined;
        onVideoProgress?: VLCFunctionType | undefined;
        onVideoEnded?: VLCFunctionType | undefined;
        onVideoPlaying?: VLCFunctionType | undefined;
        onVideoPaused?: VLCFunctionType | undefined;
        onVideoStopped?: VLCFunctionType | undefined;
        onVideoBuffering?: VLCFunctionType | undefined;
        onVideoOpen?: VLCFunctionType | undefined;

        /* Wrapper component */
        source?: VLCPlayerSourceType | undefined;
        onError?: VLCFunctionType | undefined;
        onProgress?: VLCFunctionTypeWithCallback<onProgressCBType> | undefined;
        onEnded?: VLCFunctionType | undefined;
        onStopped?: VLCFunctionType | undefined;
        onPlaying?: VLCFunctionTypeWithCallback<onPlayingCBType> | undefined;
        onPaused?: VLCFunctionType | undefined;

        /* Required by react-native */
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
        rotation?: number | undefined;
    }
    export class VLCPlayer extends Component<VLCPlayerProps, any> {}
}
