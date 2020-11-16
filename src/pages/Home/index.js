import React from 'react';
//variables
import variablesLocal from '../../variables/variablesLocal';
//components
import Button from '../../components/form/Button';
import CardImages from '../../components/form/CardImages';
import CarrouselCards from '../../components/form/CarrouselCards';
//theme
import theme from '../../styles/theme';
//images
import imageMovie from '../../assets/images/imageMovie.png';
import imageProduct from '../../assets/images/imageProduct.png';
//styles
import { ContainerHome } from './styles';

const Home = () => {
  console.log(variablesLocal);
  return (
    <ContainerHome>
      <header className='header-home-container'>
        <div className='header-home-container-first'>
          <header className='header-home-menu'></header>
        </div>
      </header>
      <header className='header-home-footer'>
        <h1>Nascemos de um sonho, para fazer a diferença no mundo</h1>
        <p>
          Descubra como tudo começou e entenda por que a Logo Ipsum faz a
          diferença no mundo. Há muitos sabores para se deliciar.
        </p>
        <Button
          borderRadiusButton='8px'
          paddingButton='3.2rem 50px'
          backgroundButton='#2E7BB2'
          textButton='Conheça a Logo Ipsum'
        />
      </header>
      <body>
        <div className='modal-container-services'>
          {variablesLocal.servicesLocal &&
            variablesLocal.servicesLocal.map((service, index) => {
              return (
                <CardImages
                  key={index}
                  iconCard={service.icon}
                  imageCard={service.image}
                  descriptionCard={service.description}
                  backgroundIconCard={service.backgroundColor}
                />
              );
            })}
        </div>
        <div className='modal-container-first'>
          <div className='description-first'>
            <h1>Energia que nutre o esporte.</h1>
            <p className='description-first-details'>
              <p>
                Quando você coloca suas granolas e alimentos favoritos na
                sacola, tenha certeza de que o seu pedido está ajudando a fazer
                acontecer algum projeto no esporte.
              </p>
              <p>
                Nos nossos mais de 20 anos de história, apoiamos grupos
                esportivos e atletas de várias modalidades: triathlon, mountain
                bike, ciclismo, corrida, jiu-jitsu, canoagem, stand up paddle,
                judô e corrida de aventura, por exemplo.
              </p>
              <p>
                É assim que a Logo Ipsum nutre o esporte com toda a energia que
                ele merece. Fazemos questão de estar presentes sempre. E
                lembre-se: você é parte importante dessa saudável relação.
              </p>
            </p>
            <Button
              backgroundButton={theme.colors.secondary}
              textButton='SAIBA MAIS'
            />
          </div>
          <div className='movie-first'>
            <div className='movie-container'>
              <div className='button-play-movie-first'>
                <Button
                  paddingButton='40px'
                  borderRadiusButton='100%'
                  backgroundButton={theme.colors.secondary}
                />
              </div>
              <img src={imageMovie} alt='video' />
            </div>
          </div>
        </div>

        <div className='modal-container-secondary'>
          <div className='product-secondary'>
            <img src={imageProduct} alt='imagem do produto' />
          </div>
          <div className='description-secondary'>
            <h1>Precisa do sabor de alimentos naturais feitos com amor?</h1>
            <p>
              Alimentos naturais feitos com carinho, sabor e qualidade. Tudo
              para dar a energia que você precisa para o seu dia.
            </p>
            <div className='button-secondary-product'>
              <Button
                backgroundButton={theme.colors.tertiary}
                textButton='COMPRAR AGORA'
              />
            </div>
          </div>
        </div>

        <div className='modal-container-tertiary'>
          <div className='description-tertiary'>
            <h1>É a sua vez de fazer bem + feliz!</h1>
            <p className='description-tertiary-details'>
              Os melhores sabores se misturam em várias publicações imperdíveis.
              Já conferiu? Fique por dentro de tudo que fazemos: acompanhe
              projetos que apoiamos, dicas, receitas e muito mais!
            </p>
            <div className='button-tertiary-carrousel'>
              <Button
                backgroundButton={theme.colors.tertiary}
                textButton='FIQUE LIGADO'
              />
            </div>
          </div>
          <div className='body-carrousel-tertiary'>
            {variablesLocal.carrouselCards &&
              variablesLocal.carrouselCards.map((carrousel, index) => {
                return (
                  <CarrouselCards
                    key={index}
                    imageCard={carrousel.image}
                    descriptionCard={carrousel.description}
                    headerCard={carrousel.titleHeader}
                  />
                );
              })}
            <div className='button-carrousel-next'>
              <Button
                paddingButton='20px'
                borderRadiusButton='100%'
                backgroundButton={theme.colors.secondary}
              />
            </div>
          </div>
        </div>
      </body>
    </ContainerHome>
  );
};

export default Home;
