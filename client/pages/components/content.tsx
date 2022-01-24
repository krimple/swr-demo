import useSWR from 'swr';
export default function Content() {
  const { data, error, mutate, isValidating } = useSWR('/api/cms/demo');
  return (
    <>
      <div>
        <button onClick={() => { mutate().then(() => false) }}>Refresh Now!</button>
      </div>
      { !isValidating && error && <div>Error: {error}</div> }
      { isValidating && <div>loading...</div> }
      { !isValidating && !error && data && <><h3>Retrieved Data</h3><div dangerouslySetInnerHTML={{__html: data.data}} /></> }
      { isValidating && !error && data && <><h3>Cached data...</h3><div dangerouslySetInnerHTML={{__html: data.data}} /></> }
    </>
  );
}
