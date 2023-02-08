import close from '../svg/close.svg'

export const CloseButton = ({setIsHidden}) => {
    return <input 
        type='image' 
        onClick={() => {
            setIsHidden(true)
        }}
        src={close} alt="close modal"
        className="close-button"/>
}