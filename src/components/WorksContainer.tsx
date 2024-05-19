import WorkCard from './WorkCard';
import { styled } from '@mui/system';
import { Container, Grid } from '@mui/material';


function WorksContainer() {

  const WorksContainer = styled(Container)({
    padding: '20px 0',
  });


  const works = [
    {
      image: 'https://sun9-56.userapi.com/impg/jWL479n5okoG7kW7ADyNEQ-E49VhETpEdnBIzA/UlBjxhcH57s.jpg?size=1280x963&quality=95&sign=cda26c68de0642649a229012554fd55e&type=album',
      title: '⚜Стол для гвинта',
      description: 'Наш самый младший и талантливый мастер сделал поле для игры в Гвинт в подарок дорогому человеку. /b Дуб, 80х46 см.',
    },
    {
      image: 'https://sun9-73.userapi.com/impg/5vKqKf4gz8sdxH4rPpLP9_xQGPqL-zSIyFybyw/qczRxSyqmyo.jpg?size=767x1080&quality=95&sign=2f64311daa0539fd2cf8bbabc394204c&type=album',
      title: '⚜Шкафы в кабинет. Выполнены по авторскому проекту дизайнера.',
      description: 'Здесь мы совмещали корпуса из ЛДСП и фасадные и видимые части в дубовом шпоне.    Тонировка - сложная, с использованием 3х тонов масла.',
    },
  ];

  return (
    <WorksContainer>
      <Grid container spacing={2}>
        {works.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WorkCard
              image={work.image}
              title={work.title}
              description={work.description}
            />
          </Grid>
        ))}
      </Grid>
    </WorksContainer>
  );
}

export default WorksContainer;
