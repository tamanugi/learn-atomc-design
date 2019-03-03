import React, { Component } from 'react'
import styles from './styles.css'
import Img from '../../atoms/Img/index'
import Heading from '../../atoms/Heading/index'
import { InfoTxt } from '../../atoms/Txt/index'
import Time from '../../atoms/Time/index'
import DeleteButton from '../../molecules/DeleteButton/index'

// export class NotificationContainer extends Component {
//   constructor() {
//     super()
//     this.onClickDelete = ::this.onClickDelete
//   }

//   onClickDelete(...args) {
//     const { onClickDelete, program } = this.props
//     onClickDelete(...args, program)
//   }
// }

const NotificationPresenter = ({
  program,
  className,
  onClickDelete,
  ...props
}) => (
  <section className={ [ styles.root, className ].join(' ') } { ...props }>
    <div>
      <Img src={ program.thumbnail } className={ styles.media } width="128" height="72" />
    </div>
    <div className={ styles.body }>
      <Heading level={ 3 } visualLevel={ 6 }>{ program.title }</Heading>
      <InfoTxt size="s">{ program.channelName }</InfoTxt>
      <InfoTxt size="s">
        <Time format="MM月DD日(ddd)HH:mm">{ program.startAt }</Time> 〜 <Time format="MM月DD日(ddd)HH:mm">{ program.endAt }</Time>
      </InfoTxt>
      <DeleteButton onClick={ onClickDelete } className={ styles.del } />
    </div>
  </section>
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