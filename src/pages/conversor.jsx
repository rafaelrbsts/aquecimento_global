import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"
import AButton from "../components/aButton"

import {Box, Typography, TextField, MenuItem} from '@mui/material';

import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';

function Conversor() {

    const conversoes = [
        {value: 'celsius-fahrenheit', label: 'Celsius para Fahrenheit'},
        {value: 'fahrenheit-celsius', label: 'Fahrenheit para Celsius'},
        {value: 'celsius-kelvin', label: 'Celsius para Kelvin'},
        {value: 'kelvin-celsius', label: 'Kelvin para Celsius'},
        {value: 'fahrenheit-kelvin', label: 'Fahrenheit para Kelvin'},
        {value: 'kelvin-fahrenheit', label: 'Kelvin para Fahrenheit'},
    ];

    return (
        <>
            <Header/>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"580px", margin:"45px auto", height:"800px", boxShadow:"0 2px 10px rgba(0,0,0,0.5)", backgroundColor:"white", borderRadius:"12px"}}>
                    <Box sx={{margin:"40px auto 32px auto", display:"flex", gap:"5px", width:"100%", justifyContent:"center"}}>
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"8px", width:"45px", height:"45px", backgroundColor:"#efefef"}}>
                            <DeviceThermostatOutlinedIcon sx={{color:"#FF0000"}}/>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <LoopOutlinedIcon/>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"8px", width:"45px", height:"45px", backgroundColor:"#efefef"}}>
                            <AcUnitOutlinedIcon sx={{color:"#82D6FA"}}/>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", width:"100%", gap:"5px", alignItems:"center", flexDirection:"column"}}>
                        <Typography variant="h3" sx={{fontSize:"24px", color:"#1E293B"}}>
                            Conversor de Temperatura
                        </Typography>
                        <Typography variant="body1" sx={{color:"#51555C"}}>
                            Escolha a direção da conversão e informe o valor.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", gap:"32px", marginTop:"60px", width:"80%"}}>
                        <Box sx={{width:"100%"}}>
                            <Typography>
                                Tipo de Conversão
                            </Typography>
                            <TextField sx={{marginTop:"12px", '& fieldset': {borderRadius:"14px" }}}
                            id="conversao"
                            label=""
                            select
                            fullWidth
                            >
                                {conversoes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}            
                            </TextField>
                        </Box>
                        <Box sx={{width:"100%"}}>
                            <Typography>
                                Valor a ser convertido
                            </Typography>
                            <TextField sx={{marginTop:"12px", '& fieldset': {borderRadius:"14px" }}}
                            id="conversao"
                            label=""
                            type="number"
                            fullWidth
                            />
                        </Box>

                        <AButton sx={{boxShadow:"0 8px 6px rgba(0,0,0,0.3)"}}
                        texto="Converter agora"
                        width="100%"
                        borderRadius="12px"
                        />

                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"#f9f9fa", width:"100%", height:"140px", borderRadius:"12px", boxShadow:"0 4px 10px rgba(0,0,0,0.3)"}}>
                            <Typography sx={{marginTop:"12px", color:"#727495", fontWeight:"700", letterSpacing:"10%"}}>
                                RESULTADO
                            </Typography>
                            <Typography sx={{marginTop:"28px", color:"#047857", fontWeight:"700", fontSize:"32px", textTransform:"uppercase", letterSpacing:"5%"}}>
                                teste
                            </Typography>
                        </Box>
                    </Box>
                    
                </div>
            <Footer/>
            <ADrawer/>
        </>
    )
}

export default Conversor 