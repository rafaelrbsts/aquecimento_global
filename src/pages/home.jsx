import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"
import AButton from "../components/aButton"
import BasicCard from "../components/basicCard"

import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckIcon from '@mui/icons-material/Check';

function Home() {
    return (
        <>
            <Header/>
                <div style={{width:"calc(100% - 48px)", display:"flex", justifyContent:"space-between", margin:"120px 24px 50px 24px", gap:"70px"}}>
                    <div style={{display:"flex", flexDirection:"column", gap:"35px", width:"50%"}}>
                        <Typography variant="h3" sx={{fontSize:"32px", fontWeight:"bold"}}>
                            O futuro do <span style={{color:"#059568"}}>Planeta</span> 
                            <br/> 
                            está em nossas mãos.
                        </Typography>
                        <Typography variant="body1">
                            O aquecimento global não é apenas uma estatística, é a realidade que define nossa era. Entenda as causas, as consequências e como pequenas mudanças podem gerar um grande impacto.
                        </Typography>
                        <div style={{display:"flex", gap:"30px", marginLeft:"22px"}}>
                            <AButton texto="Saiba mais"/>
                            <AButton sx={{border:"1px solid #CCD6E1"}}
                            color="#404144"
                            texto="Contribuir"
                            backgroundColor="none"
                            />
                        </div>
                    </div>
                    <div style={{width:"50%", border:"1px solid black"}}>
                        <img src="https://via.placeholder.com/400x200" alt="Placeholder Image" />
                    </div>
                </div>
                <div style={{display:"flex", width:"100%", justifyContent:"center", gap:"70px", marginBottom:"60px"}}>
                    <BasicCard
                        icone={<InfoOutlinedIcon />}
                        backgroundColorIcon="#DBEAFE"
                        colorIcon="#6693F2"
                        titulo="Causas"
                        texto="Descubra como a queima de combustíveis fósseis e o desmatamento aceleram o efeito estufa."
                    />
                    <BasicCard
                        icone={<WarningAmberOutlinedIcon />}
                        backgroundColorIcon="#FEE2E2"
                        colorIcon="#F46565"
                        titulo="Consequências"
                        texto="Eventos climáticos extremos, aumento do nível do mar e perda de biodiversidade."
                    />
                    <BasicCard
                        icone={<CheckIcon />}
                        backgroundColorIcon="#D1FAE5"
                        colorIcon="#48D89C"
                        titulo="Soluções"
                        texto="Energias renováveis, economia circular e reflorestamento são os caminhos necessários."
                    />
                </div>
            <Footer/>
            <ADrawer/>
        </>
    )
}

export default Home