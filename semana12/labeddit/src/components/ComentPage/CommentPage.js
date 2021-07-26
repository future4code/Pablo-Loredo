import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {MainContainer,PostColumn} from "./styles/styles"
import {PostCard} from "../PostCard/PostCard"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const CommentPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LabEddit
          </Typography>
          <Button color="inherit">Cadastre-se</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MainContainer>
          <PostColumn>
              <PostCard/>
          </PostColumn>
      </MainContainer>
    </div>
  );
}
