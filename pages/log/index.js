import Layout from '../../components/Layout';
import { useState } from 'react';
import { listLogs } from '../../actions/log';
import Card from '../../components/Card';
import { withRouter } from 'next/router';

const Logs = ({ logs, router, totalLogs, logsSkip, logsLimit }) => {
  const [limit, setLimit] = useState(logsLimit);
  const [skip, setSkip] = useState(logsSkip);
  const [size, setSize] = useState(totalLogs);
  const [loadedLogs, setLoadedLogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listLogs(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedLogs([...loadedLogs, ...data.logs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-outline-primary btn-lg'>
          Load More
        </button>
      )
    );
  };

  const showAllLogs = () => {
    return logs.map((log, i) => {
      return (
        <article key={i}>
          <Card log={log} />
          <hr />
        </article>
      );
    });
  };

  const showLoadedLogs = () => {
    {
      JSON.stringify(loadedLogs);
    }
    return loadedLogs.map((lb, i) => (
      <article key={i}>
        <Card log={lb} />
        <hr />
      </article>
    ));
  };

  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className='container-fluid'>
            <header>
              <div className='col-md-12 pt-3'>
                <h1 className='display-4 font-weight-bold text-center'>Logs</h1>
              </div>
            </header>
          </div>

          <div className='container-fluid'>{showAllLogs()}</div>
          <div className='container-fluid'>{showLoadedLogs()}</div>
          <div className='text-center pt-5 pb-5'>{loadMoreButton()}</div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Logs.getInitialProps = () => {
  let skip = 0;
  let limit = 10;

  return listLogs(skip, limit).then((data) => {
    console.log(data);
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        logs: data.data,
        totalLogs: data.size,
        logsLimit: limit,
        logsSkip: skip,
      };
    }
  });
};

export default withRouter(Logs);
