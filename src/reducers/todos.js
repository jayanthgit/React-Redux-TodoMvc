const initialState = [];

export default function todos(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.reduce(
                        (maxId, todo) => {
                            return Math.max(todo.Id, maxId)
                        }
                    ),
                    completed: false,
                    description: action.text
                }
            ]

        default:
            return state
    }
}