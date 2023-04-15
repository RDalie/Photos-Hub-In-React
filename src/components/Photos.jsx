import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Card, CardMedia, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const Photos = (props) => {

    const [photos, setPhotos] = useState([])
    const { searchTerm } = useParams();

    useEffect(()=> {
        fetchFromAPI(`search?query=${searchTerm}`).then((data) => {
            console.log(data);
            setPhotos(data.photos);

        });
    }, [searchTerm]);


  return (
    <Grid container spacing={2}>
        {photos.map((photo) => {

            return(
                <Grid item xs={6} sm={4} md={3} key={photo}>
                <Card>
                    <CardMedia
                    component="img"
                    height="140"
                    image={photo.src.landscape}
                    alt="My image"
                    />
                </Card>
                </Grid>
            )

        })}

    </Grid>
  )
}

export default Photos