import React from 'react'

function Modal() {
    return (
        <div id="modal">
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Ваш телефон" />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
}

export default Modal
