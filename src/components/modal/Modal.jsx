import React, {useState} from 'react'

const Modal = () => {
    const [modal, setModal] = useState(false)
    const [age, setAge] = useState(12)
    const handleModaL = () =>{
        setModal(true)
    }
  return (
    <>
      <div>
        <button onClick={handleModaL}>Open Modal</button>
      </div>
      {age >= 18 ? alert('Vote') : alert('can not vote') }
      {
        modal && ( <div><div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div></div>)
      }

    </>
  )
}

export default Modal
