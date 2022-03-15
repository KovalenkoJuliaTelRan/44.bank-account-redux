import React, {useState} from 'react';
import {depositAction, withdrawAction} from "../actions/accountAction";
import {useDispatch} from "react-redux";

const Operation = () =>
{
    const [sum, setSum] = useState(0)
    const dispatch = useDispatch()
    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <button onClick={() => dispatch(withdrawAction(sum))}
                    className={'btn btn-primary btn-lg'}>Withdraw</button>
                <input typeof={'number'} min={0}
                       onChange={event => setSum(+event.target.value)} value={sum}
                className={'form-control-lg text-center'}/>
                <button onClick={() => dispatch(depositAction(sum))}
                        className={'btn btn-primary btn-lg'}>Deposit</button>
            </div>
        </div>
    );
};

export default Operation;
