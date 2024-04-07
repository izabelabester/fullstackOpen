const Notification = ({ message }) => {
    if (message === null) {
      return null
    } else if (message.includes("removed from server")){
        return (
            <div className='error'>
              {message}
            </div>
          )
    } else if (message.includes("Added") || (message.includes("Updated"))) {
        return (
        <div className='notif'>
            {message}
        </div>
        )
    }
}

export default Notification