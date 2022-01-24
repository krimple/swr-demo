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
      { !isValidating && !error && data && <div dangerouslySetInnerHTML={{__html: data.data}} /> }
    </>
  );

  return <p>loading...</p>;
}
