
const userYearOfBirth = prompt('What is your year of birth?','');
const placeOfRes = prompt('Where do you live?','');
const userFavSport = prompt('What is your favorite sport?','');

const userAge = 2022 - userYearOfBirth;

const uaCapital = 'kyiv';
const enCapital = 'london';
const usaCapital = 'washington';

const powerlifting = 'powerlifting';
const football = 'football';
const basketball = 'basketball';

const sportsmans = {
    [powerlifting]: 'Ray Williams',
    [football]: 'Andriy Yarmolenko',
    [basketball]: 'LeBron James'
}


const userCapital = {
    [uaCapital]: 'Ukraine',
    [enCapital]: 'England',
    [usaCapital]: 'Washington'
}

if (isNaN(userAge)){
    result = 'Incorrect value \n'
}else if(userAge){
    result = `Your age is ${userAge}\n`
}else{
    result = 'It\'s sad that you didn\'t enter your year of birth.\n'
}

// if (placeOfRes && userCapital[placeOfRes.toLowerCase()]){
//     reslut += `You are live in the capital of ${userCapital[placeOfRes.toLowerCase()]}\n`
// }else if (placeOfRes){
//     result += `You are living in ${placeOfRes}\n`
// } else {
//     result += 'It\'s sad that you didn\'t enter place of residence.\n'
// }

// if (userFavSport && sportsmans[userFavSport.toLowerCase()]){
//     reslut += `You are live in the capital of ${sportsmans[userFavSport.toLowerCase()]}\n`
// }else if (userFavSport){
//     result += `You are living in ${userFavSport}\n`
// } else {
//     result += 'It\'s sad that you didn\'t enter you favorite sport.\n'
// }
if (placeOfRes && userCapital[placeOfRes.toLowerCase()]) {
    result += `You are live in the capital of ${userCapital[placeOfRes.toLowerCase()]}.\n`;
} else if (placeOfRes) {
    result += `You are living in ${placeOfRes}.\n`;
} else {
    result += 'It\'s sad that you didn\'t enter place of residence.\n';
}

if (userFavSport && sportsmans[userFavSport.toLowerCase()]) {
    result += `Wanna be like ${sportsmans[userFavSport.toLowerCase()]}?`;
} else if (userFavSport) {
    result += `Your faivorite ${userFavSport}.`;
} else {
    result += 'It\'s sad that you didn\'t enter favorite\n';
}
alert(result);

