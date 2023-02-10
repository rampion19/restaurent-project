import { Fragment } from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const Backdrop = props => {

    return <div className= {classes.backrop} />

}

const ModalOverlays = props => {

    return <div className= {classes.modal} >
    <div className= {classes.content}>{props.children}</div>
    </div>
}

const portalElements = document.getElementById("overlays")
const Modal = props => {
return <Fragment>
    {ReactDOM.createPortal(<Backdrop />,portalElements)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElements)}
</Fragment>
}

export default Modal;