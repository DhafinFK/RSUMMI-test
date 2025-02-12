export const getTrialList = () => {
    return [
        {id: 1, name: "Trial1"},
        {id: 2, name: "Trial2"},
        {id: 3, name: "Trial3"}
    ]
};

export const uncoveredService = (id: number) => {
    if (id % 2 == 0) {
        return {id: id, isEven: true};
    } else {
        return {id: id, isEven: false};
    }
};
