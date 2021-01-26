const initialData = {
    exercises: {
        'sit_up': {
            id: 'sit_up',
            name: 'sit_up',
            thumb: './images/sit_up_icon.png'
        },
        'push_up': {
            id: 'push_up', 
            name: 'push_up',
            thumb: './images/push_up_icon.png'
        },
        'lunge': {
            id: 'lunge',
            name: 'lunge',
            thumb: './images/lunge_icon.png'
        },
        'squat': {
            id: 'squat',
            name: 'squat',
            thumb: './images/squat_icon.png'
        },

        'leg_raise': {
            id: 'leg_raise',
            name: 'leg_raise',
            thumb: './images/leg_raise_icon.png'
        },

        'shoulder_press': {
            id: 'shoulder_press',
            name: 'shoulder_press',
            thumb: './images/shoulder_press_icon.png'
        },
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: "All Exercises",
            exerciseIds: ['sit_up', 'push_up', 'lunge', 'squat', 'leg_raise', 'shoulder_press'],
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