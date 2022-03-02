import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    list: {
        width: '100%',
        maxWidth: 'lg',
    },
    starterBenchHeading: {
        align: 'center',
    },
    totalPoints: {
        align:'right',
        paddingRight: "2.5rem",
        backgroundColor: "white",
    }
}));