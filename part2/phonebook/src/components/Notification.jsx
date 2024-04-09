/* eslint-disable react/prop-types */
const Notification = ({ message }) => {
    if (message == null || undefined) {
      return null
    } else if (message.includes("Added") || (message.includes("Updated"))) {
        return (
        <div className='notif'>
            {message}
        </div>
        )
    } else {
      return (
        <div className='error'>
          {message}
        </div>
      )

    }
}

export default Notification