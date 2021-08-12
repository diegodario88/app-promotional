import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PeopleIcon from '@material-ui/icons/People';
import LineChart from '../chart/line';
import PieChart from '../chart/pie';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#737373'
  },
  arrowIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#737373'
  },
  inputRoot: {
    color: '#212121',
    width: '100%',
    '& input::placeholder': {
      opacity: 0.9
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    border: '1px solid #E1E1E1',
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      width: '311px'
    },
    height: '40px'
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      gap: '24px'
    }
  },
  boxSecondary: {
    display: 'flex',
    gap: '40px'
  },
  boxReveneus: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '86px',
    borderRadius: '4px',
    gap: '4px',
    padding: '21px',
    boxShadow:
      'rgba(239, 108, 0, 0.75) 0px 3px 3px -2px, rgba(239, 108, 0, 0.5) 0px 3px 4px 0px, rgba(239, 108, 0, 0.12) 0px 1px 8px 0px',
    background:
      'linear-gradient(180deg, rgba(239, 108, 0, 0.75) 0%, #EF6C00 100%)'
  },
  boxUsers: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '86px',
    borderRadius: '4px',
    gap: '4px',
    padding: '21px'
  },
  chartIcon: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 50
  },
  peopleIcon: {
    fontSize: 50,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  productsBox: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #E1E1E1',
    borderRadius: 4
  },
  productsInternalBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '10px',
    height: '48px'
  },
  productsSubInternalBox: {
    height: '27px',
    borderTop: '2px solid #E1E1E1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px'
  }
}));

const FilterInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.default,
    border: '1px solid #E1E1E1',
    fontSize: 16,
    height: '40px',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow'])
  }
}))(InputBase);

const ProductFilterInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    fontSize: 12,
    height: '40px',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow'])
  }
}))(InputBase);

