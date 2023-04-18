import { useForm } from '../../hooks/useForm';
import { useStoryContext } from '../../contexts/StoryContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    TextField,
    Button,
    Container,
    Typography,
    TextareaAutosize 
} from '@material-ui/core';

import useStyles from './styles';

export const CreateStory = () => {
    const { username } = useContext(AuthContext);
    const { onCreateStorySubmit } = useStoryContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        preview: '',
        imageUrl: '',
        story: '',
        ownerUsername: username,
    }, onCreateStorySubmit);
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography variant="h4" className={classes.title}>Tell Story</Typography>
            <form className={classes.form} onSubmit={onSubmit}>
                <TextField 
                    fullWidth
                    label="Image URL"
                    name="imageUrl"
                    value={values.imageUrl}
                    onChange={changeHandler}
                    className={classes.textField}
                />
                <TextField 
                    fullWidth
                    label="Title"
                    name="title"
                    value={values.title}
                    onChange={changeHandler}
                    className={classes.textField}
                />
                <TextField 
                    fullWidth
                    label="Category"
                    name="category"
                    value={values.category}
                    onChange={changeHandler}
                    className={classes.textField}
                />
                <TextField 
                    fullWidth
                    label="Preview"
                    name="preview"
                    value={values.preview}
                    onChange={changeHandler}
                    className={classes.textField}
                />
                <TextareaAutosize
                    aria-label="story"
                    placeholder="Tell your story"
                    name="story"
                    value={values.story}
                    onChange={changeHandler}
                    minRows={10}
                    style={{ width: '100%' }}
                    className={classes.textField}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.submitButton} 
                    type="submit"
                >
                    Create Story
                </Button>
            </form>
        </Container>
    );
}
