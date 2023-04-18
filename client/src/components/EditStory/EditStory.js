
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoryContext } from "../../contexts/StoryContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { storyServiceFactory } from "../../services/storyService";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Container,
  Typography,
  TextareaAutosize 
} from "@material-ui/core";

import useStyles from './styles';

export const EditStory = () => {
  const { onStoryEditSubmit } = useStoryContext();
  const { storyId } = useParams();
  const storyService = useService(storyServiceFactory);
  const {
    values,
    changeHandler,
    onSubmit,
    changeValues,
  } = useForm(
    {
      _id: "",
      title: "",
      category: "",
      preview: "",
      imageUrl: "",
      story: "",
    },
    onStoryEditSubmit
  );

  const classes = useStyles();

  useEffect(() => {
    storyService.getOne(storyId).then((result) => {
      changeValues(result);
    });
  }, [storyId]);

  return (
    <Container maxWidth="md" className={classes.container}>
    <Typography variant="h4" className={classes.title}>Edit Story</Typography>
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
            SAVE CHANGES
        </Button>
    </form>
</Container>
  );
};
