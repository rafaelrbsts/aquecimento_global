import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"
import ArticleCard from "../components/articleCard"

import Typography from '@mui/material/Typography';

function Blog() {
    return (
        <>
            <Header/>
                <div style={{width:"600px", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", flexDirection:"column", margin:"90px auto"}}>
                    <Typography variant="h3" sx={{fontSize:"32px", fontWeight:"bold"}}>
                        Blog de Notícias
                    </Typography>
                    <Typography variant="body1" sx={{marginTop:"50px", fontSize:"22px"}}>
                        Mantenha-se informado sobre as últimas descobertas e avanços na luta contra as mudanças climáticas.
                    </Typography>
                </div>
                <div style={{display:"flex", width:"calc(100% - 48px)", justifyContent:"center", gap:"20px", margin:"76px auto"}}>
                    <ArticleCard
                        imagem="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2025/05/22124520/energia-solar-620x620.jpeg"
                        link="https://jornaldebrasilia.com.br/brasil-7/energia-solar-como-funciona-e-quais-os-beneficios-dessa-fonte-sustentavel/"
                        materia="ENERGIA"
                        corMateria="#059568"
                        data="20 de setembro de 2023"
                        titulo="O avanço da energia solar nas cidades brasileiras"
                        descricao="Como as capitais estão adaptando suas infraestruturas para fontes limpas e renováveis..."
                    />
                    <ArticleCard
                        imagem="https://nautica.com.br/wp-content/uploads/2023/06/dia-oceano-1.bx_.jpg"
                        link="https://nautica.com.br/dia-do-oceano-voce-sabe-qual-e-o-oceano-mais-antigo-da-terra/"
                        materia="OCEANOS"
                        corMateria="#0077B6"
                        data="12 Abr, 2024"
                        titulo="A temperatura dos oceanos bate recorde histórico"
                        descricao="Especialistas alertam para o impacto imediato na fauna marinha e nos padrões de chuva regionais..."
                    />
                </div>
                
            <Footer/>
            <ADrawer/>
        </>
    )
}

export default Blog