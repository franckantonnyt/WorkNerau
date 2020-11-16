//images
import cardImage from '../assets/images/cardImage.png';
import cardImage2 from '../assets/images/cardImage2.png';
import cardImage3 from '../assets/images/cardImage3.png';
import carrouselImg1 from '../assets/images/carrouselImg1.png';
import carrouselImg2 from '../assets/images/carrouselImg2.png';
import carrouselImg3 from '../assets/images/carrouselImg3.png';
//icons
import serviceIcon1 from '../assets/icons/serviceIcon1.svg';
import serviceIcon2 from '../assets/icons/serviceIcon2.svg';
import serviceIcon3 from '../assets/icons/serviceIcon3.svg';

export default {
  servicesLocal: [
    {
      image: cardImage,
      description:
        'Logo Ipsum Transforma: projetos que fazem bem, bem mais feliz.',
      icon: serviceIcon1,
      backgroundColor: '#143866',
    },
    {
      image: cardImage2,
      description:
        'Matéria-prima direto do pequeno produtor com todo o carinho que você merece.',
      icon: serviceIcon2,
      backgroundColor: '#1D4F91',
    },
    {
      image: cardImage3,
      description:
        'Reciclar as embalagens Logo Ipsum é um dos ingredientes da nossa receita de sucesso.',
      icon: serviceIcon3,
      backgroundColor: '#2566BB',
    },
  ],
  carrouselCards: [
    {
      image: carrouselImg1,
      titleHeader: 'Alimentos funcionais: três opções para incluir na dieta',
      description:
        'A busca pela boa alimentação é importante como um sinônimo de saúde.',
    },
    {
      image: carrouselImg2,
      titleHeader: 'Projeto de Alfabetização da Logo Ipsum na Fazenda Alegria',
      description:
        'É com esse pensamento e engajados no espírito de transformação...',
    },
    {
      image: carrouselImg3,
      titleHeader: 'Pasta de Amendoim: Origem e Benefícios',
      description:
        'Relembrando os doces de Festa Junina, as pastas de amendoim têm feito...',
    },
  ],
};
