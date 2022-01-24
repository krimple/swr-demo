import useSWR from 'swr';
export default function Content() {
  const { data, error, mutate, isValidating } = useSWR('/api/cms/demo');
  return (
    <>
      <div>
        <button onClick={() => { mutate().then(() => false) }}>Refresh Now!</button>
      </div>
      { !isValidating && error &&
        <>
          <h1>Error</h1>
          <div>{error}</div>
        </>
      }
      { isValidating &&
        <>
          <h1>High-end Spinner Action</h1>
          <div>loading...</div>
        </>
      }
      { !isValidating && !error && data &&
        <>
          <h1>Retrieved Data</h1>
          <div dangerouslySetInnerHTML={{__html: data.data}} />
        </>
      }
      { isValidating && !error && data &&
        <>
          <h1>Cached data...</h1>
          <div dangerouslySetInnerHTML={{__html: data.data}} />
        </>
      }
    </>
  );
}
