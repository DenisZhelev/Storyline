// import { CatalogItem } from "./CatalgItem/CatalogItem";

// export const Catalog = ({storyes}) => {
//     return (
//       <div id="box">
//         <h1>Catalog</h1>
//         {storyes.map(x => <CatalogItem key = {x._id} {...x}/>)}
//         {storyes.lenght === 0 && <h3>Nothing</h3>}
//       </div>
//     );
//   }
  
import { makeStyles } from '@material-ui/core/styles';
import { CatalogItem } from "./CatalgItem/CatalogItem";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: 'auto',
    padding: theme.spacing(2),
    width: '90%',
  },
  catalogItem: {
    width: 300,
    margin: theme.spacing(2),
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    catalogItem: {
      width: '100%',
      margin: theme.spacing(1, 0),
    },
  },
}));

export const Catalog = ({storyes}) => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1>Catalog</h1>
      <Grid container spacing={2} justify="center">
        {storyes.map(x => (
          <Grid item xs={12} sm={6} md={4} key={x._id}>
            <CatalogItem
              {...x}
              className={classes.catalogItem}
            />
          </Grid>
        ))}
        {storyes.length === 0 && <h3>Nothing</h3>}
      </Grid>
    </div>
  );
}

