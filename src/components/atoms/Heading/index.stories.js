import React from 'react'
import Heading from './index'

export default stories => stories
  .add('デフォルト', () => <Heading>デフォルト</Heading>)
  .add('レベル1', () => <Heading level={ 1 }>見出しレベル1</Heading>)
  .add('レベル1, 見た目2', () => <Heading level={ 1 } visualLevel={ 2 }>見出しレベル1, 見た目レベル2</Heading>)
   