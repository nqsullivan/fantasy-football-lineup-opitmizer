import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',

    },
    heading: {
        color: "rgb(37,85,107)",
        fontSize: "3vw",
        marginLeft: "2rem",
        alignSelf: "center",
    },
    profileText: {
        color: "black",
        fontSize: "2vw",
        alignSelf: "center",
        marginRight: ".5rem",
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: "2rem",
    },
    avatar: {
        width: 32,
        height: 32,
        marginRight: "1.5rem"
    }
}));