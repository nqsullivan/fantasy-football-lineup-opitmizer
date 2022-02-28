import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
    image: {
        marginLeft: '15px',
    },
    grid: {
        justifyContent: 'space-between',
        alignItems: "stretch",
        spacing: "3",
    },
}));