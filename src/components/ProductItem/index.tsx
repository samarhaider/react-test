
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Input } from '@mui/material';
import { Add, Remove} from '@mui/icons-material';

import { Product } from '../../pages/products/product.type';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProductItem({ product }: { product: Product }) {
  return <Paper
    key={product.id}
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img src={product.img} alt={product.name} role="image" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div" role="name">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" role="price">
              ${product.price}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Button variant="outlined" startIcon={<Add />} />
          <Input value={0} />
          <Button variant="outlined" startIcon={<Remove />} />
        </Grid>
      </Grid>
    </Grid>
  </Paper>;
}
