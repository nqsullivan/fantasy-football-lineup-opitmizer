import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
    marginTop: 10
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    select: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 7,
        marginRight: 7,
    }
}));