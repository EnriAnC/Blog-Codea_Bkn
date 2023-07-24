import React, { useEffect, useRef } from 'react'
import { useBlogsContext } from '../context/blogsContext'

const Modal = ({showModal, formData, setShowModal }) => {

    const { dispatch } = useBlogsContext()

    const modalRef = useRef()

    const handleSubmit = () => {
        dispatch({type:"added", payload:formData})
        alert('Confirmado!')
        setShowModal(false)
    }

    useEffect(()=>{
        if (showModal){
            modalRef.current.classList.add('show')
            modalRef.current.removeAttribute('aria-hidden')
            modalRef.current.setAttribute('aria-modal', true)
            modalRef.current.style.display = 'block'
        } else {
            modalRef.current.classList.remove('show')
            modalRef.current.removeAttribute('aria-modal')
            modalRef.current.setAttribute('aria-hidden', true)
            modalRef.current.style.display = 'none'
        }
    }, [showModal])

  return (
    <div ref={modalRef} className="modal fade" id="exampleModal" 
    tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Ya casi...!</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ¿Estas seguro que deseas continuar?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" 
                data-bs-dismiss="modal"
                onClick={()=>setShowModal(false)}>Volver</button>
                <button type="button" className="btn btn-primary"
                onClick={()=>handleSubmit()}>Confirmar</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal