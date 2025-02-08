import { appLogo, doctor, fourPlayer, mobileSeen, mobileView, scoreBar, scoreBoard, twoPlayer } from "../images";

export const onboardingData = [
    {
        titleGreen: 'MAKE YOUR WORKOUTS',
        titleWhite: 'WORK FOR YOU',
        description:
            'Transform your fitness journey into a rewarding adventure by earning real money through exciting challenges.',
        bgImage: mobileView,
        topImage: appLogo,
    },
    {
        titleGreen: 'GET YOUR PERSONALIZED',
        titleWhite: 'HEALTH SCORECARD',
        description:
            'Compete with others in personalized fitness challenges, adding motivation to your workouts.',
        bgImage: fourPlayer,
        topImage: null,
    },
    {
        titleGreen: 'CHALLENGE YOUR',
        titleWhite: 'FRIENDS AND CO-WORKERS',
        description:
            'Compete with others in personalized fitness challenges, adding motivation to your workouts.',
        bgImage: twoPlayer,
        topImage: scoreBoard,
    },
    {
        titleGreen: 'TURN YOUR HEALTH',
        titleWhite: 'INTO WEALTH',
        description:
            'Complete in challenges to earn money. Get healthy and stay healthy.',
        bgImage: scoreBar,
        topImage: mobileSeen,
    },
    {
        titleGreen: 'INSIGHTS BY',
        titleWhite: 'DR. BRETT OSBORN',
        description:
            'A pioneer in longevity medicine and neurosurgery',
        bgImage: doctor,
        topImage: null,
    },
];