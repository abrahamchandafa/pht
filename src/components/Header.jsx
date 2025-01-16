import {Box, Link, Button} from '@mui/joy';
import logo from '../media/logo2.png'
function Header () {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "horizontal",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                //bgcolor: "black",
                backgroundColor: "rgba(50,50,50,0.8)",
                color: "white",
                width: "100%",
                height: "100px",
                boxSizing: "content-box"
            }}>
            <Box
            sx={{
                px: '0',
                py: '0',
                mx: '0',
                my: '0',              
                boxSizing: "content-box"
            }}>
                <img 
                    src={logo}
                    alt='Logo'
                    style={{
                        maxWidth: '40%',
                        maxHeight: '100%',
                        objectFit: "contain",
                        display: 'block',
                    }}
                    >
                    </img>
            </Box>
            <Box 
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
            <Link level="h3" sx={{mx: "5px"}} href="#" variant="outlined" textColor={"common.white"} color='neutral'>
                About Us
            </Link>
            <Link level="h3"  sx={{mx: "5px"}} href="#" variant="outlined" textColor={"common.white"}  color='neutral'>
                Products
            </Link>
            <Link level="h3"  sx={{mx: "5px"}} href="#" variant="outlined" textColor={"common.white"}  color='neutral'>
                Services
            </Link>
            <Link level="h3"  sx={{mx: "5px"}} href="#" variant="outlined" textColor={"common.white"}  color='neutral'>
                Projects
            </Link>
            <Link level="h3"  sx={{mx: "5px"}} href="#" variant="outlined" textColor={"common.white"}  color='neutral'>
                Insights
            </Link>
            </Box>
            <Box>
                <Button 
                    sx={{
                        mx: "5px",
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black', 
                        }}}
                    size="lg" variant='outlined' color='neutral'>Contact Us</Button>
                <Button 
                    sx={{
                        mx: "5px",
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black', 
                        }}}
                size="lg" variant='outlined'  color='neutral'>Log in</Button>
            </Box>
        </Box>
    )
}


export default Header;