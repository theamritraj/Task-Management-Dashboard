export const initialData = {
  backlog: {
    name: 'Backlog',
    tasks: [
      { id: '1', title: 'Task One', description: 'desc', time: '36 mins', tags: ['tagOne', 'tagTwo', 'tagThree'] },
      { id: '2', title: 'My First Task', description: 'desc', time: '15 mins', tags: ['my tag', 'my tag 2'] }
    ]
  },
  pending: {
    name: 'Pending',
    tasks: [
      { id: '3', title: 'Admin Panel Front-end', description: 'desc', time: '50 mins', tags: ['Test', 'Front'] }
    ]
  },
  todo: {
    name: 'To Do',
    tasks: [
      { id: '4', title: 'Admin Panel Front-end', description: 'desc', time: '50 mins', tags: ['Test', 'Front'] }
    ]
  },
  doing: {
    name: 'Doing',
    tasks: [
      { id: '5', title: 'Admin Panel Front-end', description: 'desc', time: '50 mins', tags: ['Test', 'Front'] }
    ]
  },
  done: {
    name: 'Done',
    tasks: [
      { id: '6', title: 'Admin Panel Back-end', description: 'desc', time: '50 mins', tags: ['Test', 'Front'] }
    ]
  }
};
