# react-native-vlc

## New feature requests and bug fixes 

At the moment I am a bit tied up with other work. As a matter of fact, I don't get much time to develop at all nowadays. But I am more than open to help anyone who wants's to contribute to this repo. And I will be sure to merge any fixes as soon as PR's come up. But if you need someone to fix issues that affect you till I get back to this(ETA Q3 2022), One option is to add a bounty to the following site https://www.bountysource.com/ someone will attend to it.




## Supported RN Versions

0.59 > 0.62 and up
PODs are updated to works with 0.61 and up.(Tested in 0.61.5 and 0.62 and 0.63)

## Supported formats

Support for network streams, RTSP, RTP, RTMP, HLS, MMS.
Play all files,[ in all formats, including exotic ones, like the classic VLC media player.](#-More-formats)
Play MKV, multiple audio tracks (including 5.1), and subtitles tracks (including SSA!)

## android

Should work without any specific settings

## iOS

1. cd to ios
2. run `pod init` (if only Podfile has not been generated in ios folder)
3. add `pod 'MobileVLCKit', '3.3.10'` to pod file **(No need if you are running RN 0.61 and up)** 
4. run `pod install` (you have to delete the app on the simulator/device and run `react-native run-ios` again)

## Optional (only for ios)

Enable Bitcode
in root project select Build Settings ---> find Bitcode and select Enable Bitcode

## TODO

1. Android video Aspect ratio and other params do not work (Events are called but all events come through a single event onVideoStateChange but the JS side does not implement it.).

## Use

```
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc';
import Orientation from 'react-native-orientation';

    <VLCPlayer
        style={[styles.video]}
        videoAspectRatio="16:9"
        source={{ uri: "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"}}
    />

or you can use

    <VlCPlayerView
          autoplay={false}
          url="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"
          Orientation={Orientation}
          ggUrl=""
          showGG={true}
          showTitle={true}
          title="Big Buck Bunny"
          showBack={true}
          onLeftPress={()=>{}}
       />
```

### VLCPlayer Props

Prop | Description | Default
---- | ----------- | -------
`source` | Object that contains the uri of a video or song to play eg `{{ uri: "https://video.com/example.mkv" }}` | `{}`
`paused` | Set to `true` or `false` to pause or play the media | `false`
`repeat` | Set to `true` or `false` to loop the media | `false`
`rate` | Set the playback rate of the player| `1`
`seek` | Set position to seek between `0` and `1` (`0` being the start, `1` being the end , use `position` from the progress object )
`volume` | Set the volume of the player (`number`)
`muted` | Set to `true` or `false` to mute the player |  `false`
`playInBackground` | Set to `true` or `false` to allow playing in the background | false
`videoAspectRatio ` | Set the video aspect ratio eg `"16:9"`
`autoAspectRatio` | Set to `true` or `false` to enable auto aspect ratio | false
`resizeMode` | Set the behavior for the video size (`fill, contain, cover, none, scale-down`) | none
`style` | React native stylesheet styles| `{}`

#### Callback props

Callback props take a function that gets fired on various player events:

Prop | Description
---- | -----------
`onPlaying` | Called when media starts playing returns eg `{target: 9, duration: 99750, seekable: true}`
`onProgress` | Callback containing `position` as a fraction, and `duration`, `currentTime` and `remainingTime` in seconds <br />&nbsp; ◦ &nbsp;eg `{  duration: 99750, position: 0.30, currentTime: 30154, remainingTime: -69594 }`
`onPaused` | Called when media is paused
`onStopped ` | Called when media is stoped
`onBuffering ` | Called when media is buffering
`onEnded` | Called when media playing ends
`onError` | Called when an error occurs whilst attempting to play media
