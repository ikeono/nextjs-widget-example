

export const addMessage = ({state}, message) => {
    if (!state[message.location_id]) {
        state[message.location_id] = []
    }
    state[message.location_id].push(message)
}