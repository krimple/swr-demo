/**
 * This function provides a SWR fetching API and associated error handling
 * for a set of RESTful URLs. It is configured using the <code>SWRConfig</code>
 * component in the template <code>/client/pages/_app.tsx</code>.
 *
 * This example has a long-winded and sort of naive error handler that unpacks
 * errors in payload formation as well as in > 200-level responses that are REST
 * errors.
 *
 * @param resource the URL to fetch when using the fetcher
 */
export async function fetcher (resource: string) {
// @ts-ignore
  let result;
  try {
    result = await fetch(resource);
  } catch (e) {
    console.log('***** Problem with fetch that results in an exception');
    console.error(e);
    throw new Error('Invalid Response');
  }
  if (result.ok) {
    try {
      return await result.json();
    } catch (e) {
      console.log('***** Problem with JSON payload', e);
      throw 'Result OK but JSON borked';
    }
  } else {
    console.log('****** Result ! OK', result.status, result.statusText);
    throw result.statusText;
  }
}
