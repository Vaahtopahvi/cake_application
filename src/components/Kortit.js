import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function Kortit(props) {
  return (
    <Grid container spacing={ 4 }>
        {
            props.resepti.map(tiedot => {
                return(
                    <Grid item key={ tiedot.id }>
                        <Card sx = {{ maxWidth: 300 }}>
                            <CardHeader title = { tiedot.nimi } />
                            <CardMedia component='img' height = '300'
                            image = { tiedot.image }
                            alt = { tiedot.title } />
                        <CardContent>
                            <Typography> { tiedot.title } </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Ohjeet</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default Kortit