export const createStore = (reducer, initialState) =>
{
    let _state = initialState
    let _reducer = reducer
    let _subsribers = []

    function getState()
    {
        return _state
    }

    function dispatch(action)
    {
        _state = _reducer(_state, action)
        _subsribers.forEach(callback => callback())
    }

    function subscribe(callback)
    {
        _subsribers.push(callback)
        return () => _subsribers = _subsribers.filter(func => func !== callback)
    }

    return {getState, dispatch, subscribe}
}


