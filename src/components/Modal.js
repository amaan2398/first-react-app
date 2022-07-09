function Modal(props) {
    function deleteHandler() {
        props.onClick();
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">Do you want to delete task?</div>
                <div>
                <button className="btn-cancel space" onClick={deleteHandler}>
                    Cancal
                </button>
                <button className="btn-confirm space" onClick={deleteHandler}>
                    Confirm
                </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
