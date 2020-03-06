const ADD_TASK = 'ADD_TASK';
const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
const FETCH_TASKS = 'FETCH_TASKS';
const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

const initialState = {
  tasks: [],
  isFetching: false,
  errorMessage: ''
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case FETCH_TASKS:
      return {
        ...state,
        errorMessage: '',
        isFetching: true
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: [...action.taskData],
        isFetching: false
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
export const addTask = () => ({ type: ADD_TASK });
export const addTaskSuccess = () => ({
  type: ADD_TASK_SUCCESS
});
export const addTaskFailure = errorMessage => ({
  type: ADD_TASK_FAILURE,
  errorMessage
});

export const fetchTasks = () => ({ type: FETCH_TASKS });
export const fetchTasksSuccess = taskData => ({
  type: FETCH_TASKS_SUCCESS,
  taskData
});
export const fetchTasksFailure = errorMessage => ({
  type: FETCH_TASKS_FAILURE,
  errorMessage
});

export default tasksReducer;
