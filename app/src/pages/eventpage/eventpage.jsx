
import { EventCard } from '../../components/eventCard/eventCard';
import {useFetch} from '../../hooks/useFetch'
import style from './eventpage.module.scss'

export const Eventpage = () => {

  const { data, error } = useFetch (
    "https://api.mediehuset.net/mediesuset/events"
  )

  console.log(data);

  return (
    <section className={style.eventpageWrapper}>
      {data?.items.map((item) => {
        return (
          <EventCard
            title={item.title}
            image={item.image}
            date={item.local_time}
          />
        )
      })}
    </section>
  )

};