import React from 'react'
import './News.css';

const News = () => {
    return (
        <>
            <div className="news__container">
                <div className="news__container--column">
                    <img src="../../../img/img01.jpeg" alt="panton" />
                    <h5 className='h5News'>DESIGNED BY Verner Panton</h5>
                    <p className='pNews'> Verner Panton started out as a painter before studying architecture at the Royal Academy of Fine Arts in Copenhagen. After an apprenticeship with architect/designer Arne Jacobsen, Panton pursued a path in furniture and interior design. It was during this part of his career that he became famous for his avant-garde work, such as a series of chairs with no legs and a sofa curated to be placed vertically against a wall. In the 60's and 70's, his passion for designing entire environments led to immersive interiors featuring his hypnotic patterns and futuristic designs for furniture, lighting, wallpapers, posters and rugs.</p>
                </div>

                <div className="news__container--column" >
                <img src="../../../img/publi02.png" alt="spaceCopenhague"/>
                    <h5 className='h5News'>Designed by Space Copenhagen</h5>
                    <p className='pNews'>Established in 2005 by Signe Bindslev Henriksen and Peter Bundgaard Rützou, Space Copenhagen is a design studio works across multiple disciplines from furniture, lighting and refined objects, to art installations, art direction and interior design for private homes, hotels and restaurants all over the world. The ambition is to forge new paths by balancing opposites — classic and modern, industrial and organic, sculptural and minimal, light and shade. Duality and contrast. Curiosity as a fundamental human condition.</p>
                </div>

                <div className="news__container--column">
                <img src="../../../img/publi03.png" alt="Welling"/>
                <h5 className='h5News'>Hee Welling: Designer of november</h5>
                <p className='pNews'>Hee Welling (born 1974) is an award-winning furniture designer. In addition to being exhibited at fairs and museums worldwide, his products can be found in a diverse array of interiors, from The Oslo Opera House to Australia's parliament.Raised in the Danish countryside, Welling's lifelong appreciation for the outdoors can be seen in the honest minimalism of his pieces. Each of his creations is united by a distinctive visual identity as he focuses on clean lines and simple silhouettes. Welling works with a wide array of materials, with wood and metals used alongside non-natural elements like plastic.</p>
                </div>
            </div>
        </>
  )
}

export default News