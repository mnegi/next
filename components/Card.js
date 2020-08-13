import Link from 'next/link';
const Card = ({ log }) => {
  return (
    <div className='lead pb-2'>
      <header>
        <Link href={`/log/${log._id}`}>
          <a>
            <h2 className='pt-3 pb-3 font-weight-bold'>{log.url}</h2>
          </a>
        </Link>
      </header>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <section>
            <p>{log.method}</p>
          </section>
        </div>
        <div className='col-md-8'>
          <section>
            <div className='pb-3'>
              <p>{log.time}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Card;
