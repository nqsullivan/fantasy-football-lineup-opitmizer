import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
    },
    listItem:{
        width: '100%',
        maxWidth: 'lg',
        marginTop: "1rem",
        backgroundColor: "white",
    },
    liText: {
        marginTop: "auto",
        marginBottom: "auto",
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
        align:'right'
    }
}));