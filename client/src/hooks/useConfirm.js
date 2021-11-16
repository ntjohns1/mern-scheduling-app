import { useContext } from 'react';
import ConfirmContext from '../utils/context/ConfirmContext';
import {HIDE_CONFIRM, SHOW_CONFIRM} from "../utils/context/ConfirmReducer";

let resolveCallback;
function useConfirm() {
    const [confirmState, dispatch] = useContext(ConfirmContext);
    const onConfirm = () => {
        closeConfirm();
        resolveCallback(true);
    };

    const onCancel = () => {
        closeConfirm();
        resolveCallback(false);
    };
    const confirm = text => {
        dispatch({
            type: SHOW_CONFIRM,
            payload: {
                text
            }
        });
        return new Promise((res, rej) => {
            resolveCallback = res;
        });
    };

    const closeConfirm = () => {
        dispatch({
            type: HIDE_CONFIRM
        });
    };

    return { confirm, onConfirm, onCancel, confirmState };
}

export default useConfirm;