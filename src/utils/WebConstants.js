
export const fielUserName = 'username';
export const fielEmail = 'email';
export const fielPhone = 'phone';
export const fielGender = 'sex';
export const fielFavColor = 'favoritecolor';
export const fielEmployed = 'employed';
export const fielNotes = 'notes';


// remove offer 
export const setDefaultValue = (initObj) => {
    initObj = {
        username: 'Logistic Infotech PVT. LTD.',
        email: 'li@gmail.com',
        phone: '9898989898',
        sex: 'male',
        favoritecolor: 'Blue',
        employed: true,
        notes: 'This is an notes for testing purpose here.',
    };
    return initObj;
};

export const removeDefaultValue = (initObj) => {
    initObj = {
        username: '',
        email: '',
        phone: '',
        sex: '',
        favoritecolor: '',
        employed: false,
        notes: '',
    };
    return initObj;
};
