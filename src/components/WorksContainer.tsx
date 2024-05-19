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
    {
      image: 'https://sun9-68.userapi.com/impg/xljE5-FYz3IrAGlJs3DPhEZUR7vWep2YvZTUQQ/UaBWp1mF_g8.jpg?size=621x1080&quality=95&sign=bd8e099ebd6d7735ec5f28fce2c20e52&type=album',
      title: '⚜ Цельнодубовые двери в процессе изготовления.',
      description: 'Стоят уже в храме Иулиания Тарсийского, в г. Пушкин. Толстые, массивные и фактурные. К сожалению, не сохранилось фотографий их стоящих на месте. Если доведется побывать там, обязательно сфотографируем и выложим.',
    },
    {
      image: 'https://sun9-40.userapi.com/impg/cZn7AM9ZBeGz6epjVZ_4R3ynuI8yggzyePmKtQ/Uta7zSNlb8M.jpg?size=897x1080&quality=95&sign=6ed0a26b72d7d50a26f1c46f5f76aebb&type=album',
      title: '⚜Шпонированные панели, закрывающие пространство под подоконниками.',
    },
    {
      image: 'https://sun9-79.userapi.com/impg/S5GZK12CxN9W-1lTtvNEkAuf_kw8MWpiXggl8g/3IHpe0OmWiA.jpg?size=810x1080&quality=95&sign=d060b2e41a40647d1c7bb9831fc42bf8&type=album',
      title: '⚜Детский комплекс. Кроватка, шкафы и зона для игр наверху.',
      description: 'По авторскому проекту дизайнера. Выполнен единым каркасом из фанеры в дубовом шпоне. Тонировка - масло.',
    },
    {
      image: 'https://sun9-20.userapi.com/impg/Ws4sIzxG_xnge5LaTSb-Txc3eYYpXPOMka9KXQ/XidfaKzNryg.jpg?size=633x1080&quality=95&sign=8a31baa17fd8de0dca14ab5a90d7ee29&type=album',
      title: '⚜Иногда мы делаем и простые, но важные вещи - оформление дверного проема.',
      description: 'Ощущение массивной доски, которая обрамляет проем. Просто и стильно.',
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
