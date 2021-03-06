import React, { Component } from 'react'
import styles from './styles.css'
import Img from '../../atoms/Img/index'
import Heading from '../../atoms/Heading/index'
import { InfoTxt } from '../../atoms/Txt/index'
import Time from '../../atoms/Time/index'
import DeleteButton from '../../molecules/DeleteButton/index'
import MediaObjectLayout from '../../atoms/MediaObjectLayout';

const NotificationPresenter = ({
  program,
  className,
  onClickDelete,
  ...props
}) => (
  <MediaObjectLayout className={ [ styles.root, className ].join(' ') } { ...props }>
    <Img src={ program.thumbnail } className={ styles.media } width="128" height="72" />
    <Heading level={ 3 } visualLevel={ 6 }>{ program.title }</Heading>
    <InfoTxt size="s">{ program.channelName }</InfoTxt>
    <InfoTxt size="s">
      <Time format="MM月DD日(ddd)HH:mm">{ program.startAt }</Time> 〜 <Time format="MM月DD日(ddd)HH:mm">{ program.endAt }</Time>
    </InfoTxt>
    <DeleteButton onClick={ onClickDelete } className={ styles.del } />
  </MediaObjectLayout>
)

const NotificationContainer = ({
  presenter,
  program,
  onClickDelete,
  ...props
}) => {
  const _onClickDelete = onClickDelete ? (...args) => onClickDelete(...args, program) : null
  
  return presenter({program, onClickDelete: _onClickDelete, ...props })
} 

const Notification = props => (
  <NotificationContainer presenter={ presenterProps => <NotificationPresenter {...presenterProps } /> } {...props} />
)

export default Notification