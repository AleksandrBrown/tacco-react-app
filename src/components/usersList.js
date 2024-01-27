import userPhoto1 from '../assets/avatars/01.svg'
import userPhoto2 from '../assets/avatars/02.svg'
import userPhoto3 from '../assets/avatars/03.svg'
import userPhoto4 from '../assets/avatars/04.svg'
import userPhoto5 from '../assets/avatars/05.svg'


export const usersList = [
    {
        userName: 'Sarah Johnson',
        userBrth: '15.05.1990',
        userIcon: userPhoto1,
        userId: 'user-#1',
        userReview: {
            reviewText: "This taco spot is a hidden gem! The tacos are bursting with flavor, and the diverse menu offers something for every palate. With prompt service and a laid-back atmosphere, it's a go-to spot for a satisfying and affordable meal.",
            Rating: [1,2,3,4,5],
        }
    },
    {
        userName: 'Alex Rodriguez',
        userBrth: '8.09.1985',
        userIcon: userPhoto2,
        userId: 'user-#2',
        userReview: {
            reviewText: "Outstanding tacos! The quality of ingredients is top-notch, and the authenticity of flavors is unmatched. Whether you prefer classics or adventurous combinations, this restaurant delivers a consistently delicious experience. Definitely recommend!",
            Rating: [1,2,3,4,5],
        }
        
    },
    {
        userName: 'Marcus Turner',
        userBrth: '10.07.1990',
        userIcon: userPhoto3,
        userId: 'user-#3',
        userReview: {
            reviewText: "I can't get enough of this taco place! The fusion of flavors is incredible, and the attention to detail is apparent in every dish. The friendly staff and vibrant ambiance make it a great spot to enjoy mouthwatering tacos with friends or family.",
            Rating: [1,2,3,4,5],
        }
    },
    {
        userName: 'Emily Chang',
        userBrth: '25.02.1987',
        userIcon: userPhoto4,
        userId: 'user-#4',
        userReview: {
            reviewText: "Hands down the best tacos in town! The variety of options ensures there's something for everyone, and the freshness of ingredients sets this place apart. Quick service, reasonable prices, and a cozy atmosphere make it my favorite taco destination.",
            Rating: [1,2,3,4,5],
        }
    },
]