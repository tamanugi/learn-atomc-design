import React from 'react'
import styles from './styles.css'
import Notification from '../Notification/index'

const NotificationList = ({
  programs,
  onClickDelete,
  ...props
}) => (
  <div { ...props }>
    { programs.map((program, idx) => (
      <Notification
        key={ idx }
        className={ styles.imte }
        program={ program }
        onClickDelete={ onClickDelete }
      />
    )) }
  </div>
)

export default NotificationList