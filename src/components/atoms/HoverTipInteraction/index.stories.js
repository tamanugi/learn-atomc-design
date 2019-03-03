import React from 'react'
import { withStyle } from '../../utils/decorators'
import HoverTipInteraction, { Tip, Marker } from '.';

export default stories => stories
  .add('デフォルト', () => withStyle({ display: 'inline-block', margin: '50px' })(
    <HoverTipInteraction>
      <span>ホバーしてね</span>
      <Tip><span>チップ</span></Tip>
    </HoverTipInteraction>
  ))
  .add('マーカー', () => withStyle({ display: 'inline-block', margin: '50px' })(
    <HoverTipInteraction>
      <Marker><span>ホバーしてね</span></Marker>
      <Tip><span>チップ</span></Tip>
    </HoverTipInteraction>
  ))