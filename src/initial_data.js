const initialData = {
    exercises: {
        'situp': {
            id: 'situp',
            name: 'sit up',
            thumb: '/images/sit_up_icon.png'
        },
        'pushup': {
            id: 'pushup',
            name: 'push up',
            thumb: '/images/push_up_icon.png'
        },
        'lunge': {
            id: 'lunge',
            name: 'lunge',
            thumb: '/images/lunge_icon.png'
        },
        'squat': {
            id: 'squat',
            name: 'squat',
            thumb: '/images/squat_icon.png'
        },

        'legRaise': {
            id: 'legRaise',
            name: 'leg raise',
            thumb: '/images/leg_raise_icon.png'
        },

        'shoulderPress': {
            id: 'shoulderPress',
            name: 'shoulder press',
            thumb: '/images/shoulder_press_icon.png'
        },
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: "All Exercises",
            exerciseIds: ['situp', 'pushup', 'lunge', 'squat', 'legRaise', 'shoulderPress'],
        },

        'column-2': {
            id: 'column-2',
            title: "Today's Workout",
            exerciseIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: "Finished Workout",
            exerciseIds: [],
        },

    },

    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
};

export default initialData;