import { NextResponse } from 'next/server'
 
// In Route handlers, fetch requests are not memoized as Route Handlers are not part of the React component tree.
// Route Handlers are only available inside the app directory https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// Route Handlers are the equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
export async function GET(request: Request) {
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
  const { searchParams } = new URL(request.url);
  const amenity = searchParams.get('amenity'); // amenity=toilets
  const lat = searchParams.get('lat'); // lat=35.657741
  const lon = searchParams.get('lon'); // lon=139.7009714

  // https://typescript-jp.gitbook.io/deep-dive/future-javascript/template-strings
  const query = `
  [out:json];
  node(around:1000, ${lat}, ${lon})[amenity=${amenity}];
  out;
  `  

  const res = await fetch(`https://overpass-api.de/api/interpreter?data=${query}`, {
    headers: {
        "Content-Type": "application/json",
    }
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}