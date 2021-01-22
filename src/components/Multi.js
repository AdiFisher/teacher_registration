import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        "& > * + *": {
            marginTop: theme.spacing(3)
        }
    }
}));

export default function Multi({
                                  callbackFromMultiSelect,
                                  reference,
                                  favBooks,
                                  userKey,
                                  options
                              }) {
    const classes = useStyles();

    const defaultProps = {
        options: options,
        getOptionLabel: (option) => option.name
    };

    return (
        <div className={classes.root}>
            <Autocomplete
                {...defaultProps}
                multiple
                value={favBooks}
                onChange={(event, newValues) => {
                    callbackFromMultiSelect(newValues, userKey, reference);
                }}
                getOptionSelected={(option, value) => option.name === value.name}
                id="controllable-states-demo"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={`Controllable ${userKey}`}
                        variant="outlined"
                    />
                )}
            />
        </div>
    );
}
