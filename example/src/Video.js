/* eslint jsx-a11y/media-has-caption: 0 */
import React from 'react';

import DraggableSplitscreen from '../../src/DraggableSplitscreen';

const Left = () => (
  <video
    style={{ width: '100%', height: 'auto', objectFit: 'inherit' }}
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    loop
    muted
    autoPlay
  />
);

const Right = () => (
  <video
    style={{ width: '100%', height: 'auto', objectFit: 'inherit' }}
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    loop
    muted
    autoPlay
  />
);

const Video = () => (
  <DraggableSplitscreen
    leftSide={<Left />}
    rightSide={<Right />}
  />
);

export default Video;