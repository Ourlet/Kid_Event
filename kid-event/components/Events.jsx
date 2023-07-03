import { Card, CardContent, CardHeader, CardMedia, Typography, CardActions, IconButton, Button, Stack } from '@mui/material';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useGlobalContext } from '../context'

const Events = () => {
  const { events } = useGlobalContext()

  return <section className="section-center">
    
    {events.map((event) => {
      const { id: id, title: title, date: date, location: location, link: link, image:image } = event

      return <Stack spacing={2}>
      <Card sx={{ maxWidth: 350}} key={id}>
        <CardHeader 
          title={title}
          subheader = {date}        
          />
        <CardMedia 
          component="img" 
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography>
          {location}
          </Typography>
        </CardContent>
        <CardActions sx={{ display:'flex',
        justifyContent:"space-around"}}
        >
          <IconButton aria-label="add to favorites">
        <Badge badgeContent={4} color="primary">
        <FavoriteIcon color="action" />
      </Badge>
        </IconButton>        
        <Button size="small">Learn More</Button>
        <IconButton aria-label="share with friends">
        <Badge badgeContent={2} color="primary">
        <ShareIcon color="action" />
      </Badge>
        </IconButton>
        
      </CardActions>
      </Card>
      </Stack>
    })}
    
  </section>
}

export default Events;