export default function Dashboard() {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [date, setDate] = React.useState('');
  const [products, setProducts] = React.useState('');

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: '36px', paddingRight: '36px' }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Procurar um cliente…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{
                'aria-label': 'search'
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Box className={classes.boxHeader}>
            <FormControl style={{ width: '100%' }}>
              <InputLabel htmlFor="type-filter">Tipo</InputLabel>
              <NativeSelect
                id="type-filter"
                value={type}
                placeholder="Tipo"
                onChange={(e) => setType(e.target.value)}
                input={<FilterInput />}
              >
                <option value={10}>Porcentagem</option>
                <option value={20}>Valor</option>
                <option value={30}>Preço</option>
              </NativeSelect>
            </FormControl>
            <FormControl style={{ width: '100%' }}>
              <InputLabel htmlFor="type-filter" className={classes.label}>
                Data
              </InputLabel>
              <NativeSelect
                id="type-filter"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                input={<FilterInput />}
              >
                <option value={10}>Últimos 7 dias</option>
                <option value={20}>Últimos 15 dias</option>
                <option value={30}>Últimos 30 dias</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Box className={classes.boxSecondary}>
            <Grid item xs={12} md={6} lg={6} className={classes.boxReveneus}>
              <ShowChartIcon className={classes.chartIcon} />
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <Typography
                  style={{
                    lineHeight: '16px',
                    color: 'rgba(255, 255, 255, 0.87)'
                  }}
                >
                  Faturamento
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.87)'
                  }}
                >
                  R$ 300,00
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.boxUsers}>
                <PeopleIcon className={classes.peopleIcon} />
                <Box
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}
                >
                  <Typography
                    style={{ lineHeight: '16px', color: 'rgba(0, 0, 0, 0.6)' }}
                  >
                    Participantes
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: '20px',
                      lineHeight: '24px',
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    100 clientes
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Box>
          <Paper style={{ padding: '10px', marginTop: '16px' }}>
            <LineChart />
          </Paper>
          <Paper style={{ padding: '10px', marginTop: '16px' }}>
            <PieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Paper
            style={{
              minHeight: '441px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                style={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: 500 }}
              >
                Produtos
              </Typography>
              <FormControl>
                <NativeSelect
                  id="products-filter"
                  value={products}
                  placeholder="Tipo"
                  onChange={(e) => setProducts(e.target.value)}
                  input={<ProductFilterInput />}
                >
                  <option value={10}>Mais Vendidos</option>
                  <option value={20}>Menor Preço</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Box className={classes.productsBox}>
              <Box
                className={classes.productsInternalBox}
                style={{ borderLeft: '2px solid #EF6C00' }}
              >
                <Box style={{ display: 'flex', gap: '8px' }}>
                  <img src="coca-cola.png" width="28px" height="28px" />
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      Coca-Cola 350mL
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '10px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      Quantidade: 35
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '40px'
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      Preço / Promoção
                    </Typography>
                    <Box display="flex">
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          display: 'inline-block'
                        }}
                      >
                        R$ 3,50 /
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: '#388E3C',
                          display: 'inline-block',
                          marginLeft: '4px'
                        }}
                      >
                        R$ 2,99
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.productsSubInternalBox}>
                <Box display="flex">
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#787878',
                      display: 'inline-block'
                    }}
                  >
                    Pontos:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#EF6C00',
                      display: 'inline-block',
                      marginLeft: '4px'
                    }}
                  >
                    150 pts
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: 'rgba(0, 0, 0, 0.6)',
                      display: 'inline-block'
                    }}
                  >
                    Resgates:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#EF6C00',
                      display: 'inline-block',
                      marginLeft: '4px'
                    }}
                  >
                    33 pts
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.productsBox}>
              <Box
                className={classes.productsInternalBox}
                style={{ borderLeft: '2px solid #F5A15C' }}
              >
                <Box style={{ display: 'flex', gap: '8px' }}>
                  <img src="x-burger.png" width="28px" height="28px" />
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      X-Burguer
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '10px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      Quantidade: 55
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '40px'
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      Preço / Promoção
                    </Typography>
                    <Box display="flex">
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          display: 'inline-block'
                        }}
                      >
                        R$ 42,35 /
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: '#388E3C',
                          display: 'inline-block',
                          marginLeft: '4px'
                        }}
                      >
                        R$ 40,00
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.productsSubInternalBox}>
                <Box display="flex">
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#787878',
                      display: 'inline-block'
                    }}
                  >
                    Pontos:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#EF6C00',
                      display: 'inline-block',
                      marginLeft: '4px'
                    }}
                  >
                    120 pts
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: 'rgba(0, 0, 0, 0.6)',
                      display: 'inline-block'
                    }}
                  >
                    Resgates:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      lineHeight: '16px',
                      color: '#EF6C00',
                      display: 'inline-block',
                      marginLeft: '4px'
                    }}
                  >
                    20 pts
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.productsBox}>
              <Box
                className={classes.productsInternalBox}
                style={{ borderLeft: '2px solid #F7B985' }}
              >
                <Box style={{ display: 'flex', gap: '8px' }}>
                  <img src="brochette.png" width="28px" height="28px" />
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      Espeto de Carne
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '10px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      Quantidade: 80
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '40px'
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.87)'
                      }}
                    >
                      Preço / Promoção
                    </Typography>
                    <Box display="flex">
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: 'rgba(0, 0, 0, 0.6)',
                          display: 'inline-block'
                        }}
                      >
                        R$ 4,50 /
                      </Typography>
                      <Typography
                        style={{
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '16px',
                          color: '#388E3C',
                          display: 'inline-block',
                          marginLeft: '4px'
                        }}
                      >
                        R$ 4,50
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
          <Paper
            style={{
              height: '172px',
              marginTop: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                style={{
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Serviços
              </Typography>
              <FormControl>
                <NativeSelect
                  id="products-filter"
                  value={products}
                  placeholder="Tipo"
                  onChange={(e) => setProducts(e.target.value)}
                  input={<ProductFilterInput />}
                >
                  <option value={10}>Mais Utilizados</option>
                  <option value={20}>Menor Preço</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Box className={classes.productsBox} style={{ padding: '8px' }}>
              <Typography
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}
              >
                Permite cobrar taxa de entrega de pedidos
              </Typography>
              <Typography
                style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  color: 'rgba(0, 0, 0, 0.6)'
                }}
              >
                Quantidade: 33 · R$ 20,00 em média
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